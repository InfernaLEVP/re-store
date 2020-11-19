<template>
  <div class="home">

    <main class="page c-container">
      
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

          <!-- mobile front page logos -->
          <div class="main-page__logos-mobile">
            <img
              src="../assets/restore_logo.svg"
              alt="Логотип reStore"
            />
            <img
              src="../assets/vinzavod_logo.svg"
              alt="Логотип Винзавод"
            />
          </div>
          <!-- ./mobile front page logos -->

        </div>

        <a href="#player" class="main-page__gallery-btn">Галерея</a>

      </section>

    </main>
    
    <Player />

  </div>
</template>

<script>
// @ is an alias to /src
import Player from "@/components/Player.vue";

export default {
  name: "Home",
  components: {
    Player,
  },
  mounted(){

    window.addEventListener('scroll',  () => {
      console.log(window.scrollY);
      if(window.scrollY > 190){
        document.querySelector('.main-page__gallery-btn').style.opacity = 0;
        document.querySelector('.footer').style.opacity = 0;
      }else{
        document.querySelector('.main-page__gallery-btn').style.opacity = 1;
        document.querySelector('.footer').style.opacity = 1;
      }
    }, false);
  }
};
</script>

<style scoped>
.main-page {
  position: relative;
  /* height: calc(100vh - 130px); */
  height: 100vh;
  display: grid;
  grid-template-rows: 93% 7%;
  justify-content: center;
  align-content: center;
}
@media(max-width: 992px){
  .home{
    /* padding-top: 45px; */
  }
  .main-page{
    /* height: auto; */
    height: 100vh;
  }
}
@media all and (max-width: 768px) {
  .main-page {
    grid-template-rows: 93% 7%;
    padding-top: 65px;
  }
}
@media(max-width: 550px){
  .main-page {
    grid-template-rows: 86% 14%;
  }
}
@media(max-width: 340px){
  .main-page {
    grid-template-rows: 86% 14%;
    padding-top: 25px;
  }
}

@media(max-width: 992px) and (orientation: landscape){
  .main-page {
    height: auto;
  }
  .main-page__gallery-btn{
    align-self: initial;
    margin-top: 25px;
  }
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
@media(max-width: 768px){
  .main-page__subtitle {
    font-size: 24px;
  }
}
@media(max-width: 350px){
  .main-page__subtitle {
    font-size: 18px;
  }
}
.main-page__logos-mobile{
  display: none;
  align-items: center;
  justify-content: center;
}
.main-page__logos-mobile img{
  max-width: 20%;
}
.main-page__logos-mobile img:first-child{
  margin-right: 4rem;
}
@media (max-width: 992px){
  .main-page__logos-mobile{
    display: flex;
  }
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
  .main-page__logo-wrapper {
    width: 92%;
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
