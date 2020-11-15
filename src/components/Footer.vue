<template>
  <footer class="footer">
    <ul class="footer__social-icons">
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
  name: 'Footer',
}
</script>

<style>
.footer {
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: end;
    position: -webkit-sticky;
    position: sticky;
    bottom: 0px;
  }
  .footer__social-icons {
    margin-left: auto;
    margin-right: 4%;
    margin-bottom: 35px;
    padding: 0;
    display: flex;
    flex-direction: row;
  }
  .footer__social-icon-item {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    /* width: 40px;
    height: 40px; */
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

  @media all and (max-width: 768px) {
    .footer {
      display: none;
    }
  }
</style>