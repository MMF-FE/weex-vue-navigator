/**
 * 
 * @author vfasky<vfasky@gmail.com>
 * 
 **/
'use strict'

import * as Router from 'vue-router/types'
import * as Vue from 'vue'
import Navigator from './navigator'

export default {
    install(VueClass, options: { router: Router }) {
        
        Navigator.bindRouter(options.router)
        
        VueClass.prototype.$goTo = Navigator.goTo.bind(Navigator)
        VueClass.prototype.$back = Navigator.back.bind(Navigator)
      
    },
    bootstrap() {
        return Navigator.bootstrap()
    },
    Navigator
}