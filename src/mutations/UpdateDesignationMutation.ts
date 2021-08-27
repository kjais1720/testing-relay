import { MutationCallbacks } from '@saastack/relay'
import { commitMutation, graphql } from 'react-relay'
import { Disposable, Environment } from 'relay-runtime'
import {
    DesignationInput,
    UpdateDesignationInput,
    UpdateDesignationMutation,
    UpdateDesignationMutationResponse,
} from '../__generated__/UpdateDesignationMutation.graphql'
import { encodeUnicode } from '@saastack/utils'

const mutation = graphql`
    mutation UpdateDesignationMutation($input: UpdateDesignationInput) {
        updateDesignation(input: $input) {
            clientMutationId
            payload {
                id
                name
                description
                roles {
                    id
                    roleName
                    level
                    priority
                    isDefault
                }
            }
        }
    }
`

let tempID = 0

const commit = (environment: Environment, designation: DesignationInput, updateMask: string[], callbacks?: MutationCallbacks<DesignationInput>): Disposable => {
    const input: UpdateDesignationInput = {
        updateMask: { paths: updateMask },
        designation: {
            ...designation,
            description: encodeUnicode(designation.description || '')
        },
        clientMutationId: `${tempID++}`,
    }
    return commitMutation<UpdateDesignationMutation>(environment, {
        mutation,
        variables: {
            input,
        },
        onError: (error: Error) => {
            if (callbacks && callbacks.onError) {
                const message = error.message.split('\n')[1]
                callbacks.onError!(message)
            }
        },
        onCompleted: (response: UpdateDesignationMutationResponse) => {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess({ ...designation, ...response.updateDesignation.payload })
            }
        },
    })
}

export default { commit }
