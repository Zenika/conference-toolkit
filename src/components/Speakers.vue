<template>
  <div>
    <div class="card speakers">
      <div class="left">
        <div class="slider slider-left">
          <i class="material-icons">arrow_back</i>
        </div>
        <img
          class="wordmark"
          src="http://res.cloudinary.com/prvnbist/image/upload/v1508603572/starwars.png"
          alt="star wars"
          v-if="0"
        >
      </div>
      <div class="right">
        <img
          class="helmet"
          src="http://res.cloudinary.com/prvnbist/image/upload/v1508603573/helmet.png"
          alt="helmet"
        >
        <div class="productInfo">
          <h1>
            {{speakers[index].firstname}}
            <br>
            {{speakers[index].lastname}}
          </h1>
          <h2>{{speakers[index].job}}</h2>
          <button>
            <i class="fab fa-twitter"></i> {{speakers[index].twitter}}
          </button>

          <div class="slider">
            <i class="material-icons">arrow_forward</i>
          </div>
        </div>
      </div>
    </div>
    <div class="card talks">
      <div class="right">
        <div class="content">
          <h2>{{speakers[index].talk}}</h2>
          <button>
            <i class="far fa-calendar-alt"></i> {{speakers[index].talk_date}}
          </button>
          <button>
            <i class="far fa-clock"></i> {{speakers[index].talk_time}}
          </button>
        </div>
      </div>
      <div class="left"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Speakers',
  props: [
    'timer',
    'counter',
  ],
  data: function() {
      return {
        speakers: [
            {
                  firstname: 'Aurélien',
                  lastname: 'LOYER',
                  twitter: 'AurelienLoyer',
                  job: 'CTO | Consultant Web',
                  picture: 'https://confoo.ca/images/speakers/yul2019/aurelien-loyer-1_l.jpg',
                  talk: 'Tout le monde sait comment utiliser Angular / React / Vue.js ...',
                  talk_description: 'Aujourd’hui tout le monde connait les frameworks Angular, React Vuejs, mais savez-vous utiliser Javascript ? Savez-vous ...',
                  talk_date: '15 mars 2019',
                  talk_time: '13:00',
            },
            {
                  firstname: 'Anna',
                  lastname: 'FILINA',
                  twitter: 'afilina',
                  job: 'IT Project Rescue',
                  picture: 'https://confoo.ca/images/speakers/yul2019/anna-filina_l.jpg',
                  talk: `Writing Better Gherkin Scenarios`,
                  talk_description: 'Are your feature files gigantic and unreadable? Do they break every time you add a database column or change a completely ...',
                  talk_date: '14 mars 2019',
                  talk_time: '15:00',
            }
        ],
      }
  },
  computed: {
    index() {
      const pourcent = (this.counter * 10 )/ this.timer;
      const value = Math.round(pourcent / ( 100 / this.speakers.length) - 0.49);
      if (value === this.speakers.length ) {
        return this.speakers.length - 1;
      }
      return value;
    },
  },
  mounted: function () {
    window.addEventListener("keydown", (event) => {
      if (event.code === 'ArrowUp') {
        this.nextSpeaker();
      }
      else if (event.code === 'ArrowDown') {
        this.prevSpeaker();
      }
    });
  },
  methods: {
    nextSpeaker() {
      if(this.index + 1 > this.speakers.length) {
        this.index = 0
      }else {
        this.index++;
      }
    },

    prevSpeaker() {
      if(this.index - 1 < 0) {
        this.index =  this.speakers.length
      }else {
        this.index--;
      }
    }
  }
}
</script>

<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Open+Sans");
@import url("https://fonts.googleapis.com/css?family=Open+Sans:800");

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
  transition: all .5s
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
    @include object(390px, 350px, #cc3843);
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
    @include object(654px, 300px, #0c1f2c);
    position: absolute;
    left: -250px;
    transform: translateX(50%);
    border-radius: 23px;
    .helmet {
      // @include transPos(50%, null, null, null, -50%, -50%);
      position: absolute;
      top: 35px;
      left: -5%;
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
      background: #cb2140;
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
          border-right: 1px solid #cb1f40;
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
        color: #cb2140;
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
          border: 2px solid #cb1f40;
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
        line-height: normal;
        text-align: center;
        font-weight: 300px;
        line-height: 28px;
        font-size: 14px;
        border-radius: 50%;
        transition: 0.3s linear;
        border: 1px solid transparent;
        cursor: pointer;
        &:hover {
          border: 1px solid #cb1f40;
        }
        &:nth-of-type(1) {
          border: 1px solid #cb1f40;
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
  color: #cb1f40;
  cursor: pointer;
  position: absolute;
  right: -30px;
  top: calc(50% - 30px);
  &.slider-left {
    right: auto;
    left: 0px;
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
