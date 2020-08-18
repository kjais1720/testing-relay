/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
export type DeleteDesignationInput = {
    clientMutationId?: string | null;
    id?: string | null;
};
export type DeleteDesignationMutationVariables = {
    input?: DeleteDesignationInput | null;
};
export type DeleteDesignationMutationResponse = {
    readonly deleteDesignation: {
        readonly clientMutationId: string;
    };
};
export type DeleteDesignationMutation = {
    readonly response: DeleteDesignationMutationResponse;
    readonly variables: DeleteDesignationMutationVariables;
};



/*
mutation DeleteDesignationMutation(
  $input: DeleteDesignationInput
) {
  deleteDesignation(input: $input) {
    clientMutationId
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteDesignationPayload",
    "kind": "LinkedField",
    "name": "deleteDesignation",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteDesignationMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DeleteDesignationMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "4b0fc51d73faf9b6bfa632b26998cd78",
    "id": null,
    "metadata": {},
    "name": "DeleteDesignationMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteDesignationMutation(\n  $input: DeleteDesignationInput\n) {\n  deleteDesignation(input: $input) {\n    clientMutationId\n  }\n}\n"
  }
};
})();
(node as any).hash = '4ec9612c527a5556bffed66e4c6f0fbf';
export default node;
