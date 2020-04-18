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

const DesignationAdd = loadable(() => import('./DesignationAdd'))
const DesignationDelete = loadable(() => import('./DesignationDelete'))
const DesignationEmptyState = loadable(() => import('./DesignationEmptyState'))
const DesignationUpdate = loadable(() => import('./DesignationUpdate'))

interface Props {
    parent: string,
    designations: DesignationMaster_designations,
}

const DesignationMaster: React.FC<Props> = ({ designations: { designations: { designation: designations }, roles: { role: roles } }, parent }) => {
    const navigate = useNavigate()
    const variables = { parent }

    const header = <Trans>Designations</Trans>
    const subHeader = <Trans>Designation is a official role or title of a person in your organization</Trans>

    const actions: ActionItem[] = [
        { icon: AddOutlined, onClick: () => navigate('add'), title: <Trans>Add</Trans> },
    ]

    React.useEffect(() => {
        PubSub.publish(namespace.fetch, designations)
    }, [designations])


    const col1 = !designations.length ? <DesignationEmptyState onAction={() => navigate('add')}/> : <DesignationList designations={designations}/>

    return (
        <Layout actions={actions} header={header} subHeader={subHeader} col1={col1}>
            <Routes>
                <Route path="add" element={<DesignationAdd roles={roles} variables={variables}/>}/>
                <Route path=":id/update" element={<DesignationUpdate roles={roles} variables={variables} designations={designations}/>}/>
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
                        ...DesignationUpdate_roles
                        ...DesignationAdd_roles
                    }
                }

            }
        `,
    },
)


