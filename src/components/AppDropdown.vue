<script setup>
import { ref } from 'vue';
import '../assets/scss/components/dropdown.scss';

defineProps(['withWidthTransition', 'heading', 'options']);
const emit = defineEmits(['setCurrent']);

const isDropdownOpened = ref(false);

const handleClick = (current) => {
  emit('setCurrent', current);
  isDropdownOpened.value = false;
};
</script>

<template>
  <div
    class="dropdown"
    :class="{
      'dropdown_transition-opened': withWidthTransition && isDropdownOpened,
      dropdown_transition: withWidthTransition
    }"
  >
    <div
      class="dropdown__container"
      :class="{
        dropdown__container_opened: isDropdownOpened
      }"
    >
      <div class="dropdown__button" @click="isDropdownOpened = !isDropdownOpened">
        <div
          class="dropdown__item dropdown__item_active"
          :class="{
            'dropdown__icon-rotate': isDropdownOpened
          }"
        >
          <span>{{ heading }}</span>
        </div>
      </div>
      <div
        class="dropdown__items"
        :class="{
          dropdown__items_uppercase: !withWidthTransition
        }"
      >
        <div class="dropdown__line"></div>
        <div
          class="dropdown__item"
          v-for="option in options"
          :key="option"
          @click="handleClick(option)"
        >
          <span>{{ option }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
