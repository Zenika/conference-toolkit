<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">


  html,
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  p {
    font-size: 6rem;
  }
</style>
