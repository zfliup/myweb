<template>
    <div id="future">
        <ul style="display: flex;justify-content: center">
            <li @click="fn('Xn')" style="padding: 10px 20px;margin: 20px">Xn</li>
            <li @click="fn('Yn')" style="padding: 10px 20px;margin: 20px">Yn</li>
        </ul>
        <keep-alive>
            <component :is="compile"></component>
        </keep-alive>
    </div>
</template>

<script>
import Xn from "../../components/Xn";
import Yn from "../../components/Yn";

export default {
    name: "future",
    components: {Yn, Xn},
    data() {
        return {
            compile: 'Xn'
        }

    },
    mounted() {
        console.log(111)
    },
    methods: {
        fn(val) {
            this.compile = val
        }
    }
}
</script>

<style scoped>
#future {
    overflow: auto;
}
</style>