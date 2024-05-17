<script setup>
import '../assets/scss/components/contact-section.scss';
import ContactList from './ContactList.vue';
</script>

<template>
  <section class="contact">
    <div class="contact__top-part">
      <h2 class="contact__title">Contact us</h2>
      <ContactList class="contact__contacts" theme="light" />
    </div>
    <slot />
  </section>
</template>
