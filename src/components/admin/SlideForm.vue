<template>
  <v-form ref="form" v-model="valid" lazy-validation>
    <v-layout wrap justify-space-between>
      <v-flex xs10 md4>
        <v-text-field type="text" v-model="slide.headlineFirstLine" label="Headline First Line"></v-text-field>
      </v-flex>
      <v-flex xs12 md4>
        <v-text-field type="text" v-model="slide.headlineSecondLine" label="Headline Second Line"></v-text-field>
      </v-flex>
      <v-flex xs12 md3>
        <v-checkbox type="checkbox" v-model="slide.isHeadlineVisible" label="Headline Visible ?"></v-checkbox>
      </v-flex>

      <v-flex xs12 md5>
        <v-text-field type="text" v-model="slide.sublineFirstLine" label="Subline First Line"></v-text-field>
      </v-flex>
      <v-flex xs12 md5>
        <v-text-field type="text" v-model="slide.sublineSecondLine" label="Subline Second Line"></v-text-field>
      </v-flex>

      <v-flex xs12 md12 mt-4></v-flex>
      
      <v-flex xs12 md5>
        <v-text-field type="text" v-model="slide.bgImg" label="Background Image"></v-text-field>
      </v-flex>
      <v-flex xs12 md5>
        <v-text-field type="text" v-model="slide.rectImg" label="Rect Image"></v-text-field>
      </v-flex>
      <v-flex xs12 md5>
        <v-text-field type="text" v-model="slide.logoImg" label="Logo Image"></v-text-field>
      </v-flex>

      <v-flex xs12 md3>
        <v-checkbox type="checkbox" v-model="slide.isDisabled" label="Disable Slide ?"></v-checkbox>
      </v-flex>

      <v-flex xs12 md12 mt-4></v-flex>

      <v-flex xs12 md12>
        <v-select @change="loadProps" :clearable="true" v-model="slide.content" :items="contents" label="Content type"></v-select>
      </v-flex>

      <v-flex xs12 md12 mt-4></v-flex>

      <v-flex xs12 md5 v-for="(prop,index) in props" :key="`prop-${index}`">
        <v-text-field type="prop.type" v-model="slide.props[prop.key]" :label="`(${prop.label})`"></v-text-field>
      </v-flex>
      
    </v-layout>

    <v-btn color="red" @click="$emit('delete')" v-if="!isnew">
      <v-icon>delete</v-icon>
    </v-btn>
    <v-btn color="amber" @click="$emit('cancel')">Cancel</v-btn>
    <v-btn :disabled="!valid" color="blue" @click="validate">Validate</v-btn>
  </v-form>
</template>

<script>

import Image from '../slides/Image';
import Iframe from '../slides/Iframe';
import Contest from '../slides/Contest';
import Speakers from '../slides/Speakers';
import Twitter from '../slides/Twitter';
import Youtube from '../slides/Youtube';

export default {
    data() {
        return {
            valid: false,
            contents: ['image', 'iframe', 'contest', 'speaker', 'twitter','youtube'],
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
    props: [
        'isnew',
        'slide',
    ],
    methods: {
        validate(){
            this.$emit('validate',this.slide);
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
        }
    },
    mounted() {
        this.loadProps()
    }
}
</script>


<style lang="scss" scoped>
</style>
