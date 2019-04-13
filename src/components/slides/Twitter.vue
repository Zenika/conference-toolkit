<template>
  <div class="twitter" :style="`width: ${width};`">
      <a class="twitter-timeline" data-chrome="transparent nofooter noborders noheader noscrollbar" data-lang="fr" data-theme="dark" data-link-color="#cc3843" :href="`https://twitter.com/${twitterName}?ref_src=twsrc%5Etfw`">Tweets by ZenikaMontreal</a>
  </div>
</template>

<script>
import { setInterval } from 'timers';
export default {
  name: 'Twitter',
  props: {
    'twitterName' : {
      default: 'AurelienLoyer',
      type: String,
    },
    'width' : {
      type: String,
      default: '30vw'
    },
  },
  mounted() {
    if(window.twttr != undefined) {
      window.twttr.widgets.load();
    }
    
    setInterval(()=> {
      window.twttr.widgets.load();
    },5000);
  }
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
