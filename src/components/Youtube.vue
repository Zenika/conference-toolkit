<template>
  <div class="youtube" :style="`width: ${width}; height: calc(${width} / 1.60)`">
   <iframe :src="src" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Youtube',
  data: function() {
      return {}
  },
  props: {
    src : {
      default: ''
    },
    width: {
      default: '60vw'
    }
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
