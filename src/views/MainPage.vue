<template>
    <div>
        <header-main/>
        <router-view/>
    </div>
</template>

<script>
import headerMain from '../components/headerMain.vue'

export default {
    name: 'MainPage',
    components: {headerMain},
    data() {
        return {}
    }
}
</script>

<style scoped>

</style>
