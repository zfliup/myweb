<template>
    <div class="study">
        {{ fn }}33
    </div>
</template>

<script>
export default {
    name: 'Study',
    data() {
        return {
            msg: '好的'
        }
    },
    computed: {
        fn: function () {
            return this.msg + 'ii'
        }
    },
    watch: {},
    mounted() {

    },
    methods: {}
}
</script>

<style lang="scss">
.study {

}
</style>
