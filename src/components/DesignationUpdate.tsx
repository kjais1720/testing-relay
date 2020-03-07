import { useRelayEnvironment } from 'react-relay/hooks'
import { Trans } from '@lingui/macro'
import { useAlert } from '@saastack/core'
import { FormContainer } from '@saastack/layouts/containers'
import { FormContainerProps } from '@saastack/layouts/types'
import { useNavigate, useParams } from '@saastack/router'
import React from 'react'
import { DesignationInput } from '../__generated__/UpdateDesignationMutation.graphql'
import UpdateDesignationMutation from '../mutations/UpdateDesignationMutation'
import DesignationUpdateFormComponent from '../forms/DesignationUpdateFormComponent'
import { PubSub } from '@saastack/pubsub'
import namespace from '../namespace'
import { createFragmentContainer } from 'react-relay'
import { graphql } from 'relay-runtime'
import { DesignationUpdate_designations } from '../__generated__/DesignationUpdate_designations.graphql'
import DesignationAddValidations from '../utils/DesignationAddValidations'

interface Props extends Omit<FormContainerProps, 'formId'> {
    designations: DesignationUpdate_designations,
}

const formId = 'designation-update-form'

const DesignationUpdate: React.FC<Props> = ({ designations, ...props }) => {
    const environment = useRelayEnvironment()
    const showAlert = useAlert()
    const navigate = useNavigate()
    const [open, setOpen] = React.useState(true)
    const [loading, setLoading] = React.useState(false)

    const { id } = useParams()
    const designation = designations.find(i => i.id === window.atob(id!))


    const navigateBack = () => navigate('../../')
    const handleClose = () => setOpen(false)
    React.useEffect(() => {
        if (!designation) {
            handleClose()
        }
    }, [designation])
    if (!designation) {
        return null
    }

    const handleSubmit = (values: DesignationInput) => {
        setLoading(true)
        const designation = {
            ...values,
        }
        UpdateDesignationMutation.commit(environment, designation, ['name', 'description'], { onSuccess, onError })
    }

    const onError = (e: string) => {
        setLoading(false)
        showAlert(e, {
            variant: 'error',
        })
    }

    const onSuccess = (response: DesignationInput) => {
        PubSub.publish(namespace.update, response)
        setLoading(false)
        showAlert(<Trans>Designation updated successfully!</Trans>, {
            variant: 'info',
        })
        handleClose()
    }

    const initialValues = {
        ...designation,
    }

    return (
        <FormContainer open={open} onClose={handleClose} onExited={navigateBack}
                       header={<Trans>Update designation</Trans>} formId={formId} loading={loading} {...props}>
            <DesignationUpdateFormComponent<DesignationInput> onSubmit={handleSubmit} id={formId}
                                                              initialValues={initialValues}
                                                              validationSchema={DesignationAddValidations}/>
        </FormContainer>
    )
}

export default createFragmentContainer(
    DesignationUpdate,
    {
        designations: graphql`
            fragment DesignationUpdate_designations on Designation @relay(plural: true) {
                id,
                name,
                description
            }
        `,
    },
)
