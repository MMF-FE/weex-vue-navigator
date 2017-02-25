import * as Router from 'vue-router/types';
export default class Navigator {
    static _typeList: boolean[];
    static $router: Router;
    static is: {
        web: boolean;
        android: boolean;
        iOS: boolean;
        ios: boolean;
    };
    static bindRouter(router: Router): typeof Navigator;
    static bootstrap(): void;
    static goTo(url: string, isSelf?: boolean): void;
    static back(): void;
}
