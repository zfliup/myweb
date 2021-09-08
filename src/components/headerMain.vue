<template>
  <div class="headerMain">
      <ul v-for="item in navList" :key="item.id" @click="go(item.path)">
          {{item.name}}
      </ul>
  </div>
</template>

<script>
import {getNav} from "../common";

export default {
    name:'headerMain',
    data(){
        return{
            navList:[]
        }
    },
    mounted() {
        this.navList=getNav()
    },
    methods:{
        go(path){
            // console.log(path)
            this.$router.push(path)
        }
    }

}
</script>

<style lang="scss">
.headerMain{
    display: flex;
    &>ul{
        width: 100px;
        text-align: center;
        cursor: pointer;
        margin: 10px 20px;
        box-sizing: border-box;
    }
}
</style>