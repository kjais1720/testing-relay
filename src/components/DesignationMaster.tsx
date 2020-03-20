import { ActionItem, Breadcrumb } from '@saastack/components'
import { Layout } from '@saastack/layouts'
import { PubSub } from '@saastack/pubsub'
import namespace from '../namespace'
import { Trans } from '@lingui/macro'
import loadable from '@loadable/component'
import { AddOutlined } from '@material-ui/icons'
import React from 'react'
import { createRefetchContainer, graphql, RelayRefetchProp } from 'react-relay'
import { DesignationMaster_designations } from '../__generated__/DesignationMaster_designations.graphql'
import DesignationList from './DesignationList'
import { Route, Routes, useNavigate } from '@saastack/router'
import { useDidMountEffect } from '@saastack/utils'
import { Switcher } from '@saastack/core'

const DesignationAdd = loadable(() => import('./DesignationAdd'))
const DesignationDelete = loadable(() => import('./DesignationDelete'))
const DesignationEmptyState = loadable(() => import('./DesignationEmptyState'))
const DesignationUpdate = loadable(() => import('./DesignationUpdate'))

interface Props {
    parent: string,
    designations: DesignationMaster_designations,
    relay: RelayRefetchProp
}

const DesignationMaster: React.FC<Props> = ({ designations: { designations: { designation: designations }, roles: { role: roles } }, parent: _, relay: { refetch } }) => {
    const navigate = useNavigate()
    const [parent, setParent] = React.useState(_)
    const breadcrumbs = <Breadcrumb items={[{ title: <Trans>Settings</Trans>, to: '../../' }]} />
    const variables = { parent }

    const header = <Trans>Designation is a official role or title of a person in your organization </Trans>

    const actions: ActionItem[] = [
        { icon: AddOutlined, onClick: () => navigate('add'), title: <Trans>Add</Trans> },
    ]

    const refetchDesignations = () => refetch({}, {}, undefined, { force: true })

    useDidMountEffect(() => {
        refetchDesignations()
    }, [parent])

    React.useEffect(() => {
        PubSub.publish(namespace.fetch, designations)
    }, [designations])


    const col1 = !designations.length ? <DesignationEmptyState onAction={() => navigate('add')} /> :
        <DesignationList roles={roles} designations={designations} />

    return (
        <Layout switcher={<Switcher levels={'com'} value={variables.parent} onChange={setParent} />}
            breadcrumbs={breadcrumbs} type="OneColumnLayout" actions={actions} header={header} col1={col1}>
            <Routes>
                <Route path="add" element={<DesignationAdd roles={roles} variables={variables} />} />
                <Route path=":id/update" element={<DesignationUpdate roles={roles} variables={variables} designations={designations} />} />
                <Route path=":id/delete" element={<DesignationDelete variables={variables} />} />
            </Routes>
        </Layout>
    )
}

export default createRefetchContainer(
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
                        ...DesignationList_roles
                        ...DesignationUpdate_roles
                        ...DesignationAdd_roles
                    }
                }
        
            }
        `,
    },
    graphql`
        query DesignationMasterRefetchQuery($parent:String){
            ...DesignationMaster_designations @arguments(parent: $parent)
        }`,
)


