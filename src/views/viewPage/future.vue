<template>
    <div id="future">
        <ul style="height: 1000px"></ul>
    </div>
</template>

<script>
export default {
    name: "future",
    mounted() {
        let fut = document.getElementById('future')
        fut.addEventListener('scroll', function () {
            console.log(1)
        })
    },
    methods: {}
}
</script>

<style scoped>
#future {
    overflow: auto;
}
</style>