<template>
    <img class="image" :src="src" alt="">
</template>

<script>
export default {
  name: 'Logo',
  props: [
      'src',
  ],
  data: function() {
      return {}
  },
}
</script>

<style scoped lang="scss">
.image {
    width: 30vw;
    height: 30vw;
    position: absolute;
    top: 7%;
    right: 13%;
    z-index: 1000;
}
</style>
