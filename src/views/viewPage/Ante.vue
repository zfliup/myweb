<template>
    <!--
    @author: LiuZF6
    @data: 2021/8/26
    @name: Ante.vue
    @description: animation,transform,transition 测试
    -->
    <div class="ante">
        <ul class="is-animating">
            Haohjhjk
        </ul>
        <ul :class="['is-transform',isFlag?'':'is-transform-1']" @click="fn()">
            user
        </ul>
    </div>
</template>

<script>
export default {
    name: 'Ante',
    data() {
        return {
            isFlag: true
        }
    },
    methods: {
        fn() {
            this.isFlag = !this.isFlag
        }
    }
}
</script>

<style lang="scss">
@keyframes play {

    from {
        transform: rotate(0);
        background: green;
    }
    to {
        transform: rotate(360deg);
        background: red;
    }
    /*0% {*/
    /*    transform: rotate(0)*/
    /*}*/
    /*25% {*/
    /*    transform: rotate(90deg);*/
    /*    background: red;*/
    /*}*/
    /*50% {*/
    /*    transform: rotate(180deg);*/
    /*    background: blue;*/
    /*}*/
    /*75% {*/
    /*    transform: rotate(240deg);*/
    /*    background: greenyellow;*/
    /*}*/
    /*100% {*/
    /*    transform: rotate(360deg);*/
    /*    background: green;*/
    /*}*/
}

.ante {
    .is-animating {
        width: 100px;
        height: 100px;
        margin: 0 auto;
        border-radius: 50%;
        background: red;
        line-height: 100px;
        animation: play 1s linear infinite;
    }

    .is-transform {
        width: 100px;
        height: 100px;
        background: green;
        transition: all 2s;
    }

    .is-transform-1 {
        transform: rotate(300deg);
    }
}

</style>
