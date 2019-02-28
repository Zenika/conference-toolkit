<template>
  <div class="loader">
      <div v-if="progress != 1" class="progress" :style="{width: `${(progress * 10 )/ timer }%`}"></div>
  </div>
</template>

<script>
export default {
  name: 'Slide',
  data: function() {
  },
  props: [
      'progress',
      'timer',
  ]
}
</script>

<style scoped lang="scss">
.loader {
    width: 100%;
    height: 5px;
    background: white;
    position: absolute;
    bottom: -5px;
    z-index: 10;
    .progress {
        height: 20px;
        background-color: #b1002d;
        transition: all .1s;
    }
}
</style>
