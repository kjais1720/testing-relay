import {commitMutation, graphql} from 'react-relay'
import {setNodeValue, MutationCallbacks} from '@saastack/relay'
import {pick} from 'lodash-es'
import {Disposable, Environment, RecordSourceSelectorProxy} from 'relay-runtime'
import {
    DesignationInput,
    UpdateDesignationInput,
    UpdateDesignationMutationResponse,
    UpdateDesignationMutation,
} from '../__generated__/UpdateDesignationMutation.graphql'

const mutation = graphql`
    mutation UpdateDesignationMutation($input: UpdateDesignationInput) {
        updateDesignation(input: $input) {
            clientMutationId
            payload {
                id
            }
        }
    }
`;

let tempID = 0;

const sharedUpdater = (store: RecordSourceSelectorProxy, designation: DesignationInput, updateMask: string[]) => {
    if (designation.id) {
        const node = store.get(designation.id);
        if (node) {
            setNodeValue(store, node, pick(designation, updateMask));
        }
    }
};

const commit = (environment: Environment, designation: DesignationInput, updateMask: string[], callbacks?: MutationCallbacks<DesignationInput>): Disposable => {
    const input: UpdateDesignationInput = {
        updateMask: {paths: updateMask},
        designation,
        clientMutationId: `${tempID++}`,
    };
    return commitMutation<UpdateDesignationMutation>(environment, {
        mutation,
        variables: {
            input,
        },
        optimisticUpdater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, designation, updateMask),
        updater: (store: RecordSourceSelectorProxy) => sharedUpdater(store, designation, updateMask),
        onError: (error: Error) => {
            if (callbacks && callbacks.onError) {
                const message = error.message.split('\n')[1];
                callbacks.onError!(message);
            }
        },
        onCompleted: (response: UpdateDesignationMutationResponse) => {
            if (callbacks && callbacks.onSuccess) {
                callbacks.onSuccess({...designation, ...response.updateDesignation.payload});
            }
        },
    })
};

export default {commit}
