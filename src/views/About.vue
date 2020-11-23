<template>
  <div class="participants fp-slider" id="about">
   
   <!-- Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        @swiper="setControlledSwiper"
        @slideChange="onSlideChange"
        @init="initSwiper"
      >
        <swiper-slide v-for="slide in slides" :key="slide.Name">
          <div class="participants__item">
            <div class="participants__bio-wrapper">
              <h2 class="participants__name">{{slide.Title}}</h2>
              <div class="participants__body" v-html="parseContent(slide.Text)">

              </div>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
        
      </swiper>
    <!-- ./Swiper -->
       

    <div class="participants__button">
      <router-link to="/gallery">Галерея</router-link>
    </div>

    <div class="mobile-paginator">
      <div :class="['paginator-item ', index === 0 ? 'active-paginator-item' : '']" v-for="(dot, index) in dots" :key="dot.id"></div>
    </div>

    <div class="mobile-controls">
      <div class="swiper-button-next" @click="next"></div>
      <div class="swiper-button-prev" @click="prev"></div>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "About",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      controlledSwiper: null,
      slides: [],
    };
  },
  mounted(){
    fetch('/data/about.json')
      .then(response => response.json())
      .then(data => {
        this.slides = data;
        // console.log(data);
      });
  },
  methods: {
    onSlideChange(swiper) {
      const dots = document.querySelectorAll('.paginator-item');

      dots.forEach((item) => {
        item.classList.remove('active-paginator-item');
      });
      dots[swiper.realIndex].classList.add('active-paginator-item');
    },
    setControlledSwiper(swiper) {
      this.controlledSwiper = swiper;
    },
    initSwiper(swiper){
      for(let i = 0; i < swiper.slides.length; i++){
        this.dots.push({ id: i });
      }
    },
    next() {
      this.controlledSwiper.slideNext();
    },
    prev() {
      this.controlledSwiper.slidePrev();
    },
    parseContent(plainString){
      let formattedText = '';

        const rows = plainString.split(/\n/g);
        // console.log(rows);
        rows.forEach((item) => {
          if(item !== ''){
            formattedText += '<p>' + item.replace('<s>', '<span>').replace('</s>', '</span>') + '</p>';
          }
        });
      formattedText = formattedText.replace('<s>', '<span>');
      formattedText = formattedText.replace('</s>', '</span>');

      return formattedText;
    }
  },
  computed: {
    dots: function(){

      let result = [];
      for(let i = 0; i < this.slides.length; i++){
        result.push({ id: i });
      }
      return result;
      
    }
  }
};
</script>

<style scoped>
/*  */
#about .participants__bio-wrapper{
  margin: 0 auto;
  width: 75%;
  padding-left: 35px;
}
@media(max-width: 992px){
  #about .participants__bio-wrapper{
    width: 100%;
    padding-left: 0px;
  }
}


</style>