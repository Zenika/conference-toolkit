<template>
  <v-app id="keep">
    <v-toolbar color="amber" app absolute class="test">
      <v-spacer></v-spacer>
      <span class="title ml-3 mr-5">🎤 📺 Conference Toolkit Settings</span>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <v-tabs v-model="active" color="dark" dark slider-color="yellow">
        <v-tab key="setting" ripple>🎛 Settins</v-tab>
        <v-tab key="howtouse" ripple>🤷‍ How to use</v-tab>
        <v-tab key="help" ripple>🙏 Help</v-tab>

        <v-tab-item key="setting">
          <c-settings></c-settings>
        </v-tab-item>

        <v-tab-item key="howtouse">
          <c-howtouse></c-howtouse>
        </v-tab-item>

        <v-tab-item key="help">
          <c-help></c-help>
        </v-tab-item>
      </v-tabs>
    </v-content>
    <v-footer class="pa-3" color="amber">
      &lt;/&gt; with ❤️by&nbsp;
      <a
        target="_blank"
        href="https://twitter.com/AurelienLoyer"
      >Aurélien Loyer</a>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script>

    import HowToUse from '../components/admin/HowToUse';
    import Settings from '../components/admin/Settings';
    import Help from '../components/admin/Help';

  export default {
    data: () => ({
        active: '',
    }),
    props: {
      source: String
    },
    components: {
        'c-howtouse': HowToUse,
        'c-settings': Settings,
        'c-help': Help,
    }
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
  height: calc(100vh - 140px);
  padding-bottom: 40px;
}
</style>