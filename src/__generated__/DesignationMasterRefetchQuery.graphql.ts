/* tslint:disable */
/* eslint-disable */
/* @relayHash 0c441ec58031de1c2f54c76b9b00f998 */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationMasterRefetchQueryVariables = {
    parent?: string | null;
};
export type DesignationMasterRefetchQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"DesignationMaster_designations">;
};
export type DesignationMasterRefetchQuery = {
    readonly response: DesignationMasterRefetchQueryResponse;
    readonly variables: DesignationMasterRefetchQueryVariables;
};



/*
query DesignationMasterRefetchQuery(
  $parent: String
) {
  ...DesignationMaster_designations_2XQG37
}

fragment DesignationDetail_designations on Designation {
  id
  ...DesignationInfo_designation
}

fragment DesignationInfo_designation on Designation {
  id
}

fragment DesignationList_designations on Designation {
  id
  name
  description
}

fragment DesignationMaster_designations_2XQG37 on Query {
  designations(parent: $parent) {
    designation {
      id
      ...DesignationList_designations
      ...DesignationDetail_designations
      ...DesignationUpdate_designations
    }
  }
}

fragment DesignationUpdate_designations on Designation {
  id
  name
  description
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "LocalArgument",
    "name": "parent",
    "type": "String",
    "defaultValue": null
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "parent",
    "variableName": "parent"
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DesignationMasterRefetchQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DesignationMaster_designations",
        "args": (v1/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DesignationMasterRefetchQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "designations",
        "storageKey": null,
        "args": (v1/*: any*/),
        "concreteType": "ListDesignationResponse",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "designation",
            "storageKey": null,
            "args": null,
            "concreteType": "Designation",
            "plural": true,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "id",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "name",
                "args": null,
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "description",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DesignationMasterRefetchQuery",
    "id": null,
    "text": "query DesignationMasterRefetchQuery(\n  $parent: String\n) {\n  ...DesignationMaster_designations_2XQG37\n}\n\nfragment DesignationDetail_designations on Designation {\n  id\n  ...DesignationInfo_designation\n}\n\nfragment DesignationInfo_designation on Designation {\n  id\n}\n\nfragment DesignationList_designations on Designation {\n  id\n  name\n  description\n}\n\nfragment DesignationMaster_designations_2XQG37 on Query {\n  designations(parent: $parent) {\n    designation {\n      id\n      ...DesignationList_designations\n      ...DesignationDetail_designations\n      ...DesignationUpdate_designations\n    }\n  }\n}\n\nfragment DesignationUpdate_designations on Designation {\n  id\n  name\n  description\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '44e7518b0fa4cbbfa886341c72bd4d5e';
export default node;
