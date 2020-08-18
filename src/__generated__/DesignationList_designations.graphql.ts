/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type DesignationList_designations = ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly roles: ReadonlyArray<{
        readonly id: string;
        readonly roleName: string;
    }>;
    readonly " $refType": "DesignationList_designations";
}>;
export type DesignationList_designations$data = DesignationList_designations;
export type DesignationList_designations$key = ReadonlyArray<{
    readonly " $data"?: DesignationList_designations$data;
    readonly " $fragmentRefs": FragmentRefs<"DesignationList_designations">;
}>;



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": {
    "plural": true
  },
  "name": "DesignationList_designations",
  "selections": [
    (v0/*: any*/),
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
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "roleName",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Designation",
  "abstractKey": null
};
})();
(node as any).hash = '32b0594e4f1962beedfe52001fcacaba';
export default node;
