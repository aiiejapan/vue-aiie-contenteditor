import Vue from 'vue'
import VueAiieContentEditor from '../dist/vue-aiie-contenteditor.min.js'
import '../dist/vue-aiie-contenteditor.css'
// import VueAiieContentEditor from '../src/index.js'

import App from './App'

Vue.config.debug = true
Vue.use(VueAiieContentEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})