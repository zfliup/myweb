<template>
    <div>
        <input v-model="j"/>
    </div>
</template>

<script>
export default {
    name: "Yn",
    data() {
        return {
            j: ''
        }
    },
    mounted() {
        console.log(333)
    },
    activated() {
        console.log('333')
    },
    deactivated() {
        // console.log('333')
    },
}
</script>

<style scoped>

</style>