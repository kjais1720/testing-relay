/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
  priority
  isDefault
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
      level
      isDefault
      roleName
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
  priority
  isDefault
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "parent"
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "roleName",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DesignationPageQuery",
    "selections": [
      {
        "args": (v2/*: any*/),
        "kind": "FragmentSpread",
        "name": "DesignationMaster_designations"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "DesignationPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "ListDesignationResponse",
        "kind": "LinkedField",
        "name": "designations",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Designation",
            "kind": "LinkedField",
            "name": "designation",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "description",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "concreteType": "Role",
                "kind": "LinkedField",
                "name": "roles",
                "plural": true,
                "selections": [
                  (v3/*: any*/),
                  (v4/*: any*/)
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "roleIds",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": [
          {
            "kind": "Literal",
            "name": "hide",
            "value": true
          },
          (v1/*: any*/)
        ],
        "concreteType": "ListRoleResponse",
        "kind": "LinkedField",
        "name": "roles",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Role",
            "kind": "LinkedField",
            "name": "role",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "level",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "isDefault",
                "storageKey": null
              },
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "priority",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "b9a0d8dbfaca41138b56851d5c78a431",
    "id": null,
    "metadata": {},
    "name": "DesignationPageQuery",
    "operationKind": "query",
    "text": "query DesignationPageQuery(\n  $parent: String\n) {\n  ...DesignationMaster_designations_2XQG37\n}\n\nfragment DesignationAdd_roles on Role {\n  id\n  roleName\n  priority\n  isDefault\n}\n\nfragment DesignationList_designations on Designation {\n  id\n  name\n  description\n  roles {\n    id\n    roleName\n  }\n}\n\nfragment DesignationMaster_designations_2XQG37 on Query {\n  designations(parent: $parent) {\n    designation {\n      id\n      ...DesignationList_designations\n      ...DesignationUpdate_designations\n    }\n  }\n  roles(hide: true, parent: $parent) {\n    role {\n      id\n      level\n      isDefault\n      roleName\n      ...DesignationUpdate_roles\n      ...DesignationAdd_roles\n    }\n  }\n}\n\nfragment DesignationUpdate_designations on Designation {\n  id\n  name\n  description\n  roleIds\n}\n\nfragment DesignationUpdate_roles on Role {\n  id\n  roleName\n  priority\n  isDefault\n}\n"
  }
};
})();
(node as any).hash = '8e4e58dbf850a7a91a14b11a9edee3a6';
export default node;
