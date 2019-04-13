<template>
    <img class="image" :src="src" alt="image 🦄" :style="`width: ${width}; top: ${top}; right: ${right};`">
</template>

<script>
export default {
  name: 'Logo',
  props: {
      'src':{
          default: 'https://aurelien-loyer.fr/'
      },
      'width': {
          default: '30vw',
      },
      'top': {
          default: '10vh',
      },
      'right': {
          default: '10vw',
      },
  },
  data: function() {
      return {}
  },
}
</script>

<style scoped lang="scss">
.image {
    height: auto;
    position: absolute;
    z-index: 1000;
}
</style>
