<script setup>
import '../assets/scss/components/hero-video.scss';
</script>

<template>
  <div class="hero__video-box">
    <div class="hero__video-wrapper">
      <video class="hero__video" autoplay loop muted>
        <source src="../assets/video/hero-video.mp4" type="video/mp4" />
      </video>
    </div>
    <svg class="hero__video-filter-svg" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="filter-tag">
          <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="filter-tag"
          />
          <feComposite in="SourceGraphic" in2="filter-tag" operator="atop" />
        </filter>
      </defs>
    </svg>
  </div>
</template>
