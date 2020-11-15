<template>
  <section class="video">
    <video  muted loop id="myVideo" class="bg-video-main">
      <source src="vids/bg.mp4" type="video/mp4" />
    </video>
  </section>
  <Header />
  <router-view/>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
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
  padding-top: 120px;
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
</style>
