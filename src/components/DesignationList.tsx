import { ListContainer } from '@saastack/layouts/containers'
import { ListContainerProps } from '@saastack/layouts/types'
import { Trans } from '@lingui/macro'
import { ListItemText } from '@material-ui/core'
import React from 'react'
import { createFragmentContainer, graphql } from 'react-relay'
import { DesignationList_designations } from '../__generated__/DesignationList_designations.graphql'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import { ActionItem, Actions } from '@saastack/components'
import { DeleteOutlined, EditOutlined } from '@material-ui/icons'
import useNavigate from '@saastack/router/useNavigate'

interface Props extends Omit<ListContainerProps<DesignationList_designations>, 'items'> {
    designations: DesignationList_designations
}

const DesignationList: React.FC<Props> = ({ designations, ...props }) => {
    const navigate = useNavigate()
    const listProps = {
        render: (e: DesignationList_designations[0]) => {
            const actions: ActionItem[] = [
                {
                    title: <Trans>Update</Trans>,
                    icon: EditOutlined,
                    onClick: () => navigate(`${window.btoa(e.id)}/update`),
                },
                {
                    title: <Trans>Delete</Trans>,
                    icon: DeleteOutlined,
                    onClick: () => navigate(`${window.btoa(e.id)}/delete`),
                },
            ]
            return [
                <ListItemText key="name" primary={e.name} secondary={e.description}>
                </ListItemText>,
                <ListItemSecondaryAction key="action">
                    <Actions items={actions}/>
                </ListItemSecondaryAction>,

            ]
        },
    }
    return <ListContainer<DesignationList_designations> items={designations} listProps={listProps}  {...props}/>
}

export default createFragmentContainer(DesignationList, {
    designations: graphql`
        fragment DesignationList_designations on Designation @relay(plural: true) {
            id,
            name,
            description
        }
    `,
})
