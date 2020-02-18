<template>
  <v-app id="keep">
    <router-link
      to="/"
      class="goback"
    >
      <p>🚪</p>
      <span>Go to slides</span>
    </router-link>
    <v-toolbar
      color="amber"
      app
      absolute
      class="test"
    >
      <v-spacer />
      <span class="title ml-3 mr-5">🎤 📺 Conference Toolkit Settings</span>
      <v-spacer />
    </v-toolbar>
    <v-content>
      <v-tabs
        v-model="active"
        color="dark"
        dark
        slider-color="yellow"
      >
        <v-tab
          key="setting"
          ripple
        >
          🎛 Settins
        </v-tab>
        <v-tab
          key="howtouse"
          ripple
        >
          🤷‍ How to use
        </v-tab>
        <v-tab
          key="help"
          ripple
        >
          🙏 Help
        </v-tab>

        <v-tab-item key="setting">
          <c-settings />
        </v-tab-item>

        <v-tab-item key="howtouse">
          <c-howtouse />
        </v-tab-item>

        <v-tab-item key="help">
          <c-help />
        </v-tab-item>
      </v-tabs>
    </v-content>
    <v-footer
      class="pa-3"
      color="amber"
    >
      <v-spacer />
      <div>
        &lt;/&gt; with ❤️by&nbsp;
        <a
          target="_blank"
          href="https://twitter.com/AurelienLoyer"
        >Aurélien Loyer</a>
      </div>
      <v-spacer />
    </v-footer>
  </v-app>
</template>

<script>

    import HowToUse from '../components/admin/HowToUse';
    import Settings from '../components/admin/Settings';
    import Help from '../components/admin/Help';

  export default {
    components: {
        'c-howtouse': HowToUse,
        'c-settings': Settings,
        'c-help': Help,
    },
    props: {
      source: {
        type: String,
        required: true,
      }
    },
    data: () => ({
        active: '',
    })
  }
</script>

<style lang="scss">
#keep {
  .v-navigation-drawer__border {
    display: none;
  }
}

.v-window {
  overflow-y: scroll;
  height: calc(100vh - 150px);
  padding-bottom: 40px;
}
.goback {
  position: absolute;
  right: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;
  z-index: 999;
  top: 12px;
  font-size: 2em;
  display: flex;
  height: 38px;
  span {
    width:0;
    overflow: hidden;
    font-size: 14px;
    margin-top: 9px;
    transition: all 0.2s;
    height: 20px;
  }
  &:hover {
    span {
      width: 85px;
    }
  }
}
</style>
