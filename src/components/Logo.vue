<template>
    <img class="logo" :src="img" alt="">
</template>

<script>
export default {
  name: 'Logo',
  data: function() {
      return {}
  },
  props: {
      img: {
          default: 'img/znk2.png',
      }
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
