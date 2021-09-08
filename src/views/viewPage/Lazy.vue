<!--
@author: LiuZF6
@data: 2021/8/26
@name: Lazy.vue
@description: vue-infinite-scroll 赖加载
-->
<template>
    <div style="height: calc(100vh - 40px);overflow: auto">
        <div
            v-infinite-scroll="loadMore"
            infinite-scroll-throttle-delay="200"
            infinite-scroll-disabled="busy"
            :infinite-scroll-distance="2"
        >
            <div v-for="item in data" :key="item.index" style="height: 60px">
                {{ item.name }}
            </div>
            <div>{{ msg }}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Lazy',
    data() {
        return {
            count: 0,
            data: [],
            busy: false,
            page: 0,
            msg: '加载更多'
        }
    },
    methods: {
        loadMore: function () {
            this.busy = true // 将无限滚动给禁用
            this.page++ // 增加页数

            setTimeout(() => {
                this.busy = false
                for (let i = 0, j = 5; i < j; i++) {
                    this.data.push({name: this.count++})
                }
                console.log(this.page)
                if (this.page === 6) {
                    this.busy = true
                    this.msg = '没有更多了'
                }
            }, 500)
        }
    }
}
</script>

<style>
</style>
