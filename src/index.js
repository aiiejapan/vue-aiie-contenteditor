import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import opts from "./vue-aiie-contenteditor-config";
import "./style.css";

export default function install(Vue) {
  const VueAiieContentEditor = {
    name: "VueAiieContentEditor",

    mounted() {
      this.createEditorView(this.$refs.content);
    },

    data() {
      return {
        editor: {
          state: EditorState.create(opts),
          view: null
        }
      };
    },

    methods: {
      createEditorView(node) {
        this.editor.view = new EditorView(node, {
          state: this.editor.state
        });

        this.editor.view.focus();
      }
    },

    render(h) {
      /**
       * <div class="aiie-content-editor-view">
       *   <div ref="content" />
       * </div>
       */
      return h("div", { class: "aiie-content-editor-view" }, [
        h("div", { ref: "content" })
      ]);
    }
  };
  Vue.component("vue-aiie-contenteditor", VueAiieContentEditor);
}
