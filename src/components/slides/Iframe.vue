<template>
  <iframe
    scrolling="no"
    :src="src"
    :style="(!!width ? `width: ${width};` : '') + (!!height ? `height: ${height};` : '') + (!!top ? `top: ${top};` : '') + (!!right ? `right: ${right};` : '')"
  />
</template>

<script>
  export default {
    name: 'Iframe',
    props: {
      'src': {
        type: String,
        default: 'https://zenika.ca/'
      },
      'height': {
        type: String,
        default: '',
      },
      'width': {
        type: String,
        default: '',
      },
      'top': {
        type: String,
        default: '',
      },
      'right': {
        type: String,
        default: '',
      },
    },
    data: function () {
      return {}
    },
  }
</script>

<style scoped lang="scss">
  iframe {
    width: 60%;
    height: 80%;
    overflow: hidden;
    position: absolute;
    right: 50px;
    top: 50px;
    background: #0c1f2c;
    border-radius: 10px;
  }
</style>
