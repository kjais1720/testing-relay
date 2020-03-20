/* tslint:disable */
/* eslint-disable */

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
  "kind": "Fragment",
  "name": "DesignationUpdate_designations",
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
      "kind": "ScalarField",
      "alias": null,
      "name": "roleIds",
      "args": null,
      "storageKey": null
    }
  ]
};
(node as any).hash = '71d7ed4c9e5886a299ce97f7c42eece9';
export default node;
