<script setup>
import '../assets/scss/components/project-info.scss';

defineProps({
  project: Object
});
</script>

<template>
  <section class="info">
    <div class="info__container">
      <div class="info__grid">
        <div class="info__box">
          <h3 class="info__title">{{ project.title }}</h3>
          <div class="info__description">
            <h4 class="info__description-subtitle">Project description</h4>
            <p class="info__description-paragraph">{{ project.description }}</p>
          </div>
        </div>
        <ul class="info__list">
          <li class="info__description">
            <h4 class="info__description-subtitle">Link</h4>
            <p class="info__description-paragraph">
              <a class="info__description-link" :href="project.link" target="_blank"
                >Visit the website</a
              >
            </p>
          </li>
          <li class="info__description">
            <h4 class="info__description-subtitle">Client:</h4>
            <p class="info__description-paragraph">{{ project.client }}</p>
          </li>
          <li class="info__description">
            <h4 class="info__description-subtitle">Scope of work:</h4>
            <p class="info__description-paragraph">{{ project.scopeOfWork }}</p>
          </li>
          <li class="info__description">
            <h4 class="info__description-subtitle">Date:</h4>
            <p class="info__description-paragraph">{{ project.date }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
