<template>
    <div>
       <header-main/>
        <router-view/>
    </div>
</template>

<script>
import headerMain from '../components/headerMain.vue'
    export default {
        components: { headerMain },
        name: "mainPage",
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>