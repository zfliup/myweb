import Vue from 'vue'
import VueRouter from 'vue-router'
import {clearToken, getToken} from '../common'

const _import = require('./_import_' + process.env.NODE_ENV)
// 解决vue-router在3.0版本以上重复点菜单报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)

const files = require.context('@/views/viewPage', false, /\.vue$/)
const modules = []
files.keys().forEach(key => {
    const path = key.replace(/\.\w+$/, '').replace(/\.\//, '')
    modules.push({
        path: '/MainPage/' + path,
        component: _import('viewPage/' + path)
    })
})

const routes = [
    {
        path: '/',
        redirect: modules[0].path
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/Login')
    },
    {
        path: '/MainPage',
        name: 'MainPage',
        component: () => import('../views/MainPage'),
        children: [
            ...modules
        ]
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('../views/errPage/NotFound')
    }
]
// console.log(routes)
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
router.beforeEach(async (to, from, next) => {
    if (to.path === '/Login') { // 防止页面死循环
        clearToken()
        next()
    } else {
        if (!getToken()) {
            next({path: '/Login'})
        } else {
            next()
        }
    }
})

export default router
