/* tslint:disable */
/* eslint-disable */
/* @relayHash f2b24b9735da627eb341970f53ee1dfb */

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationPageQueryVariables = {
    parent?: string | null;
};
export type DesignationPageQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"DesignationMaster_designations">;
};
export type DesignationPageQuery = {
    readonly response: DesignationPageQueryResponse;
    readonly variables: DesignationPageQueryVariables;
};



/*
query DesignationPageQuery(
  $parent: String
) {
  ...DesignationMaster_designations_2XQG37
}

fragment DesignationAdd_roles on Role {
  id
  roleName
}

fragment DesignationList_designations on Designation {
  id
  name
  description
  roles {
    id
    roleName
  }
}

fragment DesignationMaster_designations_2XQG37 on Query {
  designations(parent: $parent) {
    designation {
      id
      ...DesignationList_designations
      ...DesignationUpdate_designations
    }
  }
  roles(hide: true, parent: $parent) {
    role {
      id
      ...DesignationUpdate_roles
      ...DesignationAdd_roles
    }
  }
}

fragment DesignationUpdate_designations on Designation {
  id
  name
  description
  roleIds
}

fragment DesignationUpdate_roles on Role {
  id
  roleName
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
v1 = {
  "kind": "Variable",
  "name": "parent",
  "variableName": "parent"
},
v2 = [
  (v1/*: any*/)
],
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v4 = [
  (v3/*: any*/),
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "roleName",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "DesignationPageQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "FragmentSpread",
        "name": "DesignationMaster_designations",
        "args": (v2/*: any*/)
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "DesignationPageQuery",
    "argumentDefinitions": (v0/*: any*/),
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "designations",
        "storageKey": null,
        "args": (v2/*: any*/),
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
              (v3/*: any*/),
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
              },
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "roles",
                "storageKey": null,
                "args": null,
                "concreteType": "Role",
                "plural": true,
                "selections": (v4/*: any*/)
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "name": "roleIds",
                "args": null,
                "storageKey": null
              }
            ]
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "roles",
        "storageKey": null,
        "args": [
          {
            "kind": "Literal",
            "name": "hide",
            "value": true
          },
          (v1/*: any*/)
        ],
        "concreteType": "ListRoleResponse",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "role",
            "storageKey": null,
            "args": null,
            "concreteType": "Role",
            "plural": true,
            "selections": (v4/*: any*/)
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "DesignationPageQuery",
    "id": null,
    "text": "query DesignationPageQuery(\n  $parent: String\n) {\n  ...DesignationMaster_designations_2XQG37\n}\n\nfragment DesignationAdd_roles on Role {\n  id\n  roleName\n}\n\nfragment DesignationList_designations on Designation {\n  id\n  name\n  description\n  roles {\n    id\n    roleName\n  }\n}\n\nfragment DesignationMaster_designations_2XQG37 on Query {\n  designations(parent: $parent) {\n    designation {\n      id\n      ...DesignationList_designations\n      ...DesignationUpdate_designations\n    }\n  }\n  roles(hide: true, parent: $parent) {\n    role {\n      id\n      ...DesignationUpdate_roles\n      ...DesignationAdd_roles\n    }\n  }\n}\n\nfragment DesignationUpdate_designations on Designation {\n  id\n  name\n  description\n  roleIds\n}\n\nfragment DesignationUpdate_roles on Role {\n  id\n  roleName\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '8e4e58dbf850a7a91a14b11a9edee3a6';
export default node;
