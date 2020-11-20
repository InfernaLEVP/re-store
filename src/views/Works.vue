<template>
  <div class="participants fp-slider" id="works">
    <!-- Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        @swiper="setControlledSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="slide in slides" :key="slide.name">
          <div class="participants__item">
            <img
              :src="slide.image_link"
              :alt="slide.Author"
              class="participants__image"
            />
            <div class="participants__bio-wrapper">
              <h2 class="participants__name">{{slide.Title}}</h2>
              <h3 class="participants__location">{{slide.Author}}</h3>
              <div class="participants__body" v-html="parseContent(slide.Description)">
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
// import { computed } from 'vue';
// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "Works",
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      controlledSwiper: null,
      slides: [],
      // dots: []
    };
  },
  mounted(){
    fetch('/data/works.json')
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
            formattedText += '<p>' + item + '</p>';
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
#works .participants__body p{
  margin-bottom: 10px;
}
</style>