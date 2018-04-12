# vue-aiie-contenteditor

A editors on the web made with Vue

<p>
  <a href="https://npmjs.org/package/vue-aiie-contenteditor">
    <img src="https://img.shields.io/npm/v/vue-aiie-contenteditor.svg" alt="NPM" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-brightgreen.svg" alt="Software License" />
  </a>
	<a href="https://circleci.com/gh/aiiejapan/vue-aiie-contenteditor/tree/master">
		<img src="https://circleci.com/gh/aiiejapan/vue-aiie-contenteditor/tree/master.svg?style=svg" alt="CircleCI" />
	</a>
</p>

## Basic Usage
### Installation
```bash
npm install --save vue-aiie-contenteditor
```

or

```bash
yarn add vue-aiie-contenteditor
```

### Register the component

```js
import Vue from 'vue'
import VueAiieContentEditor from 'vue-aiie-contenteditor'

Vue.use(VueAiieContentEditor)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

```html
<div class="app">
  <vue-aiie-contenteditor
    className="example"
  />
</div>
```
### Properties
|name|type|description
|--|--|--
|`className`|String| identifies a class for css styling.

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.

## Testing

``` bash
npm run test
```

or

```bash
yarn test
```

## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) and [CONDUCT](CONDUCT.md) for details.

## Security

If you discover any security related issues, please email jinmayamashita@gmail.com instead of using the issue tracker.

## Credits

- [Jinma Yamashita][link-author]
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

[link-author]: https://github.com/jinmayamashita
[link-contributors]: ../../contributors

---
This repository is originally ported from [vue-prosemirror-editor](https://github.com/studbits/vue-prosemirror-editor)
