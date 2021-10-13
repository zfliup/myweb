<!--vue自定义指令学习-->
<template>
    <div>
        test
        <div v-focus>{{ test }}</div>
    </div>
</template>

<script>
export default {
    name: "Test",
    data() {
        return {
            test: 'ww'
        }
    },
    directives: {
        focus: {
            // 指令的定义
            inserted: function (el, binding, vnode, oldVnode) {
                console.log(el, binding, vnode, oldVnode, "inserted")
                console.log(el.offsetHeight, el.innerHTML)
            },
            bind: function (el, binding, vnode, oldVnode) {
                console.log(el, binding, vnode, oldVnode, 'bind')
            },
            unbind: function (el, binding, vnode, oldVnode) {
                console.log(el, binding, vnode, oldVnode, 'unbind')
            },
            componentUpdated: function (el, binding, vnode, oldVnode) {
                console.log(el, binding, vnode, oldVnode, 'componentUpdated')
            },
            update: function (el, binding, vnode, oldVnode) {
                console.log(el, binding, vnode, oldVnode, 'update')
            }
        }
    }

}
</script>

<style scoped>

</style>