<script setup>
import './client-feedback.scss';
import { i18n } from '@/app/providers/i18n';

defineProps({
  feedback: Object
});
</script>

<template>
  <section class="client-feedback">
    <div class="client-feedback__container">
      <div class="client-feedback__content">
        <p class="client-feedback__title">Client feedback</p>
        <div class="client-feedback__box">
          <blockquote class="client-feedback__quote">
            {{ feedback.text[i18n.global.locale] }}
          </blockquote>
          <div class="client-feedback__client-info">
            <img class="client-feedback__client-photo" :src="feedback.avatar" alt="Client photo" />
            <div class="client-feedback__info-box">
              <p class="client-feedback__name">{{ feedback.name }}</p>
              <p class="client-feedback__details">{{ feedback.role[i18n.global.locale] }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
