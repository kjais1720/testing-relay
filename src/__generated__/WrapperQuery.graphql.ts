/* tslint:disable */
/* eslint-disable */
/* @relayHash a563e3fe49488590cd31d7e405775a15 */

import { ConcreteRequest } from "relay-runtime";
export type WrapperQueryVariables = {};
export type WrapperQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly profileImage: {
            readonly thumbImage: string;
        } | null;
        readonly preferences: {
            readonly dateFormat: string;
            readonly language: string;
            readonly timeFormat: string;
            readonly timezone: string;
        } | null;
        readonly userRoles: {
            readonly role: ReadonlyArray<{
                readonly levelDetails: {
                    readonly id?: string;
                } | null;
                readonly role: {
                    readonly moduleRoles: ReadonlyArray<{
                        readonly name: string;
                    }>;
                } | null;
            }>;
        } | null;
        readonly groups: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
            readonly companies: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
                readonly displayName: string;
                readonly metadata: string | null;
                readonly gallery: {
                    readonly default: {
                        readonly thumbImage: string;
                    } | null;
                } | null;
                readonly address: {
                    readonly country: string;
                } | null;
                readonly companySettings: {
                    readonly navMenus: ReadonlyArray<string>;
                    readonly aliases: string | null;
                } | null;
                readonly apps: ReadonlyArray<{
                    readonly id: string;
                    readonly appTypeId: string;
                    readonly name: string;
                    readonly active: boolean;
                    readonly serviceModules: ReadonlyArray<string>;
                }>;
                readonly locations: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly id: string;
                            readonly name: string;
                            readonly preference: {
                                readonly currency: string;
                            } | null;
                        } | null;
                    }>;
                } | null;
            }>;
        }>;
    };
};
export type WrapperQuery = {
    readonly response: WrapperQueryResponse;
    readonly variables: WrapperQueryVariables;
};



/*
query WrapperQuery {
  viewer {
    id
    firstName
    lastName
    email
    profileImage {
      thumbImage
    }
    preferences {
      dateFormat
      language
      timeFormat
      timezone
      id
    }
    userRoles {
      role {
        levelDetails {
          __typename
          ... on Location {
            id
          }
          ... on Company {
            id
          }
          ... on Group {
            id
          }
          ... on Node {
            id
          }
        }
        role {
          moduleRoles {
            name
          }
          id
        }
      }
      id
    }
    groups {
      id
      name
      companies {
        id
        title
        displayName
        metadata
        gallery {
          default {
            thumbImage
          }
        }
        address {
          country
        }
        companySettings {
          navMenus
          aliases(locale: "en-US")
          id
        }
        apps {
          id
          appTypeId
          name
          active
          serviceModules
        }
        locations(first: 500) {
          edges {
            node {
              id
              name
              preference {
                currency
                id
              }
            }
          }
        }
      }
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "firstName",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "lastName",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "email",
  "args": null,
  "storageKey": null
},
v4 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "thumbImage",
    "args": null,
    "storageKey": null
  }
],
v5 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "profileImage",
  "storageKey": null,
  "args": null,
  "concreteType": "GalleryItem",
  "plural": false,
  "selections": (v4/*: any*/)
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "dateFormat",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "language",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timeFormat",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timezone",
  "args": null,
  "storageKey": null
},
v10 = [
  (v0/*: any*/)
],
v11 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v12 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "moduleRoles",
  "storageKey": null,
  "args": null,
  "concreteType": "ModuleRole",
  "plural": true,
  "selections": [
    (v11/*: any*/)
  ]
},
v13 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v14 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "displayName",
  "args": null,
  "storageKey": null
},
v15 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "metadata",
  "args": null,
  "storageKey": null
},
v16 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "gallery",
  "storageKey": null,
  "args": null,
  "concreteType": "Gallery",
  "plural": false,
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "default",
      "storageKey": null,
      "args": null,
      "concreteType": "GalleryItem",
      "plural": false,
      "selections": (v4/*: any*/)
    }
  ]
},
v17 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "address",
  "storageKey": null,
  "args": null,
  "concreteType": "Address",
  "plural": false,
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "country",
      "args": null,
      "storageKey": null
    }
  ]
},
v18 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "navMenus",
  "args": null,
  "storageKey": null
},
v19 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "aliases",
  "args": [
    {
      "kind": "Literal",
      "name": "locale",
      "value": "en-US"
    }
  ],
  "storageKey": "aliases(locale:\"en-US\")"
},
v20 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "apps",
  "storageKey": null,
  "args": null,
  "concreteType": "App",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "appTypeId",
      "args": null,
      "storageKey": null
    },
    (v11/*: any*/),
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "active",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "serviceModules",
      "args": null,
      "storageKey": null
    }
  ]
},
v21 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  }
],
v22 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "currency",
  "args": null,
  "storageKey": null
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "WrapperQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "UserProfile",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "preferences",
            "storageKey": null,
            "args": null,
            "concreteType": "UserPreference",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userRoles",
            "storageKey": null,
            "args": null,
            "concreteType": "UserRole",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "role",
                "storageKey": null,
                "args": null,
                "concreteType": "UserRoleRole",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "levelDetails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      {
                        "kind": "InlineFragment",
                        "type": "Location",
                        "selections": (v10/*: any*/)
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "Company",
                        "selections": (v10/*: any*/)
                      },
                      {
                        "kind": "InlineFragment",
                        "type": "Group",
                        "selections": (v10/*: any*/)
                      }
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "role",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Role",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/)
                    ]
                  }
                ]
              }
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groups",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v11/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "companies",
                "storageKey": null,
                "args": null,
                "concreteType": "Company",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "companySettings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/),
                      (v19/*: any*/)
                    ]
                  },
                  (v20/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "locations",
                    "storageKey": "locations(first:500)",
                    "args": (v21/*: any*/),
                    "concreteType": "ListLocationResponse",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "LocationNode",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Location",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v11/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "preference",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "plural": false,
                                "selections": [
                                  (v22/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "WrapperQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "UserProfile",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "preferences",
            "storageKey": null,
            "args": null,
            "concreteType": "UserPreference",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v0/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "userRoles",
            "storageKey": null,
            "args": null,
            "concreteType": "UserRole",
            "plural": false,
            "selections": [
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "role",
                "storageKey": null,
                "args": null,
                "concreteType": "UserRoleRole",
                "plural": true,
                "selections": [
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "levelDetails",
                    "storageKey": null,
                    "args": null,
                    "concreteType": null,
                    "plural": false,
                    "selections": [
                      {
                        "kind": "ScalarField",
                        "alias": null,
                        "name": "__typename",
                        "args": null,
                        "storageKey": null
                      },
                      (v0/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "role",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "Role",
                    "plural": false,
                    "selections": [
                      (v12/*: any*/),
                      (v0/*: any*/)
                    ]
                  }
                ]
              },
              (v0/*: any*/)
            ]
          },
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "groups",
            "storageKey": null,
            "args": null,
            "concreteType": "Group",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v11/*: any*/),
              {
                "kind": "LinkedField",
                "alias": null,
                "name": "companies",
                "storageKey": null,
                "args": null,
                "concreteType": "Company",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v13/*: any*/),
                  (v14/*: any*/),
                  (v15/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "companySettings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "plural": false,
                    "selections": [
                      (v18/*: any*/),
                      (v19/*: any*/),
                      (v0/*: any*/)
                    ]
                  },
                  (v20/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "locations",
                    "storageKey": "locations(first:500)",
                    "args": (v21/*: any*/),
                    "concreteType": "ListLocationResponse",
                    "plural": false,
                    "selections": [
                      {
                        "kind": "LinkedField",
                        "alias": null,
                        "name": "edges",
                        "storageKey": null,
                        "args": null,
                        "concreteType": "LocationNode",
                        "plural": true,
                        "selections": [
                          {
                            "kind": "LinkedField",
                            "alias": null,
                            "name": "node",
                            "storageKey": null,
                            "args": null,
                            "concreteType": "Location",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v11/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "preference",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "plural": false,
                                "selections": [
                                  (v22/*: any*/),
                                  (v0/*: any*/)
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "WrapperQuery",
    "id": null,
    "text": "query WrapperQuery {\n  viewer {\n    id\n    firstName\n    lastName\n    email\n    profileImage {\n      thumbImage\n    }\n    preferences {\n      dateFormat\n      language\n      timeFormat\n      timezone\n      id\n    }\n    userRoles {\n      role {\n        levelDetails {\n          __typename\n          ... on Location {\n            id\n          }\n          ... on Company {\n            id\n          }\n          ... on Group {\n            id\n          }\n          ... on Node {\n            id\n          }\n        }\n        role {\n          moduleRoles {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    groups {\n      id\n      name\n      companies {\n        id\n        title\n        displayName\n        metadata\n        gallery {\n          default {\n            thumbImage\n          }\n        }\n        address {\n          country\n        }\n        companySettings {\n          navMenus\n          aliases(locale: \"en-US\")\n          id\n        }\n        apps {\n          id\n          appTypeId\n          name\n          active\n          serviceModules\n        }\n        locations(first: 500) {\n          edges {\n            node {\n              id\n              name\n              preference {\n                currency\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = 'f1a266b50772aa088bb48308882c1de9';
export default node;
