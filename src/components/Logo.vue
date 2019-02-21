<template>
    <img class="logo" src="/img/znk2.png" alt="">
</template>

<script>
export default {
  name: 'Logo',
  data: function() {
      return {}
  },
}
</script>

<style scoped lang="scss">
.logo {
    height: 20vh;
    overflow: hidden;
    position: absolute;
    // left: 50px;
    // bottom: 20px;
    top: 35px;
    left: 220px;
    z-index: 1000;
    opacity: 0.6;
}
</style>
