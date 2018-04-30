import { nodes } from "prosemirror-schema-basic";
import { listItem } from "prosemirror-schema-list";

const listNodes = {
  /* eslint camelcase: ["error", {properties: "never"}] */
  list_item: {
    ...listItem,
    content: "paragraph block*",
    group: "block"
  }
};

export default {
  ...nodes,
  ...listNodes
};
