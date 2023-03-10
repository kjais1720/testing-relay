import { Trans } from '@lingui/macro'
import { ListItemText } from '@material-ui/core'
import { ListContainer } from '@saastack/layouts/containers'
import { ListContainerProps } from '@saastack/layouts/types'

import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { DesignationList_designations } from '../__generated__/DesignationList_designations.graphql'

interface Props extends Omit<ListContainerProps<DesignationList_designations>, 'items'> {
    designations: DesignationList_designations,
}

const DesignationList: React.FC<Props> = ({ designations, ...props }) => {
    const listProps = {
        render: (e: DesignationList_designations[0]) => <ListItemText
            secondary={e.roles?.filter(Boolean).map(r => r.roleName).join(', ')} primary={e.name}/>,
    }
    const tableProps = {
        config: [
            {
                key: 'name',
                label: <Trans>Title</Trans>,

            },
            {
                key: 'defaultRole',
                label: <Trans>Default Role</Trans>,

            },
        ],
        render: {
            defaultRole: (e: DesignationList_designations[0]) => e.roles?.filter(Boolean).map(r => r.roleName).join(', '),
        },

    }

    return <ListContainer<DesignationList_designations> tableProps={tableProps} items={designations}
                                                        listProps={listProps} {...props}/>
}

export default createFragmentContainer(DesignationList, {
    designations: graphql`
        fragment DesignationList_designations on Designation @relay(plural: true) {
            id
            name
            description
            roles {
                id
                roleName
            }
        }
    `,
})
