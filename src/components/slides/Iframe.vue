<template>
  <iframe
    :src="src"
    :style="`width: ${width}; height: ${height}; top: ${top}; right: ${right};`"
  />
</template>

<script>
  export default {
    name: 'Iframe',
    props: {
      'src': {
        type: String,
        default: 'https://aurelien-loyer.fr/'
      },
      'height': {
        type: String,
        default: '80vh',
      },
      'width': {
        type: String,
        default: '80vh',
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
  iframe {
    width: 50vw;
    height: calc(100vh - 150px);
    overflow: hidden;
    position: absolute;
    right: 200px;
    top: 40px;
    background: #0c1f2c;
    border-radius: 10px;
  }
</style>
