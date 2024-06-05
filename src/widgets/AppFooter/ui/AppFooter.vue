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
          <h3 class="footer__title" text-split letters-fade-in>
            {{ $t('translation.footer.title') }}
          </h3>
          <p class="footer__paragraph" text-split words-slide-up>
            {{ $t('translation.footer.description') }}
          </p>
          <BaseButtonWithArrow theme="light" v-motion-slide-left @click="emit('openModal')" />
        </div>
        <div
          class="footer__line"
          v-motion
          :initial="{ width: '0%' }"
          :visible-once="{ width: '100%' }"
          :delay="200"
          :duration="1000"
        />
        <div class="footer__box">
          <div class="footer__logo-box">
            <img class="footer__logo" src="../assets/icons/logo.svg" alt="Lixe logo" />
            <p>{{ $t('translation.footer.paragraph') }}</p>
          </div>
          <ContactList class="footer__contacts" />
        </div>
        <div
          class="footer__line"
          v-motion
          :initial="{ width: '0%' }"
          :visible-once="{ width: '100%' }"
          :delay="200"
          :duration="1000"
        />
        <p class="footer__copyright">{{ $t('translation.footer.copyright') }}</p>
      </div>
    </div>
  </footer>
</template>
