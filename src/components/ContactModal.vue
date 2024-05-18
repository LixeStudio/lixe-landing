<script setup>
import '../assets/scss/components/contact-modal.scss';
import CloseButton from './CloseButton.vue';
import ContactSection from './ContactSection.vue';
import ContactForm from './ContactForm.vue';
import { ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const emit = defineEmits(['closeModal']);

const target = ref(null);
onClickOutside(target, () => emit('closeModal'));
</script>

<template>
  <div class="contact-modal">
    <div class="contact-modal__container" ref="target">
      <CloseButton @close="emit('closeModal')" />
      <ContactSection>
        <ContactForm @closeModal="emit('closeModal')" isModal="true" />
      </ContactSection>
    </div>
  </div>
</template>
