<template>
  <div>
    <div class="card speakers">
      <div class="left">
        <div
          class="slider slider-left"
          @click="prevSpeaker()"
        >
          <i class="material-icons">arrow_back</i>
        </div>
        <img
          v-if="0"
          class="wordmark"
          src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png"
          alt="star wars"
        >
      </div>
      <div class="right">
        <img
          class="picture"
          :src="speakers[index].picture"
          alt="picture"
        >
        <div class="informations">
          <h1>
            {{ speakers[index].firstname }}
            <br>
            {{ speakers[index].lastname }}
          </h1>
          <h2>{{ speakers[index].job }}</h2>
          <button>
            <i class="fab fa-twitter" />
            {{ speakers[index].twitter }}
          </button>

          <div
            class="slider"
            @click="nextSpeaker()"
          >
            <i class="material-icons">arrow_forward</i>
          </div>
        </div>
      </div>
    </div>
    <div class="card talks">
      <div class="right">
        <div class="content">
          <h2>{{ speakers[index].talk }}</h2>
          <button>
            <i class="far fa-calendar-alt" />
            {{ speakers[index].talk_date }}
          </button>
          <button>
            <i class="far fa-clock" />
            {{ speakers[index].talk_time }}
          </button>
        </div>
      </div>
      <div class="left" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Speakers',
    props: {
      timer: {
        type: Number,
        required: true,
      },
      counter: {
        type: Number,
        required: true,
      },
      isPlaying: {
        type: Boolean,
        required: true,
      },
      speakers: {
        type: Array,
        required: true,
      },
    },
    data: function () {
      return {
        indexBase: 0,
      }
    },
    computed: {
      index() {
        if (this.isPlaying) {
          const pourcent = (this.counter * 10) / this.timer;
          const value = Math.round(pourcent / (100 / this.speakers.length) - 0.49);
          if (value === this.speakers.length) {
            return this.speakers.length - 1;
          }
          return value;
        } else {
          return this.indexBase;
        }
      },
    },
    mounted: function () {
      window.addEventListener("keydown", (event) => {
        if (event.code === 'ArrowUp') {
          this.nextSpeaker();
        } else if (event.code === 'ArrowDown') {
          this.prevSpeaker();
        }
      });
    },
    methods: {
      nextSpeaker() {
        if (this.indexBase === this.speakers.length - 1) {
          this.indexBase = 0
        } else {
          this.indexBase++;
        }
      },

      prevSpeaker() {
        if (this.indexBase - 1 < 0) {
          this.indexBase = this.speakers.length - 1
        } else {
          this.indexBase--;
        }
      }
    }
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

  @mixin transPos($top, $right, $bottom, $left, $transX, $transY) {
    position: absolute;
    top: $top;
    left: $left;
    right: $right;
    bottom: $bottom;
    transform: translate($transX, $transY);
  }

  .blink_me {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
    }
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    transition: all 0.5s;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  button:focus {
    outline: 0;
  }

  .card {
    @include object(892px, auto, null);
    // @include transPos(50%, null, null, 50%, -50%, -50%);
    top: 7%;
    right: 5%;
    display: flex;
    align-items: center;
    position: absolute;

    &.talks {
      top: 55%;
      height: 350px;
      flex-direction: row-reverse;

      .right {
        left: -140px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .content {
        color: white;

        button {
          margin: 0 10px;
        }
      }
    }

    .left {
      @include object(390px, 350px, $main-color);
      border-radius: 23px;
      display: flex;
      align-items: center;

      .wordmark {
        opacity: 0.2;
        transform: rotate(-90deg) scale(1.2);
        margin-left: -50px;
        width: 315px;
      }
    }

    .right {
      @include object(654px, 300px, $secondary-color);
      position: absolute;
      left: -250px;
      transform: translateX(50%);
      border-radius: 23px;

      .picture {
        // @include transPos(50%, null, null, null, -50%, -50%);
        position: absolute;
        top: 5%;
        left: -8%;
        height: 90%;
      }

      h1 {
        font-weight: 800;
        line-height: 46px;
        font-size: 40px;
        margin-bottom: 15px;
        text-align: left;
        text-transform: uppercase;
        text-shadow: 0 0 10px $main-color, 0 0 20px $main-color, 0 0 30px $main-color, 0 0 40px $main-color, 0 0 50px $main-color, 0 0 60px $main-color, 0 0 70px $main-color;
      }

      h2 {
        font-weight: 300;
        font-size: 32px;
        letter-spacing: 1.6px;
        margin-bottom: 30px;
      }

      button {
        height: 48px;
        background: $main-color;
        border-radius: 90px;
        font-weight: 300;
        line-height: 35px;
        font-size: 1.5em;
        padding: 0 24px;
        color: #fff;

        i {
          margin-right: 20px;
        }
      }

      .informations {
        @include object(380px, 300px, null);
        margin: 50px 0 0 235px;
        color: #fff;
        font-family: "Open Sans", sans-serif;
        text-align: left;

        .details {
          height: 145px;

          .size,
          .durability {
            width: 50%;
            float: left;
          }

          .size {
            border-right: 1px solid $main-color;
            padding: 30px 0;
          }

          .durability {
            text-align: center;

            h4 {
              margin-top: 20px;
              margin-bottom: 30px;
            }
          }
        }

        i.fav {
          font-size: 12px;
          margin: 0 12px 0 24px;
          color: $main-color;
        }

        a {
          font-size: 12px;
          color: #fff;
          opacity: 0.3;
          text-decoration: none;
        }

        h3 {
          @include object(80px, 80px, null);
          font-weight: 300;
          line-height: 80px;
          font-size: 16px;
          margin-left: 30px;
          position: relative;

          &:after {
            content: "";
            position: absolute;
            @include object(80px, 80px, null);
            border-radius: 50%;
            border: 2px solid $main-color;
            border-top-color: transparent;
            transform: rotate(-45deg) translate(-50%, -50%);
          }
        }

        h4 {
          font-weight: bold;
          line-height: normal;
          font-size: 12px;
          letter-spacing: 3px;
          margin-bottom: 15px;
        }

        p {
          @include object(30px, 30px, null);
          display: inline-block;
          text-align: center;
          font-weight: 300;
          line-height: 28px;
          font-size: 14px;
          border-radius: 50%;
          transition: 0.3s linear;
          border: 1px solid transparent;
          cursor: pointer;

          &:hover {
            border: 1px solid $main-color;
          }

          &:nth-of-type(1) {
            border: 1px solid $main-color;
          }
        }
      }
    }
  }

  .slider {
    @include object(60px, 60px, #fff);
    border-radius: 50%;
    line-height: 70px;
    text-align: center;
    margin-left: -30px;
    box-shadow: 0 0 60px rgba(#000, 0.2);
    color: $main-color;
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: calc(50% - 30px);

    &.slider-left {
      right: auto;
      left: 0;
      z-index: 10;
    }

    &:nth-of-type(2) {
      @include transPos(50%, -60px, null, null, -50%, -50%);
    }
  }

  @media screen and (max-width: 576px) {
    .card {
      transform: rotate(90deg) scale(0.7) translate(calc(50% - 25vh), 50%);
      position: static;
    }
  }
</style>
