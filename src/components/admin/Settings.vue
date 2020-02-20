<template>
  <div class="settings">
    <v-alert
      class="mt-5"
      :value="true"
      type="info"
    >
      First time on Conference Toolkit ? Take time to configure slides 📺, app settings 🎛 and look controls 🤷‍♂️
    </v-alert>

    <h1 title="Slides">
      📺
    </h1>

    <v-card class="pa-4 mt-4">
      <v-card-title
        primary-title
        class="pa-0"
      >
        <h4 class="bolder mb-4 pa-0">
          Slides
        </h4>
      </v-card-title>

      <v-layout
        v-if="!isEditing"
        row
        wrap
      >
        <v-slide
          v-for="(slide,index) in slides"
          :key="`slide-${index}`"
          :slide="slide"
          :index="index"
          @edit="activeEdition(index)"
        />

        <v-btn
          absolute
          fab
          top
          right
          small
          color="amber"
          class="add-slide"
          @click="addNewSlide"
        >
          <v-icon dark>
            add
          </v-icon>
        </v-btn>
      </v-layout>

      <v-slide-form
        v-if="isEditing"
        :isnew="isNew"
        :slide="editingSlide"
        @cancel="cancel"
        @delete="deleteSlide"
        @validate="validate"
      />
    </v-card>

    <h1 title="Settings">
      🎛
    </h1>

    <v-card class="pa-4">
      <v-card-title
        primary-title
        class="pa-0"
      >
        <h4 class="bolder mb-4 pa-0">
          Global settings
        </h4>
      </v-card-title>

      <v-form ref="form">
        <v-text-field
          v-model="currentSlide"
          type="number"
          name="currentSlide"
          label="Default start slide (start at 0)"
          @change="save()"
        />

        <v-text-field
          v-model="timer"
          type="number"
          name="timer"
          label="Default slide timer (seconde)"
          @change="save()"
        />

        <v-checkbox
          v-model="isPlaying"
          type="checkbox"
          name="isPlaying"
          label="Slider is playing "
          @change="save()"
        />
      </v-form>
    </v-card>

    <c-import-save @onSlidesImport="loadSlides" />
  </div>
</template>

<script>

  import Slide from './Slide'
  import SlideForm from './SlideForm'
  import ImportSave from './ImportSave';

  export default {
    components: {
      'v-slide': Slide,
      'v-slide-form': SlideForm,
      'c-import-save': ImportSave,
    },
    data() {
      return {
        timer: window.localStorage.getItem('timer'),
        slides: JSON.parse(window.localStorage.getItem('slides') || '[]') || [],
        configUrl: window.localStorage.getItem('configUrl'),
        currentSlide: window.localStorage.getItem('currentSlide'),
        isPlaying: JSON.parse(window.localStorage.getItem('isPlaying')),
        isEditing: false,
        isNew: false,
        editingSlide: {},
        editingSlideIndex: null,
      }
    },
    mounted() {
    },
    methods: {
      save() {
        window.localStorage.setItem('timer', this.timer);
        window.localStorage.setItem('configUrl', this.configUrl);
        window.localStorage.setItem('currentSlide', this.currentSlide);
        window.localStorage.setItem('isPlaying', this.isPlaying);
        console.log('💾');
      },
      loadSlides() {
        this.slides = JSON.parse(window.localStorage.getItem('slides') || '[]') || [];
      },
      addNewSlide() {
        this.editingSlide = {
          props: {},
        }
        this.isEditing = true;
        this.isNew = true;
      },
      activeEdition(index) {
        this.editingSlideIndex = index;
        this.editingSlide = Object.assign({}, this.slides[index]);
        this.isEditing = true;
      },
      cancel() {
        this.isEditing = false;
        this.isNew = false;
      },
      deleteSlide() {
        this.slides.splice(this.editingSlideIndex, 1);
        this.isEditing = false;
        this.isNew = false;
      },
      validate(slide) {
        if (this.isNew) {
          this.slides.push(slide);
        } else {
          this.slides[this.editingSlideIndex] = Object.assign({}, slide);
        }
        this.isEditing = false;
        this.isNew = false;
        window.localStorage.setItem('slides', JSON.stringify(this.slides));
      }
    }
  }
</script>

<style lang="scss">
  h1 {
    font-size: 2em;
    margin: 50 px0;
  }

  .settings {
    width: 90%;
    margin: auto;
  }

  .bolder {
    font-weight: bold;
  }

  .add-slide {
  }
</style>
