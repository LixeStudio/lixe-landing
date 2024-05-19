<script setup>
import './base-textarea-field.scss';

defineProps({
  id: String,
  placeholder: String
});
</script>

<template>
  <div class="textarea-field">
    <label class="textarea-field__label" :for="id"><slot /></label>
    <textarea class="textarea-field__input" name="details" :id="id" :placeholder="placeholder" />
  </div>
</template>
