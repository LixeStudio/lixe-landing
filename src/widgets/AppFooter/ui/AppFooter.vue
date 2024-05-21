<script setup>
import './app-footer.scss';
import { BaseButtonWithArrow } from '@/shared/ui';
import { ContactList } from '@/entities/Contact';

const emit = defineEmits(['openModal']);
</script>

<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content">
        <div class="footer__content-top-part">
          <h3 class="footer__title">Let’s Create</h3>
          <p class="footer__paragraph">Contact us now to discuss your project.</p>
          <BaseButtonWithArrow theme="light" @click="emit('openModal')" />
        </div>
        <div class="footer__line"></div>
        <div class="footer__box">
          <div class="footer__logo-box">
            <img class="footer__logo" src="../assets/icons/logo.svg" alt="Lixe logo" />
            <p>Creative digital production</p>
          </div>
          <ContactList class="footer__contacts" />
        </div>
        <div class="footer__line"></div>
        <p class="footer__copyright">© 2024 Lixe.studio. All rights reserved</p>
      </div>
    </div>
  </footer>
</template>
