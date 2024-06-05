<script setup>
import { ref, inject } from 'vue';
import './portfolio-project.scss';

defineProps(['project']);

const circle = ref(null);
const container = ref(null);

const handleMouseMove = (e) => {
  const x = Math.round(
    e.clientX - container.value.getBoundingClientRect().left - circle.value.offsetWidth / 2
  );
  const y = Math.round(
    e.clientY - container.value.getBoundingClientRect().top - circle.value.offsetWidth / 2
  );
  circle.value.style.transform = `translateX(${x}px) translateY(${y}px)`;
};

const openModal = inject('openModal');
</script>

<template>
  <div
    class="portfolio__project"
    v-motion
    :initial="{ y: 40, scale: 1, opacity: 0 }"
    :visible="{
      y: 0,
      scale: 1,
      opacity: 1,
      transition: {
        scale: {
          duration: 300
        },
        duration: 1000,
        type: 'keyframes',
        ease: 'easeOut'
      }
    }"
    :hovered="{
      scale: 1.01,
      transition: {
        duration: 300
      }
    }"
    ref="container"
    @mousemove="handleMouseMove"
    @click="openModal(project)"
  >
    <div class="portfolio__circle" ref="circle">
      <div class="portfolio__circle-inner">View</div>
    </div>
    <img class="portfolio__project-image" :src="project.image" alt="Project Image" />
    <div class="portfolio__project-box">
      <h3 class="portfolio__project-title">{{ project.title }}</h3>
      <p class="portfolio__project-description">{{ project.shortDescription }}</p>
    </div>
    <div class="portfolio__project-tags">
      <div class="portfolio__project-tag" v-for="(tag, index) in project.tags" :key="index">
        <span>{{ tag }}</span>
        <span v-if="index !== project.tags.length - 1" class="portfolio__project-tag-circle"></span>
      </div>
    </div>
  </div>
</template>
