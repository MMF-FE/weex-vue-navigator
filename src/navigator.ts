/**
 * weex-vue-navigator makes weex able to use SPA at web side, and use multi-page jumping at native side
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'
import * as Router from 'vue-router/types'
const navigator = weex.requireModule('navigator')

const platform = String(weex.config.env.platform).toLocaleLowerCase()
const is = {
    web: platform === 'web',
    android: platform === 'android',
    iOS: platform === 'ios',
    ios: platform === 'ios',
}

export default class Navigator {
    static _typeList: boolean[] = []

    static $router: Router

    static is = is

    static bindRouter(router: Router) {
        this.$router = router
        return this
    }

    static bootstrap() {
        if (!this.$router) {
            throw new Error('Please use bindRouter(router)')
        }
        if (this.is.web) return

        let bundleUrl = String(weex.config.bundleUrl)
        if (bundleUrl.indexOf('#') === -1) {
            this.$router.push('/')
        } else {
            let baseUrl = bundleUrl.split('#').pop()
            this.$router.push(baseUrl)
        }
    }

    static goTo(url: string, isSelf: boolean = false) {
        this._typeList.push(isSelf)

        if ((this.is.web || isSelf) && this.$router) {
            this.$router.push(url)
        } else {
            let baseUrl = String(weex.config.bundleUrl).split('#').shift()
            let bundleUrl = baseUrl + '#' + url

            navigator.push({
                url: bundleUrl,
                animated: "true"
            }, () => { })
        }
    }

    static back() {
        let isSelfRoute = this._typeList.pop()

        if ((this.is.web || isSelfRoute) && this.$router) {
            this.$router.back()
        } else {
            const navigator = weex.requireModule('navigator')

            navigator.pop({
                animated: "true"
            }, () => { })
        }
    }
}