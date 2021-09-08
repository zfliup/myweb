<template>
  <div class="study">
    {{ fn }}
  </div>
</template>

<script>
export default {
  name: "study",
  data() {
    return {
      msg: '好的'
    }
  },
  watch: {},
  computed: {
    fn: function () {
      return this.msg + 'ii'
    }
  },
  mounted() {

  },
  methods: {}
}
</script>

<style lang="scss">
.study {
}
</style>