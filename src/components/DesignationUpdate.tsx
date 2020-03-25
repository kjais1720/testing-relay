import { Trans } from '@lingui/macro'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { useAlert } from '@saastack/core'
import { FormContainer } from '@saastack/layouts/containers'
import { FormContainerProps } from '@saastack/layouts/types'
import { PubSub } from '@saastack/pubsub'
import { useNavigate, useParams } from '@saastack/router'
import React from 'react'
import { createFragmentContainer } from 'react-relay'
import { useRelayEnvironment } from 'react-relay/hooks'
import { graphql } from 'relay-runtime'
import { DesignationUpdate_designations } from '../__generated__/DesignationUpdate_designations.graphql'
import { DesignationUpdate_roles } from '../__generated__/DesignationUpdate_roles.graphql'
import { DesignationInput } from '../__generated__/UpdateDesignationMutation.graphql'
import DesignationUpdateFormComponent from '../forms/DesignationUpdateFormComponent'
import UpdateDesignationMutation from '../mutations/UpdateDesignationMutation'
import namespace from '../namespace'
import DesignationAddValidations from '../utils/DesignationAddValidations'

interface Props extends Omit<FormContainerProps, 'formId'> {
    designations: DesignationUpdate_designations,
    roles: DesignationUpdate_roles

}

const useStyles = makeStyles({
    button: {
        textTransform: 'none',
        position: 'absolute',
        left: 16,
        bottom: 16,
    }
})

const formId = 'designation-update-form'

const DesignationUpdate: React.FC<Props> = ({ designations, roles, ...props }) => {
    const classes = useStyles()
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
      const roleIds=values.roleIds
      let updatedRoles
         if (roleIds){
              updatedRoles=roles.filter((role)=>roleIds.includes(role.id))
         }

        const designation = {
            ...values,
            roles:updatedRoles
        }

        UpdateDesignationMutation.commit(environment, designation, ['name', 'description', 'roleIds'], {
            onSuccess,
            onError,
        })
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
        <FormContainer open={open} onClose={handleClose} onExited={navigateBack} header={<Trans>Update designation</Trans>} formId={formId} loading={loading} {...props}>
            <DesignationUpdateFormComponent<DesignationUpdate_roles> isUpdate roles={roles!} onSubmit={handleSubmit} id={formId} initialValues={initialValues} validationSchema={DesignationAddValidations}/>


            <Button className={classes.button} variant="text" onClick={() => navigate('../delete')}>
                <Trans>Remove Designation</Trans>
            </Button>
        </FormContainer>
    )
}

export default createFragmentContainer(
    DesignationUpdate,
    {
        designations: graphql`
            fragment DesignationUpdate_designations on Designation @relay(plural: true) {
                id
                name
                description
                roleIds
            }
        `,
        roles: graphql`
            fragment DesignationUpdate_roles on Role @relay(plural: true) {
                id
                roleName

            }
        `,
    },
)
