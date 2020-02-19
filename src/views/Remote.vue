<template>
  <div class="remote">
    <p>WebRTC support: {{ supported }}</p>
    <button @click="sendData('LEFT')">
      LEFT
    </button>
  </div>
</template>

<script>

  import Peer from 'simple-peer';

  export default {
    data() {
      return {
        p: null,
        supported: Peer.WEBRTC_SUPPORT
      }
    },
    mounted() {

      this.p = new Peer({initiator: true});
      this.p.on('error', this.onError);
      this.p.on('signal', this.onSignal);
      this.p.on('data', this.onData);

      this.p.on('connect', function () {
        console.log('SOMEONE CONNECT')
        this.p.send('whatever' + Math.random())
      })
    },
    methods: {
      onError(err) {
        console.log('error', err)
      },
      onSignal(data) {
        console.log('SIGNAL', JSON.stringify(data))
      },
      onData(data) {
        console.log('data: ' + data)
      },
      sendData(data) {
        if (this.p.connected) this.p.send(data);
        else console.log('☢️ Not connected');
      }
    }
  }
</script>


<style lang="scss" scoped>
  .remote {
    height: 100%;
    overflow-y: scroll;
    padding: 30 px0;
    font-size: 17px;
  }
</style>

