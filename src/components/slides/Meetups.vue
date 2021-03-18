<template>
  <div class="Meetups">
    <div class="meetups">
      <div
        v-for="meetup in meetups"
        :key="meetup.name"
        class="meetup"
      >
        <div class="top">
          <img
            class="image"
            :src="meetup.logo"
            :alt="`${meetup.name} logo`"
            :style="`width: ${width};`"
          >
        </div>
        <div class="bottom">
          <h2>{{ meetup.name }}</h2>

          <div
            v-if="meetup.next"
            class="content"
          >
            <h3>{{ meetup.next.title }}</h3>
            <button>
              <i class="far fa-calendar-alt" />
              {{ meetup.next.date }}
            </button>
            <button>
              <i class="far fa-clock" />
              {{ meetup.next.time }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Meetups',
    props: {
      meetups: {
        type: Array,
        required: true,
      },
      width: {
        type: String,
        default: '15vw',
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

  .Meetups {
    @include object(50%, 60%, null);
    // @include transPos(50%, null, null, 50%, -50%, -50%);
    top: 7%;
    right: 10%;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .meetups {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;


    ::-webkit-scrollbar {
      display: none;
    }
  }

  .meetup {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    position: relative;

    .top {

      .image {
        border-radius: 23px;
        display: flex;
        align-items: center;
      }
    }

    .bottom {
      @include object(15vw, auto, rgba(0, 0, 0, 0));
      padding: 10px;
      border-radius: 23px;

      h2 {
        text-align: center;
        font-weight: 800;
        line-height: 46px;
        font-size: 28px;
        margin-bottom: 15px;
        text-transform: uppercase;
        text-shadow: 0 0 10px $main-color, 0 0 20px $main-color, 0 0 30px $main-color, 0 0 40px $main-color, 0 0 50px $main-color, 0 0 60px $main-color, 0 0 70px $main-color;
      }

      h3 {
        font-weight: 300;
        font-size: 24px;
        letter-spacing: 1.6px;
        margin-bottom: 30px;
      }

      button {
        background: $main-color;
        border-radius: 90px;
        font-weight: 300;
        line-height: 35px;
        font-size: 1.2em;
        padding: 0 18px;
        color: #fff;
        margin: 5px;

        i {
          margin-right: 20px;
        }
      }


    }
  }

  @media screen and (max-width: 576px) {
    .meetup {
      transform: rotate(90deg) scale(0.7) translate(calc(50% - 25vh), 50%);
      position: static;
    }
  }
</style>
