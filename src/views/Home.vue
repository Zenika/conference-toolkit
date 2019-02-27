<template>
  <div
    id="home"
    class="wrapper"
    v-cloak
    v-bind:class="{'is-previous': isPreviousSlide, 'first-load': isFirstLoad}"
  >
    <div
      class="slide-wrapper"
      v-for="(slide, index) in slides"
      :key="`slide-${index}`"
      :class="{ active: index === currentSlide }"
      :style="{ 'z-index': (slides.length - index), 'background-image': 'url(' + slide.bgImg + ')' }"
    >
      <div class="slide-inner">
        <div class="slide-bg-text">
          <p>{{ slide.headlineFirstLine }}</p>
          <p>{{ slide.headlineSecondLine }}</p>
        </div>
        <div class="slide-rect-filter">
          <div
            class="slide-rect"
            v-bind:style="{'border-image-source': 'url(' + slide.rectImg + ')'}"
          >
            <c-logo></c-logo>
          </div>
        </div>
        <div class="slide-content">
          <h1 class="slide-content-text">
            <p>{{ slide.headlineFirstLine }}</p>
            <p>{{ slide.headlineSecondLine }}</p>
          </h1>
          <a class="slide-content-cta">Call To Action</a>
        </div>
        <h2 class="slide-side-text">
          <span>{{ slide.sublineFirstLine }} /</span>
          <span>{{ slide.sublineSecondLine }}</span>
        </h2>
        <div class="slide-custom" v-if="slide.content">
          <c-twitter v-if="slide.content === 'twitter'"></c-twitter>
          <c-youtube v-if="slide.content === 'youtube'"></c-youtube>
        </div>
      </div>
    </div>

    <div class="controls-container">
      <button
        class="controls-button"
        v-for="(slide, index) in slides"
        :key="`controls-${index}`"
        v-bind:class="{ active: index === currentSlide }"
        v-on:click="updateSlide(index)"
      >{{ slide.headlineFirstLine }} {{ slide.headlineSecondLine }}</button>
    </div>

    <div class="pagination-container">
      <span
        class="pagination-item"
        v-for="(slide, index) in slides"
        :key="`pagination-${index}`"
        v-bind:class="{ active: index === currentSlide }"
        v-on:click="updateSlide(index)"
      ></span>
    </div>
  </div>
</template>

<script>
import Twitter from './../components/Twitter.vue';
import Youtube from './../components/Youtube.vue';
import Logo from './../components/Logo.vue';

export default {
  name: 'Home',
  components: {
    'c-twitter': Twitter,
    'c-youtube': Youtube,
    'c-logo': Logo,
  },
  data: function() {
      return {
        currentSlide: 0,
        isLoopUp: true,
        isPreviousSlide: false,
        isFirstLoad: true,
        slides: [
        {
            headlineFirstLine: "C0d1ng",
            headlineSecondLine: "Th3 St4rs",
            sublineFirstLine: "Lead by passion",
            sublineSecondLine: "Zenika",
            bgImg: "./img/sw2.png",
            rectImg: "./img/sw2.png",
        },
        {
            headlineFirstLine: "Zenika",
            headlineSecondLine: "Twitter",
            sublineFirstLine: "Il n'y a rien de neuf sous",
            sublineSecondLine: "le soleil",
            bgImg: "./img/sw4.jpg",
            rectImg: "./img/sw4.jpg",
            content: "twitter",
        },
        {
            headlineFirstLine: "Contest",
            headlineSecondLine: "Zenika",
            sublineFirstLine: "Il n'y a rien de neuf sous",
            sublineSecondLine: "le soleil",
            bgImg: "./img/sw3.jpg",
            rectImg: "./img/sw3-1.jpg",
        },
        {
            headlineFirstLine: "Zenika",
            headlineSecondLine: "Speakers",
            sublineFirstLine: "Aurelien Loyer",
            sublineSecondLine: "Anna Filina",
            bgImg: "./img/sw1.jpg",
            rectImg: "./img/sw1.jpg",
        },
        {
            headlineFirstLine: "zLife",
            headlineSecondLine: "",
            sublineFirstLine: "Enter in the",
            sublineSecondLine: "zLife",
            bgImg: "./img/sw6.jpg",
            rectImg: "./img/sw6.jpg",
            content: "youtube",
        },
      ]
    };
  },
  mounted: function () {
    var productRotatorSlide = document.getElementById("home");
    var startX = 0;
    var endX = 0;

    productRotatorSlide.addEventListener("touchstart", (event) => startX = event.touches[0].pageX);

    productRotatorSlide.addEventListener("touchmove", (event) => endX = event.touches[0].pageX);

    productRotatorSlide.addEventListener("touchend", () => {
        var threshold = startX - endX;

        if (threshold < 150 && 0 < this.currentSlide) {
            this.currentSlide--;
        }
        if (threshold > -150 && this.currentSlide < this.slides.length - 1) {
          this.currentSlide++;
        }
    });

    setInterval(() => {
      this.currentSlide++;
      if(this.currentSlide === this.slides.length) {
        this.currentSlide = 0;
      }
    },20000)

    // this.currentSlide = 4;
    
  },
  methods: {
      updateSlide(index) {
          index < this.currentSlide ? this.isPreviousSlide = true : this.isPreviousSlide = false;
          this.currentSlide = index;
          this.isFirstLoad = false;
      }
  }
}
</script>

<style lang="scss">
html,
body {
  box-sizing: border-box;
  margin: 0px;
  padding: 0px;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

@mixin media($breakpoint) {
  @media (max-width: $breakpoint) {
    @content;
  }
}

@mixin media-min($breakpoint) {
  @media (min-width: $breakpoint) {
    @content;
  }
}

@mixin media-height($breakpoint) {
  @media (max-height: $breakpoint) {
    @content;
  }
}

// ------------- VARIABLES ------------- //
$whitespace-height: 5px;
$left-offset: 13vw;
$rect-width: 48vh;
$rect-height: 62vh;
$rect-border-width: 5vh;
$control-btn-padding: 1.6rem;
$control-active-btn-offset: 0.3rem;
$left-offset-small: 9vw;
$rect-height-small: 20vw;
$rect-width-small: 16vw;
$rect-border-width-small: 5vh;
// ------------- GENERAL ------------- //
%callout {
  font-family: "Montserrat";
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 0.12rem;
  font-size: 0.7rem;
  line-height: 1;
}

[v-cloak] {
  opacity: 0;
}

body {
  cursor: default;
  ::selection {
    background-color: rgba(46, 49, 52, 0.7);
    color: #f5f5f1;
  }
  ::-moz-selection {
    background-color: rgba(46, 49, 52, 0.7);
    color: #f5f5f1;
  }
}

.wrapper {
  height: calc(100vh - #{$whitespace-height});
  min-height: 36rem;
  position: relative;
  @include media(630px) {
    height: 100vh;
    min-height: 0;
  }
}

// ------------- SLIDES ------------- //
.slide {
  &-wrapper {
    background-size: cover;
    height: 100%;
    background-position: center center;
    position: absolute;
    width: 100%;
    background-blend-mode: darken;
    &:nth-child(1) {
      background-color: rgba(115, 129, 153, 0.4);
      &:before {
        background-color: rgba(115, 129, 153, 0.25);
      }
      .slide-content-text {
        text-shadow: 2px 5px 45px rgba(85, 96, 113, 0.25);
      }
    }
    &:nth-child(2) {
      background-color: rgba(144, 171, 184, 0.7);
      &:before {
        background-color: rgba(144, 171, 184, 0.3);
      }
      .slide-content-text {
        text-shadow: 2px 5px 45px rgba(121, 142, 152, 0.2);
      }
    }
    &:nth-child(3) {
      background-color: rgba(86, 125, 156, 0.5);
      &:before {
        background-color: rgba(86, 125, 156, 0.2);
      }
      .slide-content-text {
        text-shadow: 2px 5px 55px rgba(57, 83, 103, 0.4);
      }
    }
    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1;
      left: 0;
    }
  }
  &-inner {
    position: relative;
    z-index: 2;
    height: 100%;
    overflow: hidden;
  }
  &-bg-text {
    font-family: "Playfair Display";
    color: #000;
    font-size: 42vh;
    line-height: 0.8;
    opacity: 0.05;
    font-weight: 900;
    margin-top: -4rem;
    position: absolute;
    top: 50%;
    left: 5vw;
    transform: translateY(-50%);
    > p:last-child {
      padding-left: 4rem;
    }
  }
  &-content {
    color: #fff;
    margin-top: 5rem;
    position: absolute;
    top: 60%;
    left: calc(#{$left-offset} + (0.2) * #{$rect-width});
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    @include media(1000px) {
      left: calc(#{$left-offset} + 1rem);
    }
    @include media-height(730px) {
      top: 30%;
      transform: translateY(-30%);
      left: calc(#{$left-offset-small} + (0.7) * #{$rect-width-small});
    }
    &-text {
      font-family: "Playfair Display";
      font-size: 7rem;
      letter-spacing: 0.2rem;
      line-height: 0.87;
      font-weight: 700;
      will-change: auto;
      @include media-height(790px) {
        font-size: 7rem;
      }
      @include media(1150px) {
        font-size: 7rem;
      }
      @include media(840px) {
        font-size: 5.5rem;
      }
      @include media(630px) {
        margin-bottom: 5.5rem;
      }
      @include media(500px) {
        font-size: 3.5rem;
      }
      > p:last-child {
        padding-left: 3rem;
      }
    }
    &-cta {
      @extend %callout;
      cursor: pointer;
      align-self: flex-start;
      margin-top: 4.5rem;
      margin-left: calc((0.3) * 48vh + 4.5rem);
      padding: 0.9rem 2.2rem;
      border-left: 1px solid #fff;
      border-right: 1px solid #fff;
      transition: 0.18s ease-in-out;
      font-weight: 700;
      @include media(1000px) {
        background-color: rgba(255, 255, 255, 0.3);
        padding-top: 1.2rem;
        padding-bottom: 1.2rem;
      }
      @include media(630px) {
        display: none;
      }
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
  }
  &-rect {
    height: $rect-height;
    width: $rect-width;
    border-image-slice: 10%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: $left-offset;
    border-width: $rect-border-width;
    border-style: solid;
    box-shadow: 2px 2px 90px 30px rgba(41, 50, 61, 0.22);
    will-change: auto;
    @include media-height(790px) {
      left: $left-offset-small;
      height: $rect-height-small;
      width: $rect-width-small;
      border-width: $rect-border-width-small;
    }
    @include media-height(730px) {
      top: 30%;
      transform: translateY(-30%);
    }
    &-filter {
      filter: brightness(110%) contrast(110%) saturate(110%);
    }
  }
  &-side-text {
    @extend %callout;
    position: absolute;
    left: calc(#{$left-offset} - 3rem);
    writing-mode: vertical-rl;
    top: calc((50% - (#{$rect-height} / 2)) + (#{$rect-border-width} / 2));
    @include media-height(790px) {
      left: calc(#{$left-offset-small} - 3rem);
      top: calc(
        (50% - (#{$rect-height-small} / 2)) + (#{$rect-border-width-small} / 2)
      );
    }
    @include media-height(730px) {
      top: calc(
        (40% - (#{$rect-height-small} / 2)) + (#{$rect-border-width-small} / 2)
      );
    }
    > span:first-child {
      font-weight: 700;
    }
    &:after {
      content: "";
      width: 1px;
      background-color: #fff;
      height: 40px;
      display: block;
      position: absolute;
      top: calc(100% + 25px);
      left: 50%;
      transform: translateX(-50%);
    }
  }
}

// ------------- CONTROLS ------------- //
.controls {
  &-container {
    position: absolute;
    z-index: 200;
    display: flex;
    bottom: 0;
    right: 0;
    align-items: flex-end;
    @include media(630px) {
      display: none;
    }
  }
  &-button {
    @extend %callout;
    cursor: pointer;
    background-color: rgba(208, 206, 204, 0.32);
    border: 0;
    padding: $control-btn-padding 2.2rem;
    flex-basis: 0;
    flex-grow: 1;
    min-width: 15rem;
    transition: 0.25s ease-in-out;
    outline: 0;
    @include media(730px) {
      padding: 1.2rem 1.4rem;
      min-width: 13rem;
    }
    &:not(.active) {
      &:hover {
        color: #000;
        background-color: #fff;
      }
    }
    &.active {
      cursor: default;
      font-weight: 700;
      background-color: #3b3e45;
      padding-top: $control-btn-padding + $control-active-btn-offset;
      padding-bottom: $control-btn-padding + $control-active-btn-offset;
      margin-bottom: -$control-active-btn-offset;
      position: relative;
      @include media(730px) {
        padding-top: 1.4rem;
        padding-bottom: 1.4rem;
        margin-bottom: -0.15rem;
      }
      &:after {
        content: "";
        background-color: #e3e3e3;
        height: 5px;
        width: calc(100% - 8px);
        position: absolute;
        top: 100%;
        left: 4px;
      }
    }
    &:not(.active) + & {
      border-left: 1px solid rgba(255, 255, 255, 0.2);
    }
  }
}

// ------------- PAGINATION ------------- //
.pagination {
  &-container {
    position: absolute;
    z-index: 200;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    @include media(920px) {
      display: none;
    }
  }
  &-item {
    width: 30px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.6);
    transition: 0.18s ease-in-out;
    & + & {
      margin-top: 1rem;
    }
    &.active {
      background-color: #fff;
      position: relative;
      transform: translateX(-0.6rem);
      width: 35px;
      &:after {
        content: "";
        height: 4px;
        width: 2px;
        border-radius: 35%;
        background-color: #fff;
        display: inline-block;
        position: absolute;
        right: 0;
        top: 50%;
        transform: translateX(0.6rem) translateY(-50%);
      }
    }
    &:not(.active) {
      cursor: pointer;
      &:hover {
        background-color: #fff;
        width: 35px;
      }
    }
  }
}

// ------------- ANIMATION EFFECT ------------- //
$slide-swipe: 0.9s;
$text-cut-up: 0.5s;
@keyframes slideLeft {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}

@keyframes slideRight {
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
}

@keyframes cutTextUp {
  from {
    clip-path: inset(0 0 -10% 0);
  }
  to {
    clip-path: inset(0 0 100% 0);
  }
}

@keyframes cutTextDown {
  from {
    clip-path: inset(100% 0 0 0);
  }
  to {
    clip-path: inset(-10% 0 -20% 0);
    opacity: 1;
  }
}

@keyframes cutTextDownFromTop {
  from {
    clip-path: inset(0 0 100% 0);
  }
  to {
    clip-path: inset(0 0 -30% 0);
    opacity: 1;
  }
}

@keyframes rectMovement {
  0% {
    transform: translateX(0) rotate(0) translateY(-50%);
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(calc(-#{$rect-width} + -#{$left-offset}))
      rotate(12deg) translateY(-50%);
    opacity: 0;
  }
}

@include media-height(730px) {
  @keyframes rectMovement {
    0% {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translateX(calc(-#{$rect-width} + -#{$left-offset}))
        rotate(12deg) translateY(-30%);
      opacity: 0;
    }
  }
}

@keyframes rectMovementFromRight {
  0% {
    transform: translateX(calc(#{$rect-width})) rotate(12deg) translateY(-50%);
    opacity: 0;
  }
  60% {
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(0) translateY(-50%);
    opacity: 1;
    @include media-height(730px) {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
  }
}

@include media-height(730px) {
  @keyframes rectMovementFromRight {
    0% {
      transform: translateX(calc(#{$rect-width})) rotate(12deg) translateY(-30%);
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      transform: translateX(0) rotate(0) translateY(-30%);
      opacity: 1;
    }
  }
}

@keyframes rectMovementRight {
  0% {
    transform: translateX(calc(-#{$rect-width} + -#{$left-offset}))
      rotate(12deg) translateY(-50%);
  }
  40% {
    opacity: 1;
  }
  100% {
    transform: translateX(0) rotate(0) translateY(-50%);
    opacity: 1;
    @include media-height(730px) {
      transform: translateX(0) rotate(0) translateY(-30%);
    }
  }
}

@include media-height(730px) {
  @keyframes rectMovementRight {
    0% {
      transform: translateX(calc(-#{$rect-width} + -#{$left-offset}))
        rotate(12deg) translateY(-30%);
    }
    40% {
      opacity: 1;
    }
    100% {
      transform: translateX(0) rotate(0) translateY(-30%);
      opacity: 1;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.slide-wrapper {
  opacity: 0;
  transition-delay: $slide-swipe + $text-cut-up;
  transition-duration: 0s;
  transition-property: opacity;
  will-change: opacity, transform;
  &:not(.active) {
    animation-delay: $text-cut-up;
    animation-name: slideLeft;
    animation-duration: $slide-swipe;
    animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
    pointer-events: none;
    .slide-content-text > p,
    .slide-side-text {
      animation-name: cutTextUp;
      animation-duration: $text-cut-up;
      animation-timing-function: ease-out;
    }
    .slide-rect {
      animation-name: rectMovement;
      animation-duration: $text-cut-up;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
  }
  &.active {
    transition-delay: 0s;
    opacity: 1;
    .slide-content-text > p {
      opacity: 0;
      animation-delay: $text-cut-up + 0.3s;
      animation-name: cutTextDown;
      animation-duration: $text-cut-up;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
    }
    .slide-rect {
      opacity: 0;
      animation-name: rectMovementFromRight;
      animation-duration: $text-cut-up - 0.05s;
      animation-timing-function: ease;
      animation-fill-mode: forwards;
      animation-delay: $slide-swipe;
    }
  }
  .is-previous & {
    &:not(.active) {
      animation: none;
      .slide-rect {
        animation: none;
      }
    }
    &.active {
      transform: translateX(-100%);
      animation-fill-mode: forwards;
      animation-delay: $text-cut-up;
      animation-name: slideRight;
      animation-duration: $slide-swipe - 0.1s;
      animation-timing-function: cubic-bezier(0.18, 0.54, 0.52, 0.93);
      .slide-rect {
        opacity: 0;
        animation-name: rectMovementRight;
        animation-duration: $text-cut-up;
        animation-timing-function: ease-out;
        animation-fill-mode: forwards;
        animation-delay: $slide-swipe;
      }
    }
  }
}

.first-load {
  .slide-wrapper.active .slide-side-text,
  .slide-wrapper.active .slide-content-cta,
  .slide-wrapper.active .slide-rect,
  .controls-container {
    opacity: 0;
    animation-name: fadeIn;
    animation-delay: 0.3s;
    animation-duration: 0.3s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
  }
  .slide-wrapper.active .slide-content-text > p {
    animation-name: fadeIn;
    animation-delay: $text-cut-up;
    animation-duration: $text-cut-up + 0.2s;
  }
}
</style>
