<script setup>
import './base-message.scss';
import { colors } from '../../constants/colors';

defineProps({
  message: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <div class="message">
    <div
      class="message__container"
      :style="{
        'background-color': message.status === 'success' ? colors.greenLight : colors.redLight
      }"
    >
      <img
        class="message__icon"
        v-if="message.status === 'success'"
        src="../../assets/icons/success.svg"
        alt="Success icon"
      />
      <img
        class="message__icon"
        v-if="message.status === 'error'"
        src="../../assets/icons/error.svg"
        alt="Error icon"
      />
      <p
        class="message__text"
        :style="{
          color: message.status === 'success' ? colors.greenDark : colors.redDark
        }"
      >
        {{ message.text }}
      </p>
    </div>
  </div>
</template>
