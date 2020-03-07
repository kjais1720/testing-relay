import { useRelayEnvironment } from 'react-relay/hooks'
import { Trans } from '@lingui/macro'
import { useAlert } from '@saastack/core'
import { FormContainer } from '@saastack/layouts/containers'
import { FormContainerProps } from '@saastack/layouts/types'
import { useNavigate } from '@saastack/router'
import React from 'react'
import { DesignationInput } from '../__generated__/CreateDesignationMutation.graphql'
import CreateDesignationMutation from '../mutations/CreateDesignationMutation'
import DesignationAddFormComponent from '../forms/DesignationAddFormComponent'
import { PubSub } from '@saastack/pubsub'
import namespace from '../namespace'
import DesignationAddInitialValues from '../utils/DesignationAddInitialValues'
import DesignationAddValidations from '../utils/DesignationAddValidations'
import { Variables } from 'relay-runtime'

interface Props extends Omit<FormContainerProps, 'formId'> {
    variables: Variables,
}

const formId = 'designation-add-form'

const DesignationAdd: React.FC<Props> = ({ variables, ...props }) => {
    const environment = useRelayEnvironment()
    const showAlert = useAlert()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    const navigateBack = () => navigate('../')
    const handleClose = () => setOpen(false)

    const handleSubmit = (values: DesignationInput) => {
        setLoading(true)
        const designation = {
            ...values,
        }
        CreateDesignationMutation.commit(environment, variables, designation, { onSuccess, onError })
    }

    const onError = (e: string) => {
        setLoading(false)
        showAlert(e, {
            variant: 'error',
        })
    }

    const onSuccess = (response: DesignationInput) => {
        PubSub.publish(namespace.create, response)
        setLoading(false)
        showAlert(<Trans>Designation added successfully!</Trans>, {
            variant: 'info',
        })
        handleClose()
    }

    const initialValues = {
        ...DesignationAddInitialValues,
    }

    return (
        <FormContainer open={open} onClose={handleClose} onExited={navigateBack} header={<Trans>New designation</Trans>}
                       formId={formId} loading={loading} {...props}>
            <DesignationAddFormComponent<DesignationInput> onSubmit={handleSubmit} id={formId}
                                                           initialValues={initialValues}
                                                           validationSchema={DesignationAddValidations}/>
        </FormContainer>
    )
}

export default DesignationAdd
