<script setup>
import '../assets/scss/layouts/footer.scss';
import ButtonWithArrow from '../components/ButtonWithArrow.vue';
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__content-top-part">
          <h3 class="footer__title">Let’s Create</h3>
          <p class="footer__paragraph">Contact us now to discuss your project.</p>
          <ButtonWithArrow theme="light" />
        </div>
        <div class="footer__line"></div>
        <div class="footer__box">
          <div class="footer__logo-box">
            <img class="footer__logo" src="../assets/images/icons/logo-dark.svg" alt="Lixe logo" />
            <p>Creative digital production</p>
          </div>
          <ul class="footer__contacts">
            <li class="footer__contacts-item">
              <img src="../assets/images/icons/email.svg" alt="Email" /><span
                >lixestudio@gmail.com</span
              >
            </li>
            <li class="footer__contacts-item">
              <img src="../assets/images/icons/telegram.svg" alt="Telegram" /><span
                >@lixe.studio</span
              >
            </li>
            <li class="footer__contacts-item">
              <img src="../assets/images/icons/whatsapp.svg" alt="WhatsApp" /><span
                >+123 456 789 00</span
              >
            </li>
          </ul>
        </div>
        <div class="footer__line"></div>
        <p class="footer__copyright">© 2024 Lixe.studio. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
