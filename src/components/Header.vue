<template>
  <header class="header c-container" :id="isFront">
    <div class="header-wrap">
      <div class="header__burger-btn-wrapper" @click="openCloseMenu">
        <div class="header__menu-burger">
          <span></span>
        </div>
        
      </div>
      <a href="/"  class="header__logo-vinzavod">
        <transition name="fade" mode="out-in">
          <img v-if="isFront"
            src="../assets/vinzavod-l.svg"
            alt="Логотип Винзавод"
          />
          <img v-else
            src="../assets/digitalearth-l.svg"
            alt="Логотип Digital Earth"
          />
        </transition>
      </a>
      
      <!--  -->
      <nav class="header__menu invisible">
        <ul class="header__menu-items">
          <li class="header__menu-item" v-for="item in menu" :key="item.link">
            <router-link :to="item.link" class="header__menu-link">{{
              item.name
            }}</router-link>
          </li>

          <li class="header__hide-on-desktop">
            <ul class="burger-menu__social-icons">
              <li class="burger-menu__social-icon-item">
                <a
                  href="https://www.facebook.com/restore.ru/"
                  target="_blank"
                  class="burger-menu__social-icons-link"
                  >fb</a
                >
              </li>
              <li class="burger-menu__social-icon-item">
                <a
                  href="https://vk.com/re_store"
                  target="_blank"
                  class="burger-menu__social-icons-link"
                  >vk</a
                >
              </li>
              <li class="burger-menu__social-icon-item">
                <a
                  href="https://www.instagram.com/restore_ru/"
                  target="_blank"
                  class="burger-menu__social-icons-link"
                  >ig</a
                >
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <img
        @click="routerCheck"
        src="../assets/restore_logo.svg"
        alt="Логотип reStore"
        class="header__logo-restore"
      />
    </div>
    
    <a href="#gallery" class="header__gallery-btn invisible">Галерея</a>
  </header>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      menu: [
        {
          link: "/about",
          name: "О проекте",
        },
        {
          link: "/participants",
          name: "Участники",
        },
        {
          link: "/works",
          name: "Работы",
        },
        {
          link: "/kurators",
          name: "Эксперты",
        },
        {
          link: "/partners",
          name: "Организаторы",
        },
      ],
      burgerMenuBtn: undefined,
      burgerMenu: undefined,
      bodyMain: undefined,
      galleryButton: undefined,
      headerWrap: undefined
    };
  },
  mounted() {
    this.headerWrap = document.querySelector('.header-wrap');
    this.burgerMenuBtn = document.querySelector(".header__menu-burger");
    this.burgerMenu = document.querySelector(".header__menu");
    this.bodyMain = document.body;
    this.burgerMenuWrapper = document.querySelector(".header__burger-btn-wrapper");
    this.galleryButton = document.querySelector(".header__gallery-btn") ;
    document.querySelector('.header__burger-btn-wrapper').click();
  },
  methods: {
    openCloseMenu() {
      this.burgerMenu.classList.toggle("invisible");
      this.burgerMenuBtn.classList.toggle("active");
      this.burgerMenuWrapper.classList.toggle("active-burger");
      this.bodyMain.classList.toggle("lock");
      this.galleryButton.classList.toggle("invisible");
      this.headerWrap.classList.toggle("opened-header-wrap");
      
    },
    routerCheck() {
      console.log(this.$router.currentRoute.value.name)
    }
  },
  computed: {
    isFront(){
      return this.$router.currentRoute.value.name == 'Home' ? true : false;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.c-container{
  padding: 0 4%;
  max-width: 1920px;
  width: 100%;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 10px;
  font-family: "GoshaSans", "Haettenschweiler", "Arial Narrow Bold", sans-serif;
  align-items: flex-start;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 50;
  padding-top: 35px;
}
@media (max-width: 960px) and (orientation: landscape){
  .lock .header{
    max-height: 100vh;
  }
}
.header-wrap{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
}
.header__gallery-btn {
  display: none;
}

.router-link-active{
  border: none!important;
  background-color: var(--primary-magenta)!important;
  color: white!important;
}
.header__logo-vinzavod {
  width: 10%;
  margin-right: 30px;
}
.header__menu {
  width: 100%;
  /* max-width: 1000px; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 60%;
}
@media (max-width: 960px){
  .header__menu {
    max-width: 100%;
  }
}
.header__menu-items {
  width: 100%;
  display: flex;
  flex-direction: row;
  /* justify-content: space-around; */
  align-content: stretch;
  align-items: stretch;
  margin: 0;
  padding: 0;
  list-style: none;
  /* flex-wrap: wrap; */
}
.header__menu-item {
  width: 100%;
  margin: 0px 5px 10px 5px;
}

.header__menu-link {
  text-decoration: none;
  color: var(--primary-white);

  width: 100%;

  display: block;
  list-style: none;
  border: solid 1px var(--primary-white);
  border-radius: 8px;
  padding: 10px 20px;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  cursor: pointer;
  transition: opacity 0.5s;
  text-align: center;
}

.header__menu-link:hover {
  border: solid 1px #e52e80;
  opacity: 70%;
}

.header__menu-link:active {
  border: solid 1px #e52e80;
  background-color: #e52e80;
  opacity: 70%;
}

.header__logo-restore {
  width: 100px;
  margin-left: 30px;
}

.burger-menu__social-icon-item,
.header__hide-on-desktop {
  display: none;
}

@media all and (max-width: 960px) {
  .header__logo-restore,
  .header__logo-vinzavod {
    display: none;
  }
  
  .header-wrap{
    display: flex;
    flex-direction: row;
    position: relative;
  }
  #true .header-wrap:after{
    display: none;
  }
  .opened-header-wrap:after{
    opacity: 0;
  }
  .header-wrap:after{
    position: absolute;
    content: '';
    display: block;
    left: 90px;
    top: 0;
    background-image: url(../assets/digital_earth_logo_mobile.svg);
    width: 70%;
    height: 55px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    transition: opacity .2s;
  }
  .header {
    display: flex;
    overflow-y: auto;
    /* overflow: visible; */
    flex-direction: column;
    justify-content: space-between;
    padding: 12px;
  }
  .lock .header{
    min-height: 100vh;
  }
  .header-wrap{
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .header__hide-on-desktop {
    display: block;
  }

  .header__menu {
    display: block;
    transition: 0.3s;
    width: 85%;
    top: 0;
    height: 100%;
    overflow: auto;
    margin-left: 0;
  }
  .header__menu::before {
    content: "";
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    transition: opacity 0.2s;
    background-color: rgba(19, 16, 13, 0.85);
  }
  .header__menu-items {
    z-index: 60;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow: auto;
  }

  .header__menu-item {
    margin: 0;
  }
  .header__menu-link {
    background-color: rgba(246, 246, 246, 0.7);
    border-radius: 8px;
    padding: 20px 20px;
    width: 85%;
    font-size: 14px;
    color: #444443;
    margin: 0;
    margin-bottom: 10px;
    text-align: left;
    border: 0;
  }

  .header__menu-link:hover {
    border: 0;
    opacity: 1;
  }

  .header__burger-btn-wrapper {
    width: 50px;
    height: 50px;
    min-height: 50px;
    border: 1px solid white;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 12px;
  }

  .header__burger-btn-wrapper.active-burger {
    border: none;
    background-color: var(--primary-magenta);
    /* width: 200px; */
  }

  .header__menu-burger {
    display: block;
    position: relative;
    width: 30px;
    height: 20px;
    /* margin-bottom: 20px; */
    transition: 0.3s;
    top: 0;
  }
  .header__menu-burger span {
    content: "";
    background-color: white;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    bottom: 9px;
    transition: 0.3s;
  }

  .header__menu-burger::before,
  .header__menu-burger::after {
    content: "";
    background-color: white;
    position: absolute;
    width: 100%;
    height: 2px;
    left: 0;
    transition: 0.3s;
    /* border: 1px solid white; */
  }
  .header__menu-burger::before {
    top: 0;
  }
  .header__menu-burger::after {
    bottom: 0;
  }

  .header__menu-burger.active:before {
    top: 9px;
    transform: rotate(45deg);
  }
  .header__menu-burger.active:after {
    bottom: 9px;
    transform: rotate(-45deg);
  }

  .header__menu-burger.active span {
    transform: scale(0);
  }

  .invisible {
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    top: -100%;
    height: 0;
    /* display: none; */
  }

  .burger-menu__social-icon-item {
    display: block;
  }

  .burger-menu__social-icons {
    display: flex;
    align-items: flex-start;
    margin: 0;
    padding: 0;
    /* padding: 100px;
    height: 100px; */
  }

  .burger-menu__social-icons-link {
    display: block;
    background-color: rgba(246, 246, 246, 0.7);
    border-radius: 8px;
    padding: 20px 20px;
    font-size: 14px;
    color: #444443;
    margin-right: 10px;
    margin-bottom: 10px;
    text-align: left;
    border: 0;
    text-transform: uppercase;
    text-decoration: none;
  }
  .header__gallery-btn {
    display: block;
    /* position: fixed; */
    bottom: 35px;
    left:20%;
    right:20%;
    align-self: end;
    min-width: 215px;
    text-align: center;
    /* margin-bottom: 35px; */
    padding: 15px 50px;
    border-radius: 7px;
    outline: none;
    border: none;
    text-transform: uppercase;
    background-color: var(--primary-magenta);
    color: white;
    text-decoration: none;
    transition: opacity 0.5s;
    margin: 0 auto;
  }


}
</style>
