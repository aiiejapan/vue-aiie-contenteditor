import { history } from "prosemirror-history";
import placeholder from "../prosemirror-placeholder";
import keys from "./keys";
import rules from "./rules";

export default [rules, keys, history(), placeholder()];
