import { MutationCallbacks } from '@saastack/relay'
import { commitMutation, graphql } from 'react-relay'

import { Disposable, Environment, RecordSourceSelectorProxy, Variables } from 'relay-runtime'
import { DeleteDesignationInput, DeleteDesignationMutation } from '../__generated__/DeleteDesignationMutation.graphql'

const mutation = graphql`
    mutation DeleteDesignationMutation($input: DeleteDesignationInput) {
        deleteDesignation(input: $input) {
            clientMutationId
        }
    }
`

const sharedUpdater = (store: RecordSourceSelectorProxy, id: string, filters: Variables) => {
    const rootProxy = store.getRoot()
    const listProxy = rootProxy.getLinkedRecord('designations', filters)
    if (listProxy) {
        const recordProxies = listProxy.getLinkedRecords('designation')
        listProxy.setLinkedRecords((recordProxies || []).filter(r => r.getDataID() !== id), 'designation')
    }
}

let tempID = 0

const commit = (environment: Environment, variables: Variables, id: string, callbacks?: MutationCallbacks<string>): Disposable => {
    const input: DeleteDesignationInput = {
        id,
        clientMutationId: `${tempID++}`,
    }

    return commitMutation<DeleteDesignationMutation>(environment, {
        mutation,
        variables: {
            input,
        },
        updater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, id, variables),
        onError: (error: Error) => {
            if (callbacks && callbacks.onError) {
                const message = error.message.split('\n')[1]
                callbacks.onError!(message)
            }
        },
        onCompleted: () => {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess(id)
            }
        },
    })
}

export default { commit }
