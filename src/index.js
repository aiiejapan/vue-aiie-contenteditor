import { EditorState } from "prosemirror-state";
import { EditorView } from "prosemirror-view";
import { DOMSerializer } from "prosemirror-model";
import opts from "./vue-aiie-contenteditor-config";
import TitleInput from "./title-input";
import "./style.css";

export default function install(Vue) {
  const VueAiieContentEditor = {
    name: "VueAiieContentEditor",
    components: {
      TitleInput
    },
    props: {
      dispatch: { type: Function },
      contentTitle: { type: String }
    },
    mounted() {
      this.editor.view = this.createEditorView(this.$refs.content);
    },
    data() {
      return {
        editor: {
          state: EditorState.create(opts),
          view: null
        },
        context: {
          title: "",
          content: ""
        }
      };
    },
    methods: {
      upstreamDispatch() {
        if (!this.$props.dispatch) {
          return;
        }
        return this.$props.dispatch(this.context);
      },
      serializer() {
        const fragment = DOMSerializer.fromSchema(
          opts.schema
        ).serializeFragment(this.editor.state.doc.content);
        const tmp = document.createElement("div");
        tmp.appendChild(fragment);
        this.context.content = tmp.innerHTML;
        this.upstreamDispatch();
      },
      setContentTitle({ newText }) {
        this.context.title = newText;
        this.upstreamDispatch();
      },
      createEditorView(node) {
        return new EditorView(node, {
          state: this.editor.state,
          dispatchTransaction: this.dispatchTransaction
        });
      },
      dispatchTransaction(tr) {
        if (!tr) return; // Leave unchanged

        this.editor.state = this.editor.state.apply(tr);
        this.editor.view.updateState(this.editor.state);

        this.serializer();
      },
      contentFocus() {
        this.editor.view.focus();
      }
    },

    render(h) {
      /**
       * <div class="aiie-content-editor-view">
       *   <h1></h1>
       *   <div ref="content" />
       * </div>
       */
      return h("div", { class: "aiie-content-editor-view" }, [
        h(TitleInput, {
          props: {
            text: this.contentTitle,
            update: this.setContentTitle,
            focusToContent: this.contentFocus
          }
        }),
        h("div", { ref: "content" })
      ]);
    }
  };
  Vue.component("vue-aiie-contenteditor", VueAiieContentEditor);
}
