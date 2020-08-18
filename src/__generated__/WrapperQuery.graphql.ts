/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

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
            __isNode: __typename
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "lastName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v4 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "thumbImage",
    "storageKey": null
  }
],
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "GalleryItem",
  "kind": "LinkedField",
  "name": "profileImage",
  "plural": false,
  "selections": (v4/*: any*/),
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "dateFormat",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "language",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timeFormat",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "timezone",
  "storageKey": null
},
v10 = [
  (v0/*: any*/)
],
v11 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Location",
  "abstractKey": null
},
v12 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Company",
  "abstractKey": null
},
v13 = {
  "kind": "InlineFragment",
  "selections": (v10/*: any*/),
  "type": "Group",
  "abstractKey": null
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "concreteType": "ModuleRole",
  "kind": "LinkedField",
  "name": "moduleRoles",
  "plural": true,
  "selections": [
    (v14/*: any*/)
  ],
  "storageKey": null
},
v16 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
},
v17 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "displayName",
  "storageKey": null
},
v18 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "metadata",
  "storageKey": null
},
v19 = {
  "alias": null,
  "args": null,
  "concreteType": "Gallery",
  "kind": "LinkedField",
  "name": "gallery",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "GalleryItem",
      "kind": "LinkedField",
      "name": "default",
      "plural": false,
      "selections": (v4/*: any*/),
      "storageKey": null
    }
  ],
  "storageKey": null
},
v20 = {
  "alias": null,
  "args": null,
  "concreteType": "Address",
  "kind": "LinkedField",
  "name": "address",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "country",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v21 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "navMenus",
  "storageKey": null
},
v22 = {
  "alias": null,
  "args": [
    {
      "kind": "Literal",
      "name": "locale",
      "value": "en-US"
    }
  ],
  "kind": "ScalarField",
  "name": "aliases",
  "storageKey": "aliases(locale:\"en-US\")"
},
v23 = {
  "alias": null,
  "args": null,
  "concreteType": "App",
  "kind": "LinkedField",
  "name": "apps",
  "plural": true,
  "selections": [
    (v0/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "appTypeId",
      "storageKey": null
    },
    (v14/*: any*/),
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "active",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "serviceModules",
      "storageKey": null
    }
  ],
  "storageKey": null
},
v24 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 500
  }
],
v25 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "currency",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "WrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserProfile",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserPreference",
            "kind": "LinkedField",
            "name": "preferences",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserRole",
            "kind": "LinkedField",
            "name": "userRoles",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserRoleRole",
                "kind": "LinkedField",
                "name": "role",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "levelDetails",
                    "plural": false,
                    "selections": [
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/)
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/)
                    ],
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
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "groups",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v14/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Company",
                "kind": "LinkedField",
                "name": "companies",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "kind": "LinkedField",
                    "name": "companySettings",
                    "plural": false,
                    "selections": [
                      (v21/*: any*/),
                      (v22/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": (v24/*: any*/),
                    "concreteType": "ListLocationResponse",
                    "kind": "LinkedField",
                    "name": "locations",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LocationNode",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Location",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "kind": "LinkedField",
                                "name": "preference",
                                "plural": false,
                                "selections": [
                                  (v25/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "locations(first:500)"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "WrapperQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserProfile",
        "kind": "LinkedField",
        "name": "viewer",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          (v3/*: any*/),
          (v5/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "UserPreference",
            "kind": "LinkedField",
            "name": "preferences",
            "plural": false,
            "selections": [
              (v6/*: any*/),
              (v7/*: any*/),
              (v8/*: any*/),
              (v9/*: any*/),
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserRole",
            "kind": "LinkedField",
            "name": "userRoles",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserRoleRole",
                "kind": "LinkedField",
                "name": "role",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": null,
                    "kind": "LinkedField",
                    "name": "levelDetails",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "__typename",
                        "storageKey": null
                      },
                      (v11/*: any*/),
                      (v12/*: any*/),
                      (v13/*: any*/),
                      {
                        "kind": "InlineFragment",
                        "selections": (v10/*: any*/),
                        "type": "Node",
                        "abstractKey": "__isNode"
                      }
                    ],
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Role",
                    "kind": "LinkedField",
                    "name": "role",
                    "plural": false,
                    "selections": [
                      (v15/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v0/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "Group",
            "kind": "LinkedField",
            "name": "groups",
            "plural": true,
            "selections": [
              (v0/*: any*/),
              (v14/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Company",
                "kind": "LinkedField",
                "name": "companies",
                "plural": true,
                "selections": [
                  (v0/*: any*/),
                  (v16/*: any*/),
                  (v17/*: any*/),
                  (v18/*: any*/),
                  (v19/*: any*/),
                  (v20/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "kind": "LinkedField",
                    "name": "companySettings",
                    "plural": false,
                    "selections": [
                      (v21/*: any*/),
                      (v22/*: any*/),
                      (v0/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v23/*: any*/),
                  {
                    "alias": null,
                    "args": (v24/*: any*/),
                    "concreteType": "ListLocationResponse",
                    "kind": "LinkedField",
                    "name": "locations",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "LocationNode",
                        "kind": "LinkedField",
                        "name": "edges",
                        "plural": true,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Location",
                            "kind": "LinkedField",
                            "name": "node",
                            "plural": false,
                            "selections": [
                              (v0/*: any*/),
                              (v14/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "kind": "LinkedField",
                                "name": "preference",
                                "plural": false,
                                "selections": [
                                  (v25/*: any*/),
                                  (v0/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": "locations(first:500)"
                  }
                ],
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
    "cacheID": "af328ec8fa093dc33a135c1b9cc29ee2",
    "id": null,
    "metadata": {},
    "name": "WrapperQuery",
    "operationKind": "query",
    "text": "query WrapperQuery {\n  viewer {\n    id\n    firstName\n    lastName\n    email\n    profileImage {\n      thumbImage\n    }\n    preferences {\n      dateFormat\n      language\n      timeFormat\n      timezone\n      id\n    }\n    userRoles {\n      role {\n        levelDetails {\n          __typename\n          ... on Location {\n            id\n          }\n          ... on Company {\n            id\n          }\n          ... on Group {\n            id\n          }\n          ... on Node {\n            __isNode: __typename\n            id\n          }\n        }\n        role {\n          moduleRoles {\n            name\n          }\n          id\n        }\n      }\n      id\n    }\n    groups {\n      id\n      name\n      companies {\n        id\n        title\n        displayName\n        metadata\n        gallery {\n          default {\n            thumbImage\n          }\n        }\n        address {\n          country\n        }\n        companySettings {\n          navMenus\n          aliases(locale: \"en-US\")\n          id\n        }\n        apps {\n          id\n          appTypeId\n          name\n          active\n          serviceModules\n        }\n        locations(first: 500) {\n          edges {\n            node {\n              id\n              name\n              preference {\n                currency\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'f1a266b50772aa088bb48308882c1de9';
export default node;
