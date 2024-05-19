<script setup>
import './next-project.scss';

defineProps(['project']);
</script>

<template>
  <section class="next-project">
    <div
      class="next-project__container"
      :style="{
        'background-image': `url(${project.image})`
      }"
    >
      <div class="next-project__overlay"></div>
      <div class="next-project__content">
        <h4 class="next-project__heading">Go to next project</h4>
        <h3 class="next-project__title">Green Evolution Technologies Website Development</h3>
      </div>
    </div>
  </section>
</template>
