import { Trans } from '@lingui/macro'
import loadable from '@loadable/component'
import { AddOutlined } from '@material-ui/icons'
import { ActionItem } from '@saastack/components'
import { Layout, LayoutProps } from '@saastack/layouts'
import { Route, Routes, useNavigate } from '@saastack/router'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { DesignationMaster_designations } from '../__generated__/DesignationMaster_designations.graphql'
import DesignationList from './DesignationList'
import { Company, useConfig } from '@saastack/core'
import { useCan } from '@saastack/core/roles'
import Roles from '@saastack/core/roles/Roles'

const DesignationAdd = loadable(() => import('./DesignationAdd'))
const DesignationDelete = loadable(() => import('./DesignationDelete'))
const DesignationEmptyState = loadable(() => import('./DesignationEmptyState'))
const DesignationUpdate = loadable(() => import('./DesignationUpdate'))

interface Props {
    parent: string,
    designations: DesignationMaster_designations,
    layoutProps?: LayoutProps
}

export const defaultRolesToExclude = (companies: Company[]): string[] => {
    if (companies.length > 1) {
        return []
    }
    const locationCount = companies!.reduce((a, b) => a + (b.locations ? b.locations!.edges!.length : 0), 0)
    if (locationCount > 1) {
        return ['Group', 'Company']
    }

    return ['Group', 'Company', 'Location']
}

const filterRoles = (roles: DesignationMaster_designations['roles']['role'], exclude: string[]) => roles.filter(r => (r && !r.isDefault) || (r.isDefault && !exclude.find(k => r.roleName.includes(k))))
const filterDesignations = (designations: DesignationMaster_designations['designations']['designation'], exclude: string[]) => {
    return designations.filter(d => {
        const roles = d.roles?.filter(Boolean) ?? []
        return !roles.length || !roles[0].isDefault || !exclude.find(k => d.name.includes(k))
    })
}

const DesignationMaster: React.FC<Props> = ({ layoutProps, designations: { designations: { designation }, roles: { role: roles } }, parent }) => {
    const navigate = useNavigate()
    const variables = { parent }
    const { companies, groupId } = useConfig()
    const can = useCan()

    const canManageAdmin = (id: string) => can([Roles.DesignationsAdmin], id)
    const canManageEditor = (id: string) => can([Roles.DesignationsAdmin, Roles.DesignationsEditor], id)

    const header = <Trans>Designations</Trans>
    const subHeader = <Trans>Designation is an official role or title of a person in your organization</Trans>

    const actions: ActionItem[] = canManageAdmin(parent) ? [
        { icon: AddOutlined, onClick: () => navigate('add'), title: <Trans>Add</Trans> },
    ] : []

    const canManageGroup = can([Roles.GroupsAdmin, Roles.GroupsEditor], groupId!)
    const allRoles = roles.filter(Boolean).filter(r => r && ['com', 'grp', 'loc', 'emp'].includes(r.level))
    const exclude = defaultRolesToExclude(companies!)
    const rolesArr = canManageGroup ? filterRoles(allRoles, exclude) : filterRoles(allRoles, [...exclude, 'Owner', 'Co-Owner'])
    const designations = filterDesignations(designation, exclude)

    const col1 = !designations.length ?
        <DesignationEmptyState canManage={canManageAdmin(parent)} onAction={() => navigate('add')}/> :
        <DesignationList designations={designations}
                         onItemClick={canManageEditor(parent) ? (id: string) => navigate(`${window.btoa(id!)}/update`) : undefined}/>

    return (
        <Layout boxed actions={actions} header={header} subHeader={subHeader} col1={col1} {...layoutProps}>
            <Routes>
                {
                    canManageAdmin(parent) && <>
                        <Route path="add" element={<DesignationAdd roles={rolesArr} variables={variables}/>}/>
                        <Route path=":id/delete" element={<DesignationDelete variables={variables}/>}/>
                    </>
                }
                {
                    canManageEditor(parent) && <>
                        <Route path=":id/update" element={<DesignationUpdate roles={rolesArr} variables={variables}
                                                                             designations={designations}
                                                                             isAdmin={canManageAdmin(parent)}/>}/>
                    </>
                }
            </Routes>
        </Layout>
    )
}

export default createFragmentContainer(
    DesignationMaster,
    {
        designations: graphql`
            fragment DesignationMaster_designations on Query @argumentDefinitions(parent: {type: "String"}) {
                designations(parent: $parent) {
                    designation {
                        id
                        name
                        roles {
                            level
                            priority
                            isDefault
                        }
                        ...DesignationList_designations
                        ...DesignationUpdate_designations
                    }
                }
                roles(hide: true, parent: $parent) {
                    role {
                        id
                        level
                        isDefault
                        roleName
                        level
                        priority
                        ...DesignationUpdate_roles
                        ...DesignationAdd_roles
                    }
                }

            }
        `,
    },
)


