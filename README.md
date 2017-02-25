# weex-vue-navigator

weex-vue-navigator makes weex able to use SPA at web side, and use multi-page jumping at native side

## Install

```
npm i weex-vue-navigator --save-dev
# or
yarn add weex-vue-navigator --dev
```

## Configuration

```js
import Vue from 'vue'
import Router from 'vue-router'
import weexNavigator from 'weex-vue-navigator'
import App from '{YouAppPath}.vue'

Vue.use(weexVueFixed)
Vue.use(Router)

let router = new Router({
    // you config
})

Vue.use(weexNavigator, {router})

new Vue({
    el: '#root',
    router,
    render: h => h(App),
})

weexNavigator.bootstrap()
```

## Usage

```js
export default {
    methods: {
        jump(url) {
            this.$goTo(url)
        },
        back() {
            this.$back()
        },
        jumpOnSelf(url) {
            this.$goTo(url, true)
        }
    }
}
```

### `Vue.prototype.$goTo (url:string, isSelf:boolean = false)`
    - url: vue route url
    - isSelf: open on self view (use tab change)

### `Vue.prototype.$back ()`