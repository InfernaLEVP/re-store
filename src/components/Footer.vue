<template>
  <footer class="footer">
    <transition name="fade" mode="out-in">
      <a href="http://www.winzavod.ru/" target="_blank" v-if="!isFront && !isGallery" class="footer__logo-vinzavod">
        <img
          src="../assets/vinzavod_logo.svg"
          alt="Логотип Винзавод"
        />
      </a>
      
    </transition>
    
    <ul class="footer__social-icons" v-show="!isGallery">
      <li class="footer__social-icon-item">
        <a
          href="https://www.facebook.com/restore.ru/"
          target="_blank"
          class="footer__social-icons-link"
          >fb</a
        >
      </li>
      <li class="footer__social-icon-item">
        <a
          href="https://vk.com/re_store"
          target="_blank"
          class="footer__social-icons-link"
          >vk</a
        >
      </li>
      <li class="footer__social-icon-item">
        <a
          href="https://www.instagram.com/restore_ru/"
          target="_blank"
          class="footer__social-icons-link"
          >ig</a
        >
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  computed: {
    isFront(){
      return this.$router.currentRoute.value.name == 'Home' ? true : false;
    },
    isGallery(){
      return this.$router.currentRoute.value.name == 'Gallery' ? true : false;
    }
  }
};
</script>

<style>
.footer {
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  /* justify-content: end; */
  position: fixed;
  width: 100%;
  bottom: 0px;
  pointer-events: none;
  z-index: 3;
  padding-bottom: 35px;
}
.footer__social-icons {
  margin: 0;
  margin-left: auto;

  margin-right: 4%;
  /* margin-bottom: 35px; */
  padding: 0;
  display: flex;
  flex-direction: row;
}
.footer__social-icon-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px;
  margin: 5px;
  list-style: none;
  border: solid 1px white;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  transition: opacity 0.5s;
  text-align: center;
  color: white;
  pointer-events: all;
  width: 50px;
  height: 50px;
}

.footer__social-icon-item:hover {
  border: solid 1px #e52e80;
  opacity: 70%;
}

.footer__social-icons-link {
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  color: white;
  text-align: center;
  padding: 0px;
  margin: 0;
  width: 100%;
  height: 100%;
}

.footer__logo-vinzavod {
  width: 75px;
  margin-left: 4%;
  margin-right: auto;
  /* margin-bottom: 35px; */
  padding: 0;
  pointer-events: all;
  /* display: flex;
    flex-direction: row; */
}

@media all and (max-width: 960px) {
  .footer {
    display: none;
  }
}
</style>