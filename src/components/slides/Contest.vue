<template>
  <div>
    <div
      v-if="contest1Title"
      class="card top"
    >
      <div class="left" />
      <div class="right">
        <img
          v-if="contest1Image"
          class="helmet"
          :src="contest1Image"
          alt="helmet"
        >
        <div class="productInfo">
          <h1 v-html="contest1Title" />
          <h2>{{ contest1Content }}</h2>
          <h2 class="redznk">
            {{ contest1SubContent }}
          </h2>
          <button v-if="0">
            <i class="fab fa-wpforms" /> Formulaire
          </button>
        </div>
      </div>
    </div>
    <div
      v-if="contest2Title"
      class="card bottom contest2"
    >
      <div class="right">
        <div class="productInfo">
          <img
            class="contest-img"
            :src="contest2Image"
            alt="helmet"
          >
        </div>
      </div>
      <div class="left" />
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Contest',
    props: {
      contest1Image: {
        type: String,
        default: '',
      },
      contest1Title: {
        type: String,
        default: 'Tee-shirt<br>C0d1ng Th3 W0rld',
      },
      contest1Content: {
        type: String,
        default: 'Tente ta chance et repars avec notre tee-shirt !'
      },
      contest1SubContent: {
        type: String,
        default: '@AurelienLoyer @Vue.js @JavaScript'
      },
      contest2Title: {
        type: String,
        default: 'Un super cadeau !',
      },
      contest2Content: {
        type: String,
        default: 'Un tirage tous les soirs (17h) parmi les tweets contenant:'
      },
      contest2SubContent: {
        type: String,
        default: '@AurelienLoyer @Vue.js @JavaScript'
      },
      contest2Image: {
        type: String,
        default: 'img/demo/teeshirt.png',
      },
    },
    data: function () {
      return {
        contests: [],
      }
    },
    mounted: function () {
    },
    methods: {}
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

  .redznk {
    color: #de223d;
  }

  .card {
    @include object(892px, auto, null);
    // @include transPos(50%, null, null, 50%, -50%, -50%);
    top: 7%;
    right: 5%;
    display: flex;
    align-items: center;
    position: absolute;

    &.bottom {
      top: 55%;
      height: 350px;
      flex-direction: row-reverse;

      .right {
        left: -180px;
        width: 700px;
        display: flex;
        justify-content: center;
        align-items: center;

        .productInfo {
          width: 635px;
          height: 300px;
          margin: 70px 0 0 50px;
        }
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
        margin-left: -180px;
        width: 315px;
      }
    }

    &.contest2 .productInfo {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 !important;
    }

    .right {
      @include object(654px, 300px, #0c1f2c);
      position: absolute;
      left: -140px;
      transform: translateX(50%);
      border-radius: 23px;

      .helmet {
        position: absolute;
        top: 35px;
        left: -180px;
        height: 80%;
      }

      h1 {
        font-weight: 800;
        line-height: 46px;
        font-size: 40px;
        margin-bottom: 15px;
        text-align: left;
        text-transform: uppercase;
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

      .productInfo {
        @include object(490px, 300px, null);
        margin: 30px 0 0 80px;
        color: #fff;
        font-family: "Open Sans", sans-serif;
        text-align: left;

        .contest-img {
          height: 65%;
        }

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
