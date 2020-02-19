<template>
  <div>
    <h1 title="Import / Save">
      🚜 / 💾
    </h1>

    <v-card class="pa-4 mt-4">
      <v-card-title
        primary-title
        class="pa-0"
      >
        <h4 class="bolder mb-4 pa-0">
          Import
        </h4>
      </v-card-title>

      <v-text-field
        id="file"
        type="file"
        accept=".json"
        label="Import json configuration from file"
      />

      <v-btn
        color="info"
        :disabled="!!!json"
        @click="importFromFile"
      >
        Import from file
      </v-btn>

      <v-text-field
        v-model="slideUrl"
        type="text"
        label="Import json configuration from url"
      />

      <v-btn
        color="info"
        :disabled="!!!slideUrl"
        @click="importFromUrl"
      >
        Import from url
      </v-btn>

      <v-card-title
        primary-title
        class="mt-4 pa-0"
      >
        <h4 class="bolder mb-4 pa-0">
          Export
        </h4>
      </v-card-title>

      <v-text-field
        v-model="saveName"
        type="text"
        label="Configuration name"
      />

      <v-btn
        :disabled="!saveName"
        color="info"
        @click="exportConf"
      >
        Export
      </v-btn>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slideUrl: null,
        json: null,
        saveName: null,
        slides: JSON.parse(window.localStorage.getItem('slides') || '[]') || [],
      }
    },
    mounted() {
      document.getElementById('file').addEventListener('change', this.onChange);
    },
    methods: {
      onChange(event) {
        var reader = new FileReader();
        reader.onload = this.onReaderLoad;
        if (event.target.files[0]) {
          reader.readAsText(event.target.files[0]);
        }
      },
      onReaderLoad(event) {
        this.json = JSON.parse(event.target.result);
      },
      importFromFile() {
        if (this.json) {
          localStorage.setItem('slides', JSON.stringify(this.json));
          console.log('💾 save json');
          this.$emit('onSlidesImport');
          this.json = null;
        }
      },
      importFromUrl() {
        if (this.slideUrl) {
          fetch(this.slideUrl)
            .then(resp => resp.json())
            .then(data => {
              this.slides = data;
              localStorage.setItem('slides', JSON.stringify(data));
              this.$emit('onSlidesImport');
              this.slideUrl = null;
            });
        }
      },
      exportConf() {
        this.slides = JSON.parse(window.localStorage.getItem('slides') || '[]') || [];
        if (this.saveName && this.slides.length) {
          this.downloadObjectAsJson(this.slides, this.saveName);
        }
      },
      downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // required for firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
      }
    }
  }
</script>

<style lang="scss" scoped>
  h1 {
    font-size: 2em;
    margin: 50 px0;
  }
</style>

