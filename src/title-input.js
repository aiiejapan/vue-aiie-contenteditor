export default {
  name: "TitleInput",

  props: {
    text: {
      type: String
    },
    update: {
      type: Function,
      required: true
    },
    focusToContent: {
      type: Function,
      required: true
    }
  },

  mounted() {
    this.setCaretPostionToEnd(this.$el);
  },

  data() {
    return {
      innerText: this.$props.text
    };
  },

  methods: {
    keyDownHandler(e) {
      if (e.keyCode !== 13 && e.keyCode !== 40) {
        return true;
      }
      e.preventDefault();
      this.$props.focusToContent();
      return false;
    },
    inputHandler(e) {
      // NOTE: is way str..replace(/\s+$/, '') trick?
      this.innerText = e.target.innerText;
      this.setCaretPostionToEnd(this.$el);
      this.$props.update({ newText: e.target.innerText });
    },
    setCaretPostionToEnd(el) {
      el.focus();
      if (this.innerText.length === 0) {
        document.getSelection().collapse(el, 0);
        return;
      }
      // TODO: Fix select text bug :(
      document.getSelection().collapse(el, 1);
    }
  },

  render(h) {
    return h("h1", {
      domProps: {
        innerText: this.$props.text
      },
      class: {
        "aiie-contenteditor-title": true,
        "contenteditor-untitled": !this.innerText.length
      },
      attrs: {
        contenteditable: true
      },
      on: {
        input: this.inputHandler,
        keydown: this.keyDownHandler
      }
    });
  }
};
