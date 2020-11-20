<template>
  <section class="video">
    <video autoplay playsinline muted loop id="myVideo" class="bg-video-main">
      <source src="vids/bg.mp4" type="video/mp4" />
    </video>
  </section>
  <Header />
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component" />
      </transition>
    </router-view>
  <Footer />
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import Footer from "@/components/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  }
}
</script>

<style>
@font-face {
  font-family: "GoshaSans";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url("../public/fonts/GoshaSans-Regular.woff2") format("woff2"),
    url("../public/fonts/GoshaSans-Regular.woff") format("woff");
}

@font-face {
  font-family: "GoshaSans";
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url("../public/fonts/GoshaSans-Light.woff2") format("woff2"),
    url("../public/fonts/GoshaSans-Light.woff") format("woff");
}

@font-face {
  font-family: "GoshaSans";
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url("../public/fonts/GoshaSans-Medium.woff2") format("woff2"),
    url("../public/fonts/GoshaSans-Medium.woff") format("woff");
}

* {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  box-sizing: border-box;
}
img{
  max-width: 100%;
}

:root {
  --primary-white: #e3e3e3; /* accessible everywhere */
  --primary-magenta: rgba(229, 46, 128, .75);
  --primary-black: #13100d;

}

html {
  scroll-behavior: smooth; /* свойство scroll-behavior не наследуется, применяется к прокручиваемым блокам */
}
body {
  box-sizing: border-box;
  background-color: var(--primary-black);
  font-family: "GoshaSans", "Haettenschweiler", "Arial Narrow Bold", sans-serif;
  font-weight: 300;
  /* padding-top: 120px; */
  margin: 0;
}
@media (max-width: 992px){
  body{
    /* padding-top: 50px; */
  }
}
h1{
  color: white;
}
.c-container{
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
}

.video {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: -100;
}

.bg-video-main {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  object-fit: cover;
}

/* @media (min-aspect-ratio: 16/9) {
  .bg-video-main {
    height: 300%;
    top: -100%;
  }
}

@media (max-aspect-ratio: 16/9) {
  .bg-video-main {
    width: 300%;
    left: -100%;
  }
} */

.page {
  display: block;
  position: relative;
  color: var(--primary-white);
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
}

body.lock{
  overflow: hidden;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.45s ease;
}

.fade-enter-from,
.fade-leave-active {
  opacity: 0;
}

/* Slider reStyle */
.swiper-button-next, .swiper-button-prev{
  width: 50px!important;
  height: 50px!important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: containt;
}
@media(max-width: 992px){
  .swiper-button-next, .swiper-button-prev{
    display: none!important;
  }
  .mobile-controls .swiper-button-next, .mobile-controls .swiper-button-prev{
    display: flex!important;
    transform: translateY(-7%);
  }
}
.swiper-button-next{
  
  background-image: url(../public/images/arr-right.svg);
}
.swiper-button-next:after{
  content: ''!important;
}
.swiper-button-prev{
  background-image: url(../public/images/arr-left.svg);
}
.swiper-button-prev:after{
  content: ''!important;
}

/* Paginator */
.paginator-item{
  background-color: rgba(255, 255, 255, .4);
  border-radius: 50%;
  width: 10px;
  height: 10px;
  margin: 0 9px;
  transition: all .3s;
}
.active-paginator-item{
  background-color: var(--primary-magenta);
}
.mobile-paginator{
  display: flex;
  position: absolute;
  bottom: calc(8% + 60px);
  display: flex;
  width: 100%;
  justify-content: center;
}
@media(max-width: 992px){
  .paginator-item{
    margin: 0 5px;
  }
  .mobile-paginator{
    display: flex;
    bottom: calc(2% + 60px);
  }
}
#true .header__logo-mobDigital-wrap{
  display: none;
}

/* Swiper */
.swiper-wrapper{
  display: flex;
  align-items: center;
}
.participants__image{
  max-height: 70vh;
}

/*  */
/* Participants */
/*  */
img{
  max-width: 100%;
}
.fp-slider{
  padding: 4%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
@media(max-width: 992px){
  .fp-slider{
    padding-top: 85px;
    position: relative;
    padding-bottom: 95px;
    /* flex-direction: column; */
  }
}

/*  */
.participants__item{
  display: flex;
  align-items: center;
  color: white;
  padding: 0 calc(80px + 4%);
}
@media(max-width: 992px){
  .participants__item{
    flex-direction: column;
    padding: 0px;
    max-height: calc(100vh - 180px);
    overflow: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;   
  }
  .participants__item::-webkit-scrollbar {
    display: none;
  }
}

/*  */
.participants__image{
  width: 35%;
}
@media(max-width: 992px){
  .participants__image{
    width: 100%;
    height: auto;
    max-height: 250px;
    object-fit: cover;
  }
}

/*  */
.participants__bio-wrapper{
  width: 65%;
  padding-left: 40px;
}
@media(max-width: 992px){
  .participants__bio-wrapper{
    width: 100%;
    padding-left: 0px;
  }
}

/*  */
.participants__name{
  font-size: 1.3em;
  font-weight: 300;
  margin-bottom: 0px;
  text-transform: uppercase;
}
.participants__name > span{
  text-transform: none;
}
@media(max-width: 992px){
  
}

/*  */
.participants__location{
  margin-top: 0px;

  font-weight: 300;
  font-size: 16px;
  line-height: 146%;
}
@media(max-width: 992px){
  
}

/*  */
.participants__body{
  margin-top: 10px;
}
.participants__body p {
  margin: 0;
}
.participants__body span {
  font-weight: 400;
  margin: 1em 0 0 0;
  display: block;
}
@media(max-width: 992px){
  
}

/*  */
.participants__social-link{
}

/*  */
.participants__button{
    position: absolute;
    bottom: 4%;
    z-index: 999;
}
@media(max-width: 992px){
  .participants__button{
    position: absolute;
    
    bottom: 2%;
  }
}

/*  */
.participants__button a {
  color: var(--primary-white);
  text-decoration: none;
  display: block;
  border-radius: 8px;
  padding: 15px 80px;
  text-transform: uppercase;
  transition: opacity .2s;
  font-size: 18px;
  font-weight: 500;
  background-color: var(--primary-magenta);
  transition: opacity 0.5s;
}
.participants__button a:hover{
  opacity: 0.7;
}

@media(max-width: 992px){
  .participants__button a {
    font-size: 18px;
    padding: 15px 60px;
  }
}

/*  */
.mobile-controls{
  position: absolute;
  bottom: 2%;
  display: none;
  width: 100%;
  height: 50px;
}
@media(max-width: 992px){
  .mobile-controls{
    display: flex;
  }
}
/*  */
/* ./Participants */
/*  */


/* Roots */
:root{
  --colour1: #2B3A42;
  --colour2: #3F5765;
  --colour3: #BDD4DE;
  --colour4: #EFEFEF;
  --colour5: #FF5035;
  --buttonFont: Helvetica;
  --inputFont: Helvetica;
}
.link-from-gsheets{
  color: inherit;
}
</style>
