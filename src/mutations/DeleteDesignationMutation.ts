import {commitMutation, graphql} from 'react-relay';
import {MutationCallbacks} from '@saastack/relay'

import {Disposable, Environment, RecordSourceSelectorProxy} from 'relay-runtime';
import {DeleteDesignationInput, DeleteDesignationMutation} from '../__generated__/DeleteDesignationMutation.graphql';

const mutation = graphql`
    mutation DeleteDesignationMutation($input: DeleteDesignationInput) {
        deleteDesignation(input: $input) {
            clientMutationId
        }
    }
`;

const sharedUpdater = (store: RecordSourceSelectorProxy, id: string, filters: Variables) => {
    const rootProxy = store.getRoot();
    const listProxy = rootProxy.getLinkedRecord('designations', filters);
    if (listProxy) {
        const recordProxies = listProxy.getLinkedRecords('designation');
        listProxy.setLinkedRecords((recordProxies || []).filter(r => r.getDataID() !== id), 'designation')
    }
};

let tempID = 0;

const commit = (environment: Environment, id: string, callbacks?: MutationCallbacks<string>): Disposable => {
    const input: DeleteDesignationInput = {
        id,
        clientMutationId: `${tempID++}`,
    };

    return commitMutation<DeleteDesignationMutation>(environment, {
        mutation,
        variables: {
            input,
        },
        optimisticUpdater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, id, variables),
        updater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, id, variables),
        onError: (error: Error) => {
            if (callbacks && callbacks.onError) {
                const message = error.message.split('\n')[1];
                callbacks.onError!(message);
            }
        },
        onCompleted: () => {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess(id);
            }
        },
    });
};

export default {commit};
