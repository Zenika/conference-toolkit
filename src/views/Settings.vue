<template>
  <div class="settings">
    <header>🎤 📺 Conference Toolkit Settings</header>

    <h1>🎉</h1>

    <div
      v-if="!timer"
      class="message"
    >
      First time on 🎤 📺 Conference Toolkit, take time to configure 🎛 the app and look controls 🤷‍♂️
    </div>

    <router-link
      to="/"
      class="link"
    >
      Return to slider
    </router-link>

    <h1 title="Settings">
      🎛
    </h1>

    <form action>
      <label>
        Config url (json):
        <input
          v-model="configUrl"
          type="url"
          name="configUrl"
          placeholder="./config/confoo-2020.json"
          @change="save()"
        >
      </label>

      <label>
        Default start slide :
        <input
          v-model="currentSlide"
          type="number"
          name="currentSlide"
          placeholder="0"
          @change="save()"
        >
      </label>

      <label>
        Default slide timer :
        <input
          v-model="timer"
          type="number"
          name="timer"
          placeholder="30"
          @change="save()"
        >
      </label>

      <label>
        Slider is playing :
        <input
          v-model="isPlaying"
          type="checkbox"
          name="isPlaying"
          @change="save()"
        >
      </label>
    </form>

    <h1 title="How to use ?">
      🤷‍
    </h1>

    <div class="keys">
      <div
        v-for="(key,index) in keys"
        :key="`key-${index}`"
        class="item"
      >
        <div class="key">
          {{ key.value }}
        </div>
        <label>{{ key.label }}</label>
      </div>
    </div>

    <h1 title="Credits">
      👏
    </h1>
    <footer>
      <a
        class="link"
        target="_blank"
        href="https://github.com/Zenika/conference-toolkit/issues"
      >Problem ? 🛠</a>
      <a
        class="link"
        target="_blank"
        href="https://github.com/Zenika/conference-toolkit/"
      >Contribute 🐙</a>
    </footer>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        timer: window.localStorage.getItem('timer'),
        configUrl: window.localStorage.getItem('configUrl'),
        currentSlide: window.localStorage.getItem('currentSlide'),
        isPlaying: JSON.parse(window.localStorage.getItem('isPlaying')),
        keys: [
          {value: '␠ Space', label: 'Play / Pause slider'},
          {value: '␛ Escape', label: 'Go to settings'},
          {value: '👉 Right', label: 'Next slide'},
          {value: '👈 Left', label: 'Previous slide'},
          {value: '👆 Up', label: 'Next slide content'},
          {value: '👇 Down', label: 'Previous slide content'},
        ],
      }
    },
    methods: {
      save() {
        if (this.timer) window.localStorage.setItem('timer', this.timer);
        if (this.configUrl) window.localStorage.setItem('configUrl', this.configUrl);
        if (this.currentSlide) window.localStorage.setItem('currentSlide', this.currentSlide);
        if (this.isPlaying) window.localStorage.setItem('isPlaying', this.isPlaying);
        console.log('💾');
      },
    }
  }
</script>


<style lang="scss" scoped>
  .settings {
    height: 100%;
    overflow-y: scroll;
    padding-top: 30px;
    font-size: 17px;

    .message {
      width: 600px;
      margin: 40px auto;
      line-height: 2em;
      font-size: 1.5em;
      background: #00bed8;
      border: 2px solid;
      border-radius: 5px;
      padding: 10px;
    }

    .link {
      color: #009688;
      font-size: 1.5em;
      text-decoration: none;
      width: 200px;
      margin: 25px;
      transition: all .5s;

      &:hover {
        text-decoration: underline overline dotted;
        transform: scale(1.1);
      }
    }

    h1 {
      font-size: 2em;
      margin: 50px 0;
    }

    .keys {
      display: flex;
      justify-content: space-around;
      align-items: flex-start;

      .item {
        width: 160px;

        .key {
          background: #00bcd4;
          border: 2px solid #1c6fb1;
          text-align: center;
          width: 120px;
          padding: 15px 10px;
          margin: auto auto 20px;
          border-radius: 5px;
          font-weight: bold;
        }
      }
    }

    form {
      margin: auto;
      width: 400px;
      font-size: 20px;

      label {
        margin-bottom: 20px;
        display: flex;
        width: 400px;
        justify-content: space-between;
      }

      input {
        font-size: 20px;
        text-align: center;
      }
    }

    header {
      background: #ffc107;
      position: absolute;
      width: 100%;
      top: 0;
      padding: 10px;
      color: #060000;
      font-weight: 700;

      a {
        color: #3f51b5;
      }
    }

    footer {
      background: #ffc107;
      width: 100%;
      bottom: 0;
      padding: 10px;
      color: #060000;
      font-weight: 700;

      a {
        color: #3f51b5;
      }
    }
  }
</style>

