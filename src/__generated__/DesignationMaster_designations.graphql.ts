/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationMaster_designations = {
    readonly designations: {
        readonly designation: ReadonlyArray<{
            readonly id: string;
            readonly " $fragmentRefs": FragmentRefs<"DesignationList_designations" | "DesignationDetail_designations" | "DesignationUpdate_designations">;
        }>;
    };
    readonly " $refType": "DesignationMaster_designations";
};
export type DesignationMaster_designations$data = DesignationMaster_designations;
export type DesignationMaster_designations$key = {
    readonly " $data"?: DesignationMaster_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationMaster_designations">;
};



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationMaster_designations",
  "type": "Query",
  "metadata": null,
  "argumentDefinitions": [
    {
      "kind": "LocalArgument",
      "name": "parent",
      "type": "String",
      "defaultValue": null
    }
  ],
  "selections": [
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "designations",
      "storageKey": null,
      "args": [
        {
          "kind": "Variable",
          "name": "parent",
          "variableName": "parent"
        }
      ],
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
              "kind": "FragmentSpread",
              "name": "DesignationList_designations",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DesignationDetail_designations",
              "args": null
            },
            {
              "kind": "FragmentSpread",
              "name": "DesignationUpdate_designations",
              "args": null
            }
          ]
        }
      ]
    }
  ]
};
(node as any).hash = '15c8985f9850dc5e6cb070cb9d65c1ac';
export default node;
