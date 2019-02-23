<template>
  <div class="youtube">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/b_Gh5YIzs9o?&autoplay=1&mute=1" frameborder="0" allowfullscreen></iframe>
  </div>
</template>

<script>
export default {
  name: 'Youtube',
  data: function() {
      return {}
  },
}
</script>

<style scoped lang="scss">
.youtube {
    width: 30vw;
    height: calc(100vh - 150px);
    overflow: hidden;
    position: absolute;
    right: 200px;
    top: 20px;
    iframe {
      width: 100%;
    }
}
</style>
