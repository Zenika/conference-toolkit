<template>
  <div
    class="youtube"
    :style="`width: ${width}; height: calc(${width} / 1.60)`"
  >
    <iframe
      :src="src"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen
    />
  </div>
</template>

<script>
  export default {
    name: 'Youtube',
    props: {
      src: {
        type: String,
        default: '',
      },
      width: {
        type: String,
        default: '60vw'
      }
    },
    data: function () {
      return {}
    },
  }
</script>

<style scoped lang="scss">
  .youtube {
    height: calc(60vw / 1.60);
    overflow: hidden;
    position: absolute;
    right: 100px;
    top: 10vh;

    iframe {
      width: 100%;
      height: 100%;
    }
  }
</style>
