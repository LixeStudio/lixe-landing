<script setup>
import './contact-section.scss';
import { ContactList } from '@/entities/Contact';
import { BaseButton } from '@/shared/ui';
import { BaseFormTextField } from '@/shared/ui';
import { BaseTextareaField } from '@/shared/ui';

const props = defineProps(['isModal']);
const emit = defineEmits(['closeModal']);

const handleSubmit = () => {
  console.log('Submit');
  if (props.isModal) {
    emit('closeModal');
  }
};
</script>

<template>
  <section class="contact">
    <div class="contact__top-part">
      <h2 class="contact__title">Contact us</h2>
      <ContactList class="contact__contacts" theme="light" />
    </div>
    <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
      <div class="contact-form__fields">
        <BaseFormTextField id="name" placeholder="Enter your name here"
          >My name is</BaseFormTextField
        >
        <BaseFormTextField id="email" placeholder="Enter your email here"
          >Here is my email</BaseFormTextField
        >
        <BaseTextareaField id="details" placeholder="Enter your project details here"
          >I’m looking for</BaseTextareaField
        >
      </div>
      <BaseButton class="contact-form__button" type="submit">Send</BaseButton>
    </form>
  </section>
</template>
