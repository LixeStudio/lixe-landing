<script setup>
import './project-info.scss';
import { getInfoListItems } from '../../model/getInfoListItems';

const props = defineProps({
  project: Object
});

const infoListItems = getInfoListItems(props.project);
</script>

<template>
  <section class="info">
    <div class="info__container">
      <div class="info__grid">
        <div class="info__box">
          <h3 class="info__title" v-motion-slide-visible-once-left :delay="200">
            {{ project.title }}
          </h3>
          <div class="info__description">
            <h4 class="info__description-subtitle">Project description</h4>
            <p class="info__description-paragraph" text-split words-slide-up>
              {{ project.description }}
            </p>
          </div>
        </div>
        <ul class="info__list">
          <li
            class="info__description"
            v-for="(item, index) in infoListItems"
            :key="item.title"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :visible-once="{ opacity: 1, y: 0 }"
            :delay="index * 150"
          >
            <h4 class="info__description-subtitle">{{ item.title }}:</h4>
            <p class="info__description-paragraph" v-if="item.link">
              <a class="info__description-link" :href="item.link" target="_blank">{{
                item.text
              }}</a>
            </p>
            <p v-if="!item.link" class="info__description-paragraph">{{ item.text }}</p>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>
