import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Directives from './directives'
import infiniteScroll from 'vue-infinite-scroll'

Vue.use(infiniteScroll)
Vue.use(ElementUI)
Vue.use(Directives)
Vue.directive('demo', function (el, binding) {
    console.log(el, binding, 33)
    el.innerHTML = binding.value
})
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
