<template>
    <v-flex xs12 sm6 lg4>
      <v-card class="ma-3">
        <v-img
          class="white--text image"
          height="200px"
          :src="slide.bgImg"
        >
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{slide.headlineFirstLine}}</span><br>
                <span class="headline">{{slide.headlineSecondLine}}</span><br>
              </v-flex>
            </v-layout>
          </v-container>
        </v-img>
        <v-card-title>
          <div>
            <span class="grey--text">Number 10</span><br>
            <span>Whitehaven Beach</span><br>
            <span>Whitsunday Island, Whitsunday Islands</span>
          </div>
        </v-card-title>
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
.v-image__image--cover{
    filter: blur(0.5px);
}

.headline {
    font-weight: bold;
}
</style>
