import { useRelayEnvironment } from 'react-relay/hooks'
import { Trans } from '@lingui/macro'
import { useAlert } from '@saastack/core'
import { ConfirmContainer } from '@saastack/layouts/containers'
import { PubSub } from '@saastack/pubsub'
import namespace from '../namespace'
import { useNavigate, useParams } from '@saastack/router'
import DeleteDesignationMutation from '../mutations/DeleteDesignationMutation'
import React from 'react'
import { Variables } from 'relay-runtime'

interface Props {
    variables: Variables,
}

const DesignationDelete: React.FC<Props> = ({ variables }) => {
    const showAlert = useAlert()
    const environment = useRelayEnvironment()
    const { id } = useParams()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    const handleDelete = () => {
        setLoading(true)
        DeleteDesignationMutation.commit(environment, variables, window.atob(id!), { onSuccess, onError })
    }

    const navigateBack = () => navigate('../../')
    const handleClose = () => setOpen(false)

    const onError = (e: string) => {
        setLoading(false)
        showAlert(e, {
            variant: 'error',
        })
    }

    const onSuccess = (id: string) => {
        PubSub.publish(namespace.delete, id)
        setLoading(false)
        showAlert(<Trans>Designation deleted successfully!</Trans>, {
            variant: 'info',
        })
        handleClose()
    }

    return (
        <ConfirmContainer loading={loading} header={<Trans>Delete Designation</Trans>} open={open} onClose={handleClose}
                          onExited={navigateBack} onAction={handleDelete}/>
    )
}

export default DesignationDelete

