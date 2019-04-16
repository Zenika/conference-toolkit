<template>
  <div class="howtouse">
    <h1 title="How to use ?">🤷‍</h1>

    <v-card class="pa-4 mt-4">
      <div class="keys">
        <div class="item" v-for="(key,index) in keys" :key="`key-${index}`">
          <div class="key">{{key.value}}</div>
          <label>{{key.label}}</label>
        </div>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
    data(){
        return {
            keys: [
                { value : '␠ Space', label: 'Play / Pause slider'},
                { value : '␛ Escape', label: 'Go to settings'},
                { value : '👉 Right', label: 'Next slide'},
                { value : '👈 Left', label: 'Previous slide'},
                { value : '👆 Up', label: 'Next slide content'},
                { value : '👇 Down', label: 'Previous slide content'},
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin: 50px 0px;
}

.howtouse {
  width: 90%;
  margin: auto;
}

.keys {
  display: flex;
  justify-content: space-around;
  align-items: start;
  .item {
    width: 160px;
    .key {
      background: #00bcd4;
      border: 2px solid #1c6fb1;
      text-align: center;
      width: 120px;
      padding: 15px 10px;
      margin: auto;
      margin-bottom: 20px;
      border-radius: 5px;
      font-weight: bold;
    }
  }
}
</style>

