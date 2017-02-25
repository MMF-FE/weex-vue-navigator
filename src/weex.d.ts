interface Weex {
    requireModule(module: string): any,
    registerModule(name: string, methods: {
        [name: string]: Function
    }): void,
    config: {
        bundleUrl: string,
        env: {
            weexVersion: string
            appName: string
            appVersion: string
            platform: string
            osVersion: string
            deviceModel?: string
            deviceWidth: number
            deviceHeight: number
        }
    }
}
declare var weex: Weex