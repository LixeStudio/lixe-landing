<script setup>
import './portfolio-controls.scss';
import { computed, ref, nextTick, watch } from 'vue';
import { BaseLabel } from '@/shared/ui';
import { PortfolioProject } from '@/entities/Portfolio';
import { SortDropdown } from '@/entities/Portfolio';
import { BaseButton } from '@/shared/ui';
import { labels } from '../../constants/labels';

const props = defineProps({
  projects: Array
});

const allShown = ref(false);
const currentLabel = ref(null);
const currentSort = ref(null);

const filterProjects = (label) => {
  if (label) {
    return props.projects.filter((project) => project.labels.en.includes(label));
  }
  return props.projects;
};

const sliceProjects = (projects) => {
  return allShown.value ? projects : projects.slice(0, 6);
};

const sortProjects = (projects) => {
  if (currentSort.value === 'asc') {
    return projects.sort(
      (a, b) => new Date(a.date.finish).getTime() - new Date(b.date.finish).getTime()
    );
  } else if (currentSort.value === 'desc') {
    return projects.sort(
      (a, b) => new Date(b.date.finish).getTime() - new Date(a.date.finish).getTime()
    );
  }
  return projects;
};

const processedProjects = computed(() => {
  const filteredProjects = filterProjects(currentLabel.value);
  const slicedProjects = sliceProjects(filteredProjects);
  return sortProjects(slicedProjects);
});

const renderComponent = ref(true);

const forceRender = async () => {
  renderComponent.value = false;
  await nextTick();
  renderComponent.value = true;
};

const setCurrentLabel = (current) => {
  currentLabel.value = current;
};

const setCurrentSort = (current) => {
  currentSort.value = current;
};

watch([currentLabel, currentSort], () => {
  forceRender();
});
</script>

<template>
  <div class="portfolio__top-panel">
    <div class="portfolio__labels">
      <BaseLabel
        v-for="(label, index) in labels"
        :key="label"
        :selected="currentLabel === label"
        :quantity="filterProjects(label).length"
        @click="setCurrentLabel(label)"
        v-motion
        :initial="{ opacity: 0 }"
        :visible-once="{ opacity: 1 }"
        :delay="index * 100"
      >
        {{ label }}
      </BaseLabel>
    </div>
    <SortDropdown :currentSort="currentSort" @setCurrentSort="setCurrentSort" />
  </div>
  <div class="portfolio__projects" v-if="renderComponent">
    <PortfolioProject
      v-for="project in processedProjects"
      :key="project.title.en.title"
      :project="project"
    />
  </div>
  <BaseButton
    v-if="filterProjects(currentLabel).length > 6"
    class="portfolio__button"
    @click="allShown = !allShown"
    >{{
      allShown
        ? $t('translation.portfolio.buttonText.seeLess')
        : $t('translation.portfolio.buttonText.seeMore')
    }}</BaseButton
  >
</template>
