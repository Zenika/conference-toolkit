<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-layout
      wrap
      justify-space-between
    >
      <v-flex
        xs10
        md4
      >
        <v-text-field
          v-model="slide.headlineFirstLine"
          type="text"
          label="Headline First Line"
        />
      </v-flex>
      <v-flex
        xs12
        md4
      >
        <v-text-field
          v-model="slide.headlineSecondLine"
          type="text"
          label="Headline Second Line"
        />
      </v-flex>
      <v-flex
        xs12
        md3
      >
        <v-checkbox
          v-model="slide.isHeadlineVisible"
          type="checkbox"
          label="Headline Visible ?"
        />
      </v-flex>

      <v-flex
        xs12
        md5
      >
        <v-text-field
          v-model="slide.sublineFirstLine"
          type="text"
          label="Subline First Line"
        />
      </v-flex>
      <v-flex
        xs12
        md5
      >
        <v-text-field
          v-model="slide.sublineSecondLine"
          type="text"
          label="Subline Second Line"
        />
      </v-flex>

      <v-flex
        xs12
        md12
        mt-4
      />

      <v-flex
        xs12
        md5
      >
        <v-text-field
          :v-model="`${prependPublicPathIfNecessary(slide.bgImg)}`"
          type="text"
          label="Background Image"
        />
      </v-flex>
      <v-flex
        xs12
        md5
      >
        <v-text-field
          :v-model="`${prependPublicPathIfNecessary(slide.rectImg)}`"
          type="text"
          label="Rect Image"
        />
      </v-flex>
      <v-flex
        xs12
        md5
      >
        <v-text-field
          :v-model="`${prependPublicPathIfNecessary(slide.logoImg)}`"
          type="text"
          label="Logo Image"
        />
      </v-flex>

      <v-flex
        xs12
        md3
      >
        <v-checkbox
          v-model="slide.isDisabled"
          type="checkbox"
          label="Disable Slide ?"
        />
      </v-flex>

      <v-flex
        xs12
        md12
        mt-4
      />

      <v-flex
        xs12
        md12
      >
        <v-select
          v-model="slide.content"
          :clearable="true"
          :items="contents"
          label="Content type"
          @change="loadProps"
        />
      </v-flex>

      <v-flex
        xs12
        md12
        mt-4
      />

      <v-flex
        v-for="(prop,index) in props"
        :key="`prop-${index}`"
        xs12
        md5
      >
        <v-text-field
          v-model="slide.props[prop.key]"
          type="prop.type"
          :label="`(${prop.label})`"
        />
      </v-flex>
    </v-layout>

    <v-btn
      v-if="!isnew"
      color="red"
      @click="$emit('delete')"
    >
      <v-icon>delete</v-icon>
    </v-btn>
    <v-btn
      color="amber"
      @click="$emit('cancel')"
    >
      Cancel
    </v-btn>
    <v-btn
      :disabled="!valid"
      color="blue"
      @click="validate"
    >
      Validate
    </v-btn>
  </v-form>
</template>

<script>

  import Image from '../slides/Image';
  import Iframe from '../slides/Iframe';
  import Contest from '../slides/Contest';
  import Speakers from '../slides/Speakers';
  import Twitter from '../slides/Twitter';
  import Youtube from '../slides/Youtube';
  import SlidesService from '../../services/slides.service';

  export default {
    props: {
      isnew: {
        type: Boolean,
        required: true,
      },
      slide: {
        type: Object,
        required: true,
      },
    },
    data() {
      return {
        valid: false,
        contents: ['image', 'iframe', 'contest', 'speaker', 'twitter', 'youtube'],
        propsByContent: {
          image: Image.props,
          iframe: Iframe.props,
          contest: Contest.props,
          speaker: Speakers.props,
          twitter: Twitter.props,
          youtube: Youtube.props,
        },
        props: [],
      }
    },
    mounted() {
      this.loadProps()
    },
    methods: {
      validate() {
        this.$emit('validate', this.slide);
      },
      loadProps() {
        this.props = [];
        if (!Object.keys(this.propsByContent[this.slide.content])) {
          return;
        }
        Object.keys(this.propsByContent[this.slide.content]).forEach(key => {
          this.props.push({
            key,
            label: `Key : ${key} /  : ${this.propsByContent[this.slide.content][key].default}`,
            type: this.propsByContent[this.slide.content][key].type.name.toLowerCase(),
            value: this.propsByContent[this.slide.content][key].default,
          })
        });
        console.log(this.props);
      },
      prependPublicPathIfNecessary(url) {
        return SlidesService.prependPublicPathIfNecessary(url);
      }
    }
  }
</script>


<style lang="scss" scoped>
</style>
