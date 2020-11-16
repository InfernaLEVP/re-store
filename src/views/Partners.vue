<template>
  <div class="partners fp-slider">
    <!-- Swiper -->
    <swiper
        :slides-per-view="1"
        :space-between="50"
        navigation
      >
        <swiper-slide>
          <div class="partners__item partner">

            <h2 class="partner__name">re:Store</h2>
            
            <div class="partner__body">
              <p>
                re:Store – самая большая сеть монобрендовых магазинов формата Apple Premium Reseller в Европе. Сейчас это более 86 розничных магазинов в крупнейших городах  России. В ассортименте представлена вся линейка продукции компании Apple, а также широкий выбор дополнительных устройств и аксессуаров.
              </p>
              <p>
                Уже 15 лет re:Store руководствуется главным принципом — максимально удовлетворять потребности своих клиентов. Желание максимально соответствовать требованиям клиентов и выстраивать долгосрочные отношения за счет уровня обслуживания принесло свои плоды. За прошедшие годы клиентами re:Store стали сотни тысяч людей и десятки тысяч компаний.
              </p>
            </div>

            <a href="#" class="participants__social-link"></a>

          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="partners__item partner">

            <h2 class="partner__name">re:Store</h2>
            
            <div class="partner__body">
              <p>
                re:Store – самая большая сеть монобрендовых магазинов формата Apple Premium Reseller в Европе. Сейчас это более 86 розничных магазинов в крупнейших городах  России. В ассортименте представлена вся линейка продукции компании Apple, а также широкий выбор дополнительных устройств и аксессуаров.
              </p>
              <p>
                Уже 15 лет re:Store руководствуется главным принципом — максимально удовлетворять потребности своих клиентов. Желание максимально соответствовать требованиям клиентов и выстраивать долгосрочные отношения за счет уровня обслуживания принесло свои плоды. За прошедшие годы клиентами re:Store стали сотни тысяч людей и десятки тысяч компаний.
              </p>
            </div>

            <a href="#" class="participants__social-link"></a>

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
  name: "Partners",
  components: {
    Swiper,
    SwiperSlide,
  },
  methods: {
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
    padding-bottom: 85px;
    position: relative;
  }
}

.partners{}

/*  */
.partners__item{}

/*  */
.partner{
  color: white;
  padding: 0 80px;
}

/*  */
.partner__name{}

/*  */
.partner__body{}

/*  */


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
  .swiper-button-prev, .swiper-button-next{
    display: none!important;
  }
}
</style>