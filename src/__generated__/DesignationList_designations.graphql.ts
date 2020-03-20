/* tslint:disable */
/* eslint-disable */

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationList_designations = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly roles: ReadonlyArray<{
        readonly roleName: string;
    }>;
    readonly " $refType": "DesignationList_designations";
}>;
export type DesignationList_designations$data = DesignationList_designations;
export type DesignationList_designations$key = ReadonlyArray<{
    readonly " $data"?: DesignationList_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationList_designations">;
}>;



const node: ReaderFragment = {
  "kind": "Fragment",
  "name": "DesignationList_designations",
  "type": "Designation",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
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
    },
    {
      "kind": "LinkedField",
      "alias": null,
      "name": "roles",
      "storageKey": null,
      "args": null,
      "concreteType": "Role",
      "plural": true,
      "selections": [
        {
          "kind": "ScalarField",
          "alias": null,
          "name": "roleName",
          "args": null,
          "storageKey": null
        }
      ]
    }
  ]
};
(node as any).hash = '7835db2060d63b860e6eb6ab6cb50bb7';
export default node;
