/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationUpdate_designations = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly roleIds: ReadonlyArray<string>;
    readonly " $refType": "DesignationUpdate_designations";
}>;
export type DesignationUpdate_designations$data = DesignationUpdate_designations;
export type DesignationUpdate_designations$key = ReadonlyArray<{
    readonly " $data"?: DesignationUpdate_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationUpdate_designations">;
}>;



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "DesignationUpdate_designations",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
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
      "kind": "ScalarField",
      "name": "roleIds",
      "storageKey": null
    }
  ],
  "type": "Designation",
  "abstractKey": null
};
(node as any).hash = '71d7ed4c9e5886a299ce97f7c42eece9';
export default node;
