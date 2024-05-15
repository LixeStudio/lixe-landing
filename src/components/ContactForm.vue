<script setup>
import '../assets/scss/components/contact-form.scss';
import ButtonPrimary from '../components/ButtonPrimary.vue';

const emit = defineEmits(['closeModal', 'handleSubmit']);
</script>

<template>
  <form class="contact-form" @submit.prevent="emit('handleSubmit')" novalidate>
    <div class="contact-form__fields">
      <div>
        <label class="contact-form__label" for="name">My name is</label
        ><input
          class="contact-form__field"
          type="text"
          id="name"
          placeholder="Enter your name here"
          autofocus
        />
      </div>
      <div>
        <label class="contact-form__label" for="email">Here is my email</label
        ><input
          class="contact-form__field"
          type="text"
          id="email"
          placeholder="Enter your email here"
        />
      </div>
      <div class="contact-form__details">
        <label class="contact-form__label" for="details">I’m looking for</label>
        <textarea
          class="contact-form__field contact-form__textarea"
          name="details"
          id="details"
          placeholder="Enter your project details here"
        />
      </div>
    </div>
    <ButtonPrimary class="contact-form__button" type="submit">Send</ButtonPrimary>
  </form>
</template>
