import { keymap } from "prosemirror-keymap";
import { undoInputRule } from "prosemirror-inputrules";
import { undo, redo } from "prosemirror-history";
import { splitListItem } from "prosemirror-schema-list";
import { baseKeymap, chainCommands } from "prosemirror-commands";
import schema from "./schema";

const keys = {
  "Mod-z": undo,
  "Shift-Mod-z": redo,
  Backspace: undoInputRule,
  Enter: splitListItem(schema.nodes.list_item)
};

Object.keys(baseKeymap).forEach(key => {
  if (keys[key]) {
    keys[key] = chainCommands(keys[key], baseKeymap[key]);
  } else {
    keys[key] = baseKeymap[key];
  }
});

export default keymap(keys);
