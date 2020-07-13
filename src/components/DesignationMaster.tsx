import { Trans } from '@lingui/macro'
import loadable from '@loadable/component'
import { AddOutlined } from '@material-ui/icons'
import { ActionItem } from '@saastack/components'
import { Layout } from '@saastack/layouts'
import { PubSub } from '@saastack/pubsub'
import { Route, Routes, useNavigate } from '@saastack/router'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { DesignationMaster_designations } from '../__generated__/DesignationMaster_designations.graphql'
import namespace from '../namespace'
import DesignationList from './DesignationList'
import { useConfig } from '@saastack/core'

const DesignationAdd = loadable(() => import('./DesignationAdd'))
const DesignationDelete = loadable(() => import('./DesignationDelete'))
const DesignationEmptyState = loadable(() => import('./DesignationEmptyState'))
const DesignationUpdate = loadable(() => import('./DesignationUpdate'))

interface Props {
    parent: string,
    designations: DesignationMaster_designations,
}
const filterRoles = (roles:  DesignationMaster_designations['roles']['role'], exclude: string[]) => roles.filter(r => (r && !r.isDefault) || (r.isDefault && !exclude.find(k => r.roleName.includes(k))))

const DesignationMaster: React.FC<Props> = ({ designations: { designations: { designation: designations }, roles: { role: roles } }, parent }) => {
    const navigate = useNavigate()
    const variables = { parent }
    const { companies } = useConfig()


    const header = <Trans>Designations</Trans>
    const subHeader = <Trans>Designation is a official role or title of a person in your organization</Trans>

    const actions: ActionItem[] = [
        { icon: AddOutlined, onClick: () => navigate('add'), title: <Trans>Add</Trans> },
    ]

    if (!companies) {
        return null
    }
    const allRoles = roles.filter(r => r && ['com', 'grp', 'loc', 'emp'].includes(r.level))


    const locationCount = companies.reduce((a, b) => a + (b.locations ? b.locations!.edges!.length : 0), 0)
    const rolesArr = companies.length > 1 ? allRoles : (locationCount > 1 ? filterRoles(allRoles, ['Group', 'Company']) : filterRoles(allRoles, ['Group', 'Company', 'Location']))

    React.useEffect(() => {
        PubSub.publish(namespace.fetch, designations)
    }, [designations])


    const col1 = !designations.length ? <DesignationEmptyState onAction={() => navigate('add')}/> : <DesignationList designations={designations}/>

    return (
        <Layout actions={actions} header={header} subHeader={subHeader} col1={col1}>
            <Routes>
                <Route path="add" element={<DesignationAdd roles={roles} variables={variables}/>}/>
                <Route path=":id/update" element={<DesignationUpdate roles={rolesArr} variables={variables} designations={designations}/>}/>
                <Route path=":id/delete" element={<DesignationDelete variables={variables}/>}/>
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
                        ...DesignationUpdate_roles
                        ...DesignationAdd_roles
                    }
                }

            }
        `,
    },
)


