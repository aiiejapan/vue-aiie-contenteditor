import buble from "rollup-plugin-buble";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import uglify from "rollup-plugin-uglify";
import css from "rollup-plugin-css-only";

let cache;

export default {
  input: "src/index.js",
  output: {
    name: "aiie",
    file: "dist/vue-aiie-contenteditor.min.js",
    format: "cjs",
    sourceMap: true
  },
  plugins: [
    css({
      output: "dist/vue-aiie-contenteditor.css"
    }),
    buble({
      target: {
        chrome: 49,
        safari: 9,
        ie: 11
      },
      objectAssign: "Object.assign"
      /**
       * If Using JSX
       * https://github.com/znck/example-functional-rollup-plugin-vue/blob/master/rollup.config.js#L11-L14
       */
      // jsx: 'h'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    uglify()
  ],
  cache
};
