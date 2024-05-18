<script setup>
import '../assets/scss/components/client-feedback.scss';

defineProps({
  clientFeedback: Object
});
</script>

<template>
  <section class="client-feedback">
    <div class="client-feedback__container">
      <div class="client-feedback__content">
        <p class="client-feedback__title">Client feedback</p>
        <div class="client-feedback__box">
          <blockquote class="client-feedback__quote">{{ clientFeedback.clientQuote }}</blockquote>
          <div class="client-feedback__client-info">
            <img
              class="client-feedback__client-photo"
              :src="clientFeedback.clientPhoto"
              alt="Client photo"
            />
            <div class="client-feedback__info-box">
              <p class="client-feedback__name">{{ clientFeedback.clientName }}</p>
              <p class="client-feedback__details">{{ clientFeedback.clientDetails }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
