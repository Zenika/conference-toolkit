<template>
  <img
    class="logo"
    :src="img"
    alt=""
  >
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      img: {
        type: String,
        default: 'img/znk2.png',
      }
    },
    data: function () {
      return {}
    }
  }
</script>

<style scoped lang="scss">
  .logo {
    width: 78%;
    overflow: hidden;
    position: absolute;
    top: 32%;
    left: 10%;
    z-index: 1000;
    opacity: 0.6;
  }
</style>
