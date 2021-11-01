<template>
    <div style="width: 100%;height: 100%">
        <div style="width: 100%;height: 100%;position: absolute;top: 0;left: 0;z-index: -1"
             v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
        <div v-draggable>333</div>
        <button v-permission="'10'">权限按钮1</button>
        <!--        <div v-copy="message">44</div>-->
        <el-select
            v-model="value"
            filterable
            remote
            reserve-keyword
            placeholder="请输入关键词"
            :remote-method="remoteMethod"
            v-selectLoad="fn"
            :loading="loading">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
        </el-select>
    </div>

</template>

<script>
export default {
    name: "Directive",
    data() {
        return {
            message: '44',
            options: [],
            value: [],
            list: [],
            loading: false,
            states: ["Alabama", "Alaska", "Arizona",
                "Arkansas", "California", "Colorado",
                "Connecticut", "Delaware", "Florida",
                "Georgia", "Hawaii", "Idaho", "Illinois",
                "Indiana", "Iowa", "Kansas", "Kentucky",
                "Louisiana", "Maine", "Maryland",
                "Massachusetts", "Michigan", "Minnesota",
                "Mississippi", "Missouri", "Montana",
                "Nebraska", "Nevada", "New Hampshire",
                "New Jersey", "New Mexico", "New York",
                "North Carolina", "North Dakota", "Ohio",
                "Oklahoma", "Oregon", "Pennsylvania",
                "Rhode Island", "South Carolina",
                "South Dakota", "Tennessee", "Texas",
                "Utah", "Vermont", "Virginia",
                "Washington", "West Virginia", "Wisconsin",
                "Wyoming"]
        }
    },
    mounted() {
        this.list = this.states.map(item => {
            return {value: `value:${item}`, label: `label:${item}`};
        });
        this.options = this.list.slice(0, 10)
    },
    methods: {
        remoteMethod(query) {
            if (query !== '') {
                this.loading = true;
                setTimeout(() => {
                    this.loading = false;
                    this.options = this.list.filter(item => {
                        return item.label.toLowerCase()
                            .indexOf(query.toLowerCase()) > -1;
                    });
                }, 200);
            } else {
                this.options = [];
            }
        },
        fn() {
            console.log(22)
            // this.options = this.options.concat(this.list.slice(10, 20))
        }
    }
}
</script>

<style scoped>

</style>