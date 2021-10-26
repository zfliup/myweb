<template>
    <div>
        <input type="" v-model="h"/>
    </div>
</template>

<script>
export default {
    name: "Xn",
    data() {
        return {
            h: ''
        }
    },
    mounted() {
        console.log(22)
    },
    activated() {
        console.log('22')
    },
    deactivated() {
        // console.log('23')
    },
}
</script>

<style scoped>

</style>