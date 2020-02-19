<template>
  <img
    class="image"
    :src="src"
    alt="image 🦄"
    :style="`width: ${width}; top: ${top}; right: ${right};`"
  >
</template>

<script>
  export default {
    name: 'Logo',
    props: {
      'src': {
        type: String,
        default: 'https://aurelien-loyer.fr/'
      },
      'width': {
        type: String,
        default: '30vw',
      },
      'top': {
        type: String,
        default: '10vh',
      },
      'right': {
        type: String,
        default: '10vw',
      },
    },
    data: function () {
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
