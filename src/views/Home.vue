<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->

    <main class="page c-container">
      <!-- First page -->
      <section class="main-page">
        <div class="main-page__logo-wrapper">
          <img
            src="../assets/digital_earth_logo.svg"
            alt="Логотип Digital Earth"
            class="main-page__digital-earth-log"
          />

          <p class="main-page__subtitle">
            Добро пожаловать на&nbsp;платформу будущего Digital Earth. Испытайте
            новый уровень погружения в&nbsp;мир искусства и&nbsp;технологий.
          </p>
        </div>

        <a href="#gallery" class="main-page__gallery-btn">Галерея</a>
      </section>

      <!-- Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="slide">
            <p class="slider-about__text-paragraph">
              Платформа Digital Earth – это новый виртуальный формат музея
              современного искусства. Геймифицированная среда дает пользователю
              возможность опробовать уникальный маршрут для знакомства с
              произведениями в жанрах цифрового искусства.
            </p>
            <p class="slider-about__text-paragraph">
              Платформа Digital Earth – это новый виртуальный формат музея
              современного искусства. Геймифицированная среда дает пользователю
              возможность опробовать уникальный маршрут для знакомства с
              произведениями в жанрах цифрового искусства.
            </p>
            <p class="slider-about__text-paragraph">
              Платформа Digital Earth – это новый виртуальный формат музея
              современного искусства. Геймифицированная среда дает пользователю
              возможность опробовать уникальный маршрут для знакомства с
              произведениями в жанрах цифрового искусства.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide">
            <p class="slider-about__text-paragraph">
              Пространство музея представляет собой одновременно футуристическое
              и вневременное здание сферической формы, архитектура которого
              позволяет распределить концентрации энергонапряжений и ощутить
              гармонию с природой и космосом.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide">
            <p class="slider-about__text-paragraph">
              Платформа разработана для экспонирования 15 работ визуального
              искусства, победивших в конкурсе художников, организованного
              Фондом поддержки современного искусства и re:Store
            </p>
          </div>
        </swiper-slide>
      </swiper>
      <!-- ./Swiper -->

      <Player />

      <!-- Swiper -->
      <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide>
          <div class="participants__item">
            <img
              src="../assets/part-zaur.jpg"
              alt="Заур Дадаев"
              class="participants__image"
            />
            <div class="participants__text-wrapper">
              <h2 class="participants__header">Заурбек Цагаев</h2>
              <h3 class="participants__subtitle">Грозный, Россия</h3>
              <p class="participants__body">
                Фотограф Заурбек Цугаев Родился в Грозном. По образованию
                преподаватель дошкольной педагогики и психологии. В 2012 году
                основал первый чеченский фото клуб LAMBERD. В период 2012-2016
                организовал воркшопы с участием международно известных
                фотографов, среди которых: Стенли Грин,Ольга Краветс, Антон
                Ланге, Александр Гронский.
              </p>
              <p class="participants__body">
                С 2018 г. член творческого союза художников России. Является
                победителем всероссийского ежегодного проекта «Best of Russia -
                2017» и грантовой программы музея «Гараж» для художников в сфере
                актуального искусства (2019/2020).Is the deconstruction method
                promising in every case and where lies its boundary?
              </p>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="participants__item">
            <img src="../assets/part-zaur.jpg" alt="Заур Дадаев" />
            <div class="participants__text-wrapper">
              <h2 class="participants__header">Заурбек Цагаев</h2>
              <h3 class="participants__subtitle">Грозный, Россия</h3>
              <p class="participants__body">
                Фотограф Заурбек Цугаев Родился в Грозном. По образованию
                преподаватель дошкольной педагогики и психологии. В 2012 году
                основал первый чеченский фото клуб LAMBERD. В период 2012-2016
                организовал воркшопы с участием международно известных
                фотографов, среди которых: Стенли Грин,Ольга Краветс, Антон
                Ланге, Александр Гронский.
              </p>
              <p class="participants__body">
                С 2018 г. член творческого союза художников России. Является
                победителем всероссийского ежегодного проекта «Best of Russia -
                2017» и грантовой программы музея «Гараж» для художников в сфере
                актуального искусства (2019/2020).Is the deconstruction method
                promising in every case and where lies its boundary?
              </p>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="participants__item">
            <img src="../assets/part-zaur.jpg" alt="Заур Дадаев" />
            <div class="participants__text-wrapper">
              <h2 class="participants__header">Заурбек Цагаев</h2>
              <h3 class="participants__subtitle">Грозный, Россия</h3>
              <p class="participants__body">
                Фотограф Заурбек Цугаев Родился в Грозном. По образованию
                преподаватель дошкольной педагогики и психологии. В 2012 году
                основал первый чеченский фото клуб LAMBERD. В период 2012-2016
                организовал воркшопы с участием международно известных
                фотографов, среди которых: Стенли Грин,Ольга Краветс, Антон
                Ланге, Александр Гронский.
              </p>
              <p class="participants__body">
                С 2018 г. член творческого союза художников России. Является
                победителем всероссийского ежегодного проекта «Best of Russia -
                2017» и грантовой программы музея «Гараж» для художников в сфере
                актуального искусства (2019/2020).Is the deconstruction method
                promising in every case and where lies its boundary?
              </p>
              <a href="#" class="participants__social-link"></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- ./Swiper -->
    </main>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Footer from "@/components/Footer.vue";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import Player from "@/components/Player.vue";

// install Swiper components
SwiperCore.use([Navigation, Pagination]);

export default {
  name: "Home",
  components: {
    Footer,
    Swiper,
    SwiperSlide,
    Player,
  },
  methods: {
    onSwiper(swiper) {
      console.log(swiper);
    },
    onSlideChange() {
      console.log("slide change");
    },
  },
};
</script>

<style scoped>
.main-page {
  position: relative;
  height: calc(100vh - 130px);
  display: grid;
  grid-template-rows: 80% 20%;
  justify-content: center;
  align-content: center;
}

.main-page__logo-wrapper {
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 50%;
}

.main-page__digital-earth-log {
  width: 80%;
  height: auto;
  margin: auto;
}
.main-page__subtitle {
  /* width: 50%; */
  text-align: center;
  font-weight: 300;
  font-size: 26px;
  line-height: 1.2;
  margin-top: 60px;
  /* margin-bottom: 70px; */
}
.main-page__gallery-btn {
  justify-self: center;
  align-self: end;
  min-width: 250px;
  text-align: center;
  margin-bottom: 35px;
  padding: 15px 50px;
  border-radius: 7px;
  outline: none;
  border: none;
  text-transform: uppercase;
  background-color: var(--primary-magenta);
  color: white;
  text-decoration: none;
  transition: opacity 0.5s;
}

.main-page__gallery-btn:hover {
  opacity: 0.7;
}

@media all and (max-width: 768px) {
  .main-page {
    height: calc(100vh - 33px);
    grid-template-rows: 80% 20%;
  }
  .main-page__logo-wrapper {
    width: 92%;
  }
  .main-page__subtitle {
    font-size: 24px;
  }
  .main-page__gallery-btn {
    align-self: start;
  }
}

/* Slider Customization */
.slide {
  padding: 0 4rem;
}
.swiper-container {
  padding-bottom: 35px;
}
.swiper-pagination-bullet {
  background: white;
}
.participants__item {
  padding: 0 5rem;
}
.participants__item img {
  display: block;
  margin: 0 auto;
}
</style>
