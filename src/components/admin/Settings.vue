<template>
  <div class="settings">
    <h1 title="Slides">📺</h1>

    <v-card class="pa-4 mt-4">
      <v-layout row wrap v-if="!isEditing">
        <v-slide
          v-for="(slide,index) in slides"
          :key="`slide-${index}`"
          :slide="slide"
          :index="index"
          @edit="activeEdition(index)"
        ></v-slide>
      </v-layout>

        <v-form ref="form" v-model="valid" lazy-validation v-if="isEditing">
          <v-text-field
            type="text"
            v-model="editingSlide.headlineFirstLine"
            label="headlineFirstLine"
          ></v-text-field>

          <v-text-field
            type="text"
            v-model="editingSlide.headlineSecondLine"
            label="headlineSecondLine"
          ></v-text-field>

          <v-btn :disabled="!valid" color="success" @click="validate">Validate</v-btn>
        </v-form>
    </v-card>

    <h1 title="Settings">🎛</h1>

    <v-card class="pa-4">
      <v-form ref="form">
        <v-text-field
          type="number"
          name="currentSlide"
          v-model="currentSlide"
          @change="save()"
          label="Default start slide (start at 0)"
        ></v-text-field>

        <v-text-field
          type="number"
          name="timer"
          v-model="timer"
          @change="save()"
          label="Default slide timer (seconde)"
        ></v-text-field>

        <v-checkbox
          type="checkbox"
          name="isPlaying"
          v-model="isPlaying"
          @change="save()"
          label="Slider is playing"
        ></v-checkbox>
      </v-form>
    </v-card>
  </div>
</template>

<script>

import Slide from './Slide'

export default {
    components: {
        'v-slide': Slide
    },
  data() {
    return {
      timer: window.localStorage.getItem('timer'),
      configUrl: window.localStorage.getItem('configUrl'),
      currentSlide: window.localStorage.getItem('currentSlide'),
      isPlaying: JSON.parse(window.localStorage.getItem('isPlaying')),
      isEditing: false,
      valid: false,
      editingSlide: {},
      slides: [],
    }
  },
  mounted() {
      this.fetchData();
  },
  methods: {
    save() {
      window.localStorage.setItem('timer', this.timer);
      window.localStorage.setItem('configUrl', this.configUrl);
      window.localStorage.setItem('currentSlide', this.currentSlide);
      window.localStorage.setItem('isPlaying', this.isPlaying);
      console.log('💾');
    },
    fetchData() {
        const jsonUrl = localStorage.getItem('configUrl');
        if(jsonUrl) {
            fetch(jsonUrl)
            .then(resp => resp.json())
            .then(data => {
                this.slides = data;
            })
        } else {
            this.slides = this.defaultSlides;
        }
    },
    activeEdition(index) {
        this.editingSlide = this.slides[index];
        this.isEditing = true;
    },
    validate() {
        this.isEditing = false;
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 2em;
  margin: 50px 0px;
}

.settings {
  width: 90%;
  margin: auto;
}
</style>
