<template>
  <div class="study" @click="add">
    {{ fn }}44446575687
  </div>
</template>

<script>
export default {
  name: 'Study',
  data() {
    return {
      msg: 1
    }
  },
  computed: {
    fn: function () {
      return this.msg + 3
    }
  },
  watch: {},
  mounted() {

  },
  methods: {
    add() {
      this.msg++
    }
  }
}
</script>

<style lang="scss">
.study {
  cursor: pointer;
}
</style>
