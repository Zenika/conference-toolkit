<template>
  <v-flex xs12 sm6 lg4>
    <v-card class="ma-3 slide">
      <div v-if="slide.isDisabled" class="disabled"></div>
      <v-img class="white--text image" height="200px" :src="slide.bgImg">
        <v-container fill-height fluid>
          <v-layout fill-height>
            <v-flex xs12 align-end flexbox>
              <span class="headline">{{slide.headlineFirstLine}}</span>
              <br>
              <span class="headline">{{slide.headlineSecondLine}}</span>
              <br>
            </v-flex>
          </v-layout>
        </v-container>
      </v-img>
      <v-card-title>
        <div>
          <span class="grey--text"># {{slide.content}}</span> -
          <span>{{slide.sublineFirstLine}} / {{slide.sublineSecondLine}}</span>
        </div>
      </v-card-title>
      <strong>Configuration</strong>
      <pre class="config">{{slide.props}}</pre>
      <v-card-actions>
        <v-btn flat color="blue" @click="edit()">EDIT</v-btn>
      </v-card-actions>
    </v-card>
  </v-flex>
</template> 

<script>
export default {
    props: [
        'slide',
        'index',
    ],
    methods: {
        edit() {
            this.$emit('edit', this.index);
        }
    }
}
</script>


<style lang="scss">
.slide {
  .v-image__image--cover {
    filter: blur(0.5px);
  }

  .headline {
    font-weight: bold;
  }

  .v-card__title {
    text-align: left;
  }

  .grey--text {
    font-weight: bolder;
  }

  .config {
    overflow: scroll;
    height: 100px;
    text-align: left;
    background: #efefef;
  }

  .disabled {
    height: 375px;
    background: #424242;
    position: absolute;
    width: 100%;
    z-index: 999;
    opacity: 0.5;
  }
}
</style>
