<template>
  <div class="participants fp-slider">
    <!-- Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="participants__item">
            <img
              src="../assets/background.jpg"
              alt="Заур Дадаев"
              class="participants__image"
            />
            <div class="participants__bio-wrapper">
              <h2 class="participants__name">Алексей Рябов</h2>
              <h3 class="participants__location">Москва, Россия <br> Художник, кандидат архитектуры</h3>
              <div class="participants__body">
                <p>
                  Окончил Московский архитектурный институт (МАРХИ). Выпускник «Свободных мастерских» при Московском музее современного искусства (ММОМА).
                </p>
                <strong>Персональные выставки</strong>
                <p>«…И васильки, и я, и тополя», галерея «Парк», Москва, 2020;</p>
                <strong>Групповые выставки</strong>
                <p>
                  «Человек общающийся»,ММОМА на Петровке, Москва, 2020; <br>
                  «Новый пейзаж/Без границ», музейно-выставочный комплекс ПКиО им. Л.Н.Толстого, Химки, 2020; <br>
                  «Сколько лет камню», художественная акция в деревне Глебово Истринского района Московской области, Глебово, 2020; <br>
                  «Нить», галерея «За школой», Москва, 2019.
                </p>
              </div>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="participants__item">
            <img
              src="../assets/part-zaur.jpg"
              alt="Заур Дадаев"
              class="participants__image"
            />
            <div class="participants__bio-wrapper">
              <h2 class="participants__name">Алексей Рябов</h2>
              <h3 class="participants__location">Москва, Россия <br> Художник, кандидат архитектуры</h3>
              <div class="participants__body">
                <p>
                  Окончил Московский архитектурный институт (МАРХИ). Выпускник «Свободных мастерских» при Московском музее современного искусства (ММОМА).
                </p>
                <strong>Персональные выставки</strong>
                <p>«…И васильки, и я, и тополя», галерея «Парк», Москва, 2020;</p>
                <strong>Групповые выставки</strong>
                <p>
                  «Человек общающийся»,ММОМА на Петровке, Москва, 2020; <br>
                  «Новый пейзаж/Без границ», музейно-выставочный комплекс ПКиО им. Л.Н.Толстого, Химки, 2020; <br>
                  «Сколько лет камню», художественная акция в деревне Глебово Истринского района Московской области, Глебово, 2020; <br>
                  «Нить», галерея «За школой», Москва, 2019.
                </p>
              </div>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="participants__item">
            <img
              src="../assets/part-zaur.jpg"
              alt="Заур Дадаев"
              class="participants__image"
            />
            <div class="participants__bio-wrapper">
              <h2 class="participants__name">Алексей Рябов</h2>
              <h3 class="participants__location">Москва, Россия <br> Художник, кандидат архитектуры</h3>
              <div class="participants__body">
                <p>
                  Окончил Московский архитектурный институт (МАРХИ). Выпускник «Свободных мастерских» при Московском музее современного искусства (ММОМА).
                </p>
                <strong>Персональные выставки</strong>
                <p>«…И васильки, и я, и тополя», галерея «Парк», Москва, 2020;</p>
                <strong>Групповые выставки</strong>
                <p>
                  «Человек общающийся»,ММОМА на Петровке, Москва, 2020; <br>
                  «Новый пейзаж/Без границ», музейно-выставочный комплекс ПКиО им. Л.Н.Толстого, Химки, 2020; <br>
                  «Сколько лет камню», художественная акция в деревне Глебово Истринского района Московской области, Глебово, 2020; <br>
                  «Нить», галерея «За школой», Москва, 2019.
                </p>
              </div>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- ./Swiper -->

    <div class="participants__button">
      <router-link to="#">Галерея</router-link>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "Kurators",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  }
};
</script>

<style scoped>
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
    flex-direction: column;
  }
}

/*  */
.participants__item{
  display: flex;
  align-items: center;
  color: white;
  padding: 0 80px;
}
@media(max-width: 992px){
  .participants__item{
    flex-direction: column;
  }
}

/*  */
.participants__image{
  width: 35%;
}
@media(max-width: 992px){
  .participants__image{
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
  margin-bottom: 0px;
}
@media(max-width: 992px){
  
}

/*  */
.participants__location{
  margin-top: 0px;
}
@media(max-width: 992px){
  
}

/*  */
.participants__body{
  margin-top: 40px;
}
@media(max-width: 992px){
  
}

/*  */
.participants__body strong{
}

/*  */
.participants__body p{
}

/*  */
.participants__social-link{
}

/*  */
.participants__button{
    border-radius: 8px;
    padding: 15px 80px;
    text-transform: uppercase;
    transition: opacity .2s;
    position: absolute;
    bottom: 4%;
    font-size: 18px;
    font-weight: 500;
    background-color: var(--primary-magenta);
}
@media(max-width: 992px){
  .participants__button{
    position: absolute;
    font-size: 18px;
    padding: 15px 60px;
  }
}

/*  */
.participants__button a {
  color: var(--primary-white);
  text-decoration: none;
}
@media(max-width: 992px){
  
}

/* Mobiles */
@media(max-width: 992px){

}
</style>