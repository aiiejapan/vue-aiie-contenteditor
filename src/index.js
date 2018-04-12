import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { Schema, DOMParser } from "prosemirror-model";
import { schema } from "prosemirror-schema-basic";
import { addListNodes } from "prosemirror-schema-list";
import { contentEditorSetup } from "./modules";

require("./style.css");

export default function install(Vue) {
  const VueAiieContentEditor = {
    name: "VueAiieContentEditor",

    mounted() {
      this.initEditor();
    },

    props: {
      className: { type: String, default: "aiie-content-editor-view" },
      nodeViews: {
        type: Object,
        default: () => {
          return {};
        }
      }
    },

    data() {
      const schema = this.createEditorSchema();
      return {
        editor: {
          schema,
          state: null,
          view: null
        }
      };
    },

    methods: {
      initEditor() {
        this.editor.state = this.createEditorState(this.editor.schema);
        this.editor.view = this.createEditorView();
      },

      createEditorSchema() {
        return new Schema({
          nodes: addListNodes(schema.spec.nodes, "paragraph block*", "block"),
          marks: schema.spec.marks
        });
      },

      createEditorState(schema) {
        return EditorState.create({
          schema,
          doc: DOMParser.fromSchema(schema).parse(this.$refs.content),
          plugins: contentEditorSetup({ schema })
        });
      },

      createEditorView() {
        return new EditorView(this.$refs.editor, {
          state: this.editor.state
        });
      }
    },
    render(h) {
      /**
       * <div class="aiie-content-editor-view">
       *   <div id="editor" ref="editor" />
       *   <div ref="content" />
       * </div>
       */
      return h(
        "div",
        {
          class: this.className ? this.className : "aiie-content-editor-view"
        },
        [
          h("div", {
            id: "editor",
            ref: "editor"
          }),
          h("div", {
            ref: "content"
          })
        ]
      );
    }
  };
  Vue.component("vue-aiie-contenteditor", VueAiieContentEditor);
}
