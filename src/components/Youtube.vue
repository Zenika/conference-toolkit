<template>
  <div class="youtube">
   <iframe width="560" height="315" src="https://www.youtube.com/embed/b_Gh5YIzs9o?list=PLQBUm8bePdvYOBJ_vyUVNeRPThdEECiqr&autoplay=1&mute=1&loop=1&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
    width: 50vw; 
    height: calc(50vw / 1.60); 
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
