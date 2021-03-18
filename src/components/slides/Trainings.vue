<template>
  <div class="Trainings">
    <div class="trainings">
      <div
        v-for="training in trainings"
        :key="training.name"
        class="training"
      >
        <img
          class="image"
          :src="training.logo"
          :alt="`${training.name} logo`"
          :style="`width: ${width};`"
        >
        <h2>{{ training.name }}</h2>
      </div>
    </div>
    <div class="partners">
      <div
        v-for="partner in partners"
        :key="partner.name"
        class="partner"
      >
        <img
          class="image"
          :src="partner.logo"
          :alt="`${partner.name} logo`"
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Trainings',
    props: {
      trainings: {
        type: Array,
        required: true,
      },
      partners: {
        type: Array,
        required: true,
      },
      width: {
        type: String,
        default: '8vw',
      },
    },
  }
</script>

<style scoped lang="scss">
  @import url("https://fonts.googleapis.com/css?family=Open+Sans");
  @import url("https://fonts.googleapis.com/css?family=Open+Sans:800");
  @import "../../assets/variables";

  @mixin object($width, $height, $bg) {
    width: $width;
    height: $height;
    background: $bg;
  }

  .Trainings {
    @include object(50%, 75%, null);
    // @include transPos(50%, null, null, 50%, -50%, -50%);
    top: 7%;
    right: 10%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .trainings,
  .partners {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;


    ::-webkit-scrollbar {
      display: none;
    }
  }


  .training {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;
    margin: 10px 0;
    flex-basis: 33%;
  }


  h2 {
    text-align: center;
    font-weight: 800;
    line-height: 30px;
    font-size: 24px;
    margin-top: 15px;
    margin-bottom: 15px;
    text-transform: uppercase;
    text-shadow: 0 0 10px $main-color, 0 0 20px $main-color, 0 0 30px $main-color, 0 0 40px $main-color, 0 0 50px $main-color, 0 0 60px $main-color, 0 0 70px $main-color;
  }


  .partners {
    background-color: rgba(255,255,255,.5);
    border-radius: 5px;
    padding-right: 10px;
    padding-left: 10px;
    align-items: center;
    justify-content: space-between;

    .partner {
      .image {
        width: 8vw;
      }
    }
  }


  @media screen and (max-width: 576px) {
    .training {
      transform: rotate(90deg) scale(0.7) translate(calc(50% - 25vh), 50%);
      position: static;
    }
  }
</style>
