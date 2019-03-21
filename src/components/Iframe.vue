<template>
    <iframe :src="src"></iframe>
</template>

<script>
export default {
  name: 'Iframe',
  props: [
      'src',
      'left',
      'right',
      'top',
      'bottom',
  ],
  data: function() {
      return {}
  },
}
</script>

<style scoped lang="scss">
iframe {
    width: 30vw;
    height: calc(100vh - 150px);
    overflow: hidden;
    position: absolute;
    right: 200px;
    top: 40px;
    background: #0c1f2c;
    border-radius: 10px;
}
</style>
