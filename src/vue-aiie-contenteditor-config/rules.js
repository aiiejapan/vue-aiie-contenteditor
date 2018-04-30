import {
  inputRules,
  smartQuotes,
  textblockTypeInputRule
} from "prosemirror-inputrules";

import schema from "./schema";

export default inputRules({
  rules: [
    ...smartQuotes,

    // Heading
    textblockTypeInputRule(
      new RegExp("^(#{1,6})\\s$"),
      schema.nodes.heading,
      match => ({ level: match[1].length })
    )
  ]
});
