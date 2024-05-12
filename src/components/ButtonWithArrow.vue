<script setup>
import { ref } from 'vue';
import '../assets/scss/components/button-with-arrow.scss';

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
    <span class="button-with-arrow__text">Start the project</span>
    <div class="button-with-arrow__circle">
      <img
        class="button-with-arrow__arrow"
        src="../assets/images/icons/arrow-right.svg"
        alt="Arrow right"
      />
      <div
        class="button-with-arrow__inner"
        :style="{
          transformOrigin
        }"
      ></div>
    </div>
  </div>
</template>
