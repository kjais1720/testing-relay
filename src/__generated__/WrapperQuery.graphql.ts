/* tslint:disable */
/* eslint-disable */
/* @relayHash 0dca7705b9bb3a43b631e7ab0dd188b9 */

import { ConcreteRequest } from "relay-runtime";
export type WrapperQueryVariables = {};
export type WrapperQueryResponse = {
    readonly viewer: {
        readonly id: string;
        readonly preferences: {
            readonly dateFormat: string;
            readonly language: string;
            readonly timeFormat: string;
            readonly timezone: string;
            readonly uIInfo: string;
        } | null;
        readonly groups: ReadonlyArray<{
            readonly id: string;
            readonly name: string;
            readonly companies: ReadonlyArray<{
                readonly id: string;
                readonly title: string;
                readonly companySettings: {
                    readonly navMenus: ReadonlyArray<string>;
                } | null;
                readonly apps: ReadonlyArray<{
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
    preferences {
      dateFormat
      language
      timeFormat
      timezone
      uIInfo
      id
    }
    groups {
      id
      name
      companies {
        id
        title
        companySettings {
          navMenus
          id
        }
        apps {
          name
          active
          serviceModules
          id
        }
        locations(first: 100) {
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
  "name": "dateFormat",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "language",
  "args": null,
  "storageKey": null
},
v3 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timeFormat",
  "args": null,
  "storageKey": null
},
v4 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "timezone",
  "args": null,
  "storageKey": null
},
v5 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "uIInfo",
  "args": null,
  "storageKey": null
},
v6 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v7 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "title",
  "args": null,
  "storageKey": null
},
v8 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "navMenus",
  "args": null,
  "storageKey": null
},
v9 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "active",
  "args": null,
  "storageKey": null
},
v10 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "serviceModules",
  "args": null,
  "storageKey": null
},
v11 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 100
  }
],
v12 = {
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "preferences",
            "storageKey": null,
            "args": null,
            "concreteType": "UserPreference",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/)
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
              (v6/*: any*/),
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
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "companySettings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "apps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "App",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "locations",
                    "storageKey": "locations(first:100)",
                    "args": (v11/*: any*/),
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
                              (v6/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "preference",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "plural": false,
                                "selections": [
                                  (v12/*: any*/)
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
          {
            "kind": "LinkedField",
            "alias": null,
            "name": "preferences",
            "storageKey": null,
            "args": null,
            "concreteType": "UserPreference",
            "plural": false,
            "selections": [
              (v1/*: any*/),
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
              (v6/*: any*/),
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
                  (v7/*: any*/),
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "companySettings",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "CompanySetting",
                    "plural": false,
                    "selections": [
                      (v8/*: any*/),
                      (v0/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "apps",
                    "storageKey": null,
                    "args": null,
                    "concreteType": "App",
                    "plural": true,
                    "selections": [
                      (v6/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v0/*: any*/)
                    ]
                  },
                  {
                    "kind": "LinkedField",
                    "alias": null,
                    "name": "locations",
                    "storageKey": "locations(first:100)",
                    "args": (v11/*: any*/),
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
                              (v6/*: any*/),
                              {
                                "kind": "LinkedField",
                                "alias": null,
                                "name": "preference",
                                "storageKey": null,
                                "args": null,
                                "concreteType": "LocationPreference",
                                "plural": false,
                                "selections": [
                                  (v12/*: any*/),
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
    "text": "query WrapperQuery {\n  viewer {\n    id\n    preferences {\n      dateFormat\n      language\n      timeFormat\n      timezone\n      uIInfo\n      id\n    }\n    groups {\n      id\n      name\n      companies {\n        id\n        title\n        companySettings {\n          navMenus\n          id\n        }\n        apps {\n          name\n          active\n          serviceModules\n          id\n        }\n        locations(first: 100) {\n          edges {\n            node {\n              id\n              name\n              preference {\n                currency\n                id\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n",
    "metadata": {}
  }
};
})();
(node as any).hash = '3cfdc7dc5c0bc6cdf5d534a6cf542b9a';
export default node;
