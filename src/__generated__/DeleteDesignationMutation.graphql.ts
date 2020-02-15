/* tslint:disable */
/* eslint-disable */
/* @relayHash 66ae077f11ef3434f4e7abf92d4e228b */

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
    "kind": "LocalArgument",
    "name": "input",
    "type": "DeleteDesignationInput",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "LinkedField",
    "alias": null,
    "name": "deleteDesignation",
    "storageKey": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "DeleteDesignationPayload",
    "plural": false,
    "selections": [
      {
        "kind": "ScalarField",
        "alias": null,
        "name": "clientMutationId",
        "args": null,
        "storageKey": null
      }
    ]
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DeleteDesignationMutation",
    "type": "Mutation",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "DeleteDesignationMutation",
    "argumentDefinitions": (v0/*: any*/),
    "selections": (v1/*: any*/)
  },
  "params": {
    "operationKind": "mutation",
    "name": "DeleteDesignationMutation",
    "id": null,
    "text": "mutation DeleteDesignationMutation(\n  $input: DeleteDesignationInput\n) {\n  deleteDesignation(input: $input) {\n    clientMutationId\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '4ec9612c527a5556bffed66e4c6f0fbf';
export default node;
