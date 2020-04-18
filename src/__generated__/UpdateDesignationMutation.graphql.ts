/* tslint:disable */
/* eslint-disable */
/* @relayHash 5cdb26eb93c5f1e0a780d3ffd0911289 */

import { ConcreteRequest } from "relay-runtime";
export type UpdateDesignationInput = {
    clientMutationId?: string | null;
    designation?: DesignationInput | null;
    updateMask?: FieldMaskInput | null;
};
export type DesignationInput = {
    description?: string | null;
    id?: string | null;
    metadata?: string | null;
    name?: string | null;
    roleIds?: Array<string | null> | null;
};
export type FieldMaskInput = {
    paths?: Array<string | null> | null;
};
export type UpdateDesignationMutationVariables = {
    input?: UpdateDesignationInput | null;
};
export type UpdateDesignationMutationResponse = {
    readonly updateDesignation: {
        readonly clientMutationId: string;
        readonly payload: {
            readonly id: string;
        } | null;
    };
};
export type UpdateDesignationMutation = {
    readonly response: UpdateDesignationMutationResponse;
    readonly variables: UpdateDesignationMutationVariables;
};



/*
mutation UpdateDesignationMutation(
  $input: UpdateDesignationInput
) {
  updateDesignation(input: $input) {
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
    "type": "UpdateDesignationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "updateDesignation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateDesignationPayload",
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
    "name": "UpdateDesignationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "UpdateDesignationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "UpdateDesignationMutation",
    "id": null,
    "text": "mutation UpdateDesignationMutation(\n  $input: UpdateDesignationInput\n) {\n  updateDesignation(input: $input) {\n    clientMutationId\n    payload {\n      id\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'a9c8a1cba3f0a05bd8608d4b167e1aed';
export default node;
