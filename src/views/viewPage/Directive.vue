<template>
    <div style="width: 100%;height: 100%">
        <div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: -1"
             v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
        <div v-draggable>333</div>
        <button v-permission="'10'">权限按钮1</button>
        <!--        <div v-copy="message">44</div>-->
    </div>

</template>

<script>
export default {
    name: "Directive",
    data() {
        return {
            message: '44'
        }
    }
}
</script>

<style scoped>

</style>