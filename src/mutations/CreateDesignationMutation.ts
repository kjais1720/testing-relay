import {setNodeValue, MutationCallbacks} from '@saastack/relay';
import {commitMutation, graphql, Variables} from 'react-relay';
import {Disposable, Environment, RecordProxy, RecordSourceSelectorProxy} from 'relay-runtime';
import {
    CreateDesignationInput,
    CreateDesignationMutationResponse,
    CreateDesignationMutation,
    DesignationInput
} from '../__generated__/CreateDesignationMutation.graphql';

const mutation = graphql`
    mutation CreateDesignationMutation($input: CreateDesignationInput) {
        createDesignation(input: $input) {
            clientMutationId
            payload {
                id
            }
        }
    }
`;

let tempID = 0;

const sharedUpdater = (store: RecordSourceSelectorProxy, node: RecordProxy, designation: DesignationInput, filters: Variables) => {
    setNodeValue(store, node, designation);
    const rootProxy = store.getRoot();
    const listProxy = rootProxy.getLinkedRecord('designations', filters);
    if (listProxy) {
        const recordProxies = listProxy.getLinkedRecords('designation');
        listProxy.setLinkedRecords([node, ...(recordProxies || [])], 'designation');
    }
};

const commit = (environment: Environment, variables: Variables, designation: DesignationInput, callbacks?: MutationCallbacks<DesignationInput>): Disposable => {
    const input: CreateDesignationInput = {
        parent: variables.parent,
        designation,
        clientMutationId: `${tempID++}`,
    };

    return commitMutation<CreateDesignationMutation>(environment, {
        mutation,
        variables: {
            input,
        },
        optimisticUpdater: (store: RecordSourceSelectorProxy) => {
            const id = `client:newDesignation:${tempID++}`;
            const node = store.create(id, 'Designation');
            node.setValue(id, 'id');
            sharedUpdater(store, node, designation, variables);
        },
        updater: (store: RecordSourceSelectorProxy) => {
            const payload = store.getRootField('createDesignation');
            const node = payload!.getLinkedRecord('payload');
            sharedUpdater(store, node!, designation, variables);
        },
        onError: (error: Error) => {
            if (callbacks && callbacks.onError) {
                const message = error.message.split('\n')[1];
                callbacks.onError!(message);
            }
        },
        onCompleted: (response: CreateDesignationMutationResponse) => {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess({...designation, ...response.createDesignation.payload});
            }
        },
    });
};

export default {commit};
