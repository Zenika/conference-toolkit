<template>
  <div class="twitter">
      <a class="twitter-timeline" data-chrome="transparent nofooter noborders noheader noscrollbar" data-lang="fr" data-theme="dark" data-link-color="#cc3843" :href="`https://twitter.com/${twittername}?ref_src=twsrc%5Etfw`">Tweets by ZenikaMontreal</a>
  </div>
</template>

<script>
export default {
  name: 'Twitter',
  data: function() {
      return {
        twittername: 'ZenikaMontreal',
        // twittername: 'AurelienLoyer'
      }
  },
}
</script>

<style scoped lang="scss">
.twitter {
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
