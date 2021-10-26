import copy from './copy'
import longPress from './longPress'
import debounce from "./debounce";
import draggable from "./draggable";
import emoji from "./emoji";
import lazyLoad from "./lazyLoad";
import permission from "./permission";
import waterMarker from "./waterMarker";
// 自定义指令
const directives = {
    copy,
    longPress,
    debounce,
    draggable,
    emoji,
    lazyLoad,
    permission,
    waterMarker
}

export default {
    install(Vue) {
        Object.keys(directives).forEach((key) => {
            Vue.directive(key, directives[key])
        })
    },
}