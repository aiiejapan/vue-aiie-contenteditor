<template>
  <div class="app">
    <vue-aiie-contenteditor
      :dispatch=bindEditorValue
      :contentTitle="value.title"
    />
    <pre class="console">{{ JSON.stringify(value, null, '\t') }}</pre>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: {
        title: "",
        content: ""
      },
    };
  },
  methods: {
    bindEditorValue(editorValue) {
      this.value = {
        title: editorValue.title,
        content: editorValue.content
      }
    }
  }
}
</script>

<style>
.console {
  width: 800px;
  height: 100px;
  overflow-y: scroll;
  margin: 30px auto;
  padding: 20px;
  box-sizing: border-box;
  background: #000;
  color: #eee;
  font-family: menlo;
  font-size: 11px;
  border-radius: 4px;
}
</style>
