/* tslint:disable */
/* eslint-disable */
/* @relayHash a9bef5c1c0bb1238918568a83ee2a1a0 */

import { ConcreteRequest } from "relay-runtime";
export type CreateDesignationInput = {
    clientMutationId?: string | null;
    designation?: DesignationInput | null;
    parent?: string | null;
};
export type DesignationInput = {
    description?: string | null;
    id?: string | null;
    metadata?: unknown | null;
    name?: string | null;
    roleIds?: Array<string | null> | null;
};
export type CreateDesignationMutationVariables = {
    input?: CreateDesignationInput | null;
};
export type CreateDesignationMutationResponse = {
    readonly createDesignation: {
        readonly clientMutationId: string;
        readonly payload: {
            readonly id: string;
        } | null;
    };
};
export type CreateDesignationMutation = {
    readonly response: CreateDesignationMutationResponse;
    readonly variables: CreateDesignationMutationVariables;
};



/*
mutation CreateDesignationMutation(
  $input: CreateDesignationInput
) {
  createDesignation(input: $input) {
    clientMutationId
    payload {
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "input",
    "type": "CreateDesignationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "createDesignation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateDesignationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "payload",
        "storageKey": null,
        "args": null,
        "concreteType": "Designation",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "name": "id",
            "args": null,
            "storageKey": null
          }
        ]
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "CreateDesignationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "CreateDesignationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "CreateDesignationMutation",
    "id": null,
    "text": "mutation CreateDesignationMutation(\n  $input: CreateDesignationInput\n) {\n  createDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '934a9adf8c4e0a81d41df5c964b8806d';
export default node;
