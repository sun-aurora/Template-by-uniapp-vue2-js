import Vue from 'vue'
import uniCrazyRouter, { onError} from "uni-crazy-router";
Vue.use(uniCrazyRouter)
import {bindInterceptLogin} from './interceptLogin'
// 启用登录页的拦截
bindInterceptLogin()
onError((to, from)=>{
    uni.showToast({
        title: `${to.url} 不存在`,
        icon: 'none'
    })
})
