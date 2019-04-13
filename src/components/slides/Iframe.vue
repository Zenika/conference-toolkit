<template>
  <iframe :src="src" :style="`width: ${width}; height: ${height}; top: ${top}; right: ${right};`"></iframe>
</template>

<script>
export default {
  name: 'Iframe',
  props: {
      'src':{
          default: 'https://aurelien-loyer.fr/'
      },
      'height': {
          default: '80vh',
      },
      'width': {
          default: '80vh',
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
