<script setup>
import { ref } from 'vue';
import '../assets/scss/components/button-with-arrow.scss';

defineProps({
  theme: { type: String },
  isHidden: { type: Boolean }
});

const transformOrigin = ref('');

const calculateTransformOrigin = (e) => {
  const x = e.pageX - e.target.offsetLeft;
  const y = e.pageY - e.target.offsetTop;
  const offsetX = Math.round((x / e.target.offsetWidth) * 100) + '%';
  const offsetY = Math.round((y / e.target.offsetHeight) * 100) + '%';
  transformOrigin.value = offsetX + ' ' + offsetY;
};
</script>

<template>
  <div
    class="button-with-arrow"
    @mouseenter="(e) => calculateTransformOrigin(e)"
    @mouseleave="(e) => calculateTransformOrigin(e)"
  >
    <span
      class="button-with-arrow__text"
      :class="{
        'button-with-arrow__text_hidden': isHidden
      }"
      >Start the project</span
    >
    <div
      class="button-with-arrow__circle"
      :class="{
        'button-with-arrow__circle_light': theme === 'light'
      }"
    >
      <img
        class="button-with-arrow__arrow"
        :class="{
          'button-with-arrow__arrow_light': theme === 'light'
        }"
        src="../assets/images/icons/arrow-right.svg"
        alt="Arrow right"
      />
      <div
        class="button-with-arrow__inner"
        :style="{
          transformOrigin,
          'background-color': theme === 'light' ? '#ffffff' : '#111928'
        }"
      ></div>
    </div>
  </div>
</template>
