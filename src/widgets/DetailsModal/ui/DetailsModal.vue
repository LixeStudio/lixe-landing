<script setup>
import './details-modal.scss';
import { BaseCloseButton } from '@/shared/ui';
import { ProjectGallery, ProjectColors, ClientFeedback } from '@/entities/ProjectDetails';
import { ContactSection } from '@/features/SendForm';
import { ProjectInfo, ProjectHero } from '@/entities/ProjectDetails';
import { i18n } from '@/app/providers/i18n';
import { animateText } from '@/shared/lib/text-animation/animateText';
import { onMounted } from 'vue';

onMounted(() => {
  animateText(true);
});

defineProps(['project']);
const emit = defineEmits(['closeModal']);
</script>

<template>
  <div
    class="details-modal"
    v-motion
    :initial="{ y: 1000 }"
    :enter="{
      y: 0,
      transition: {
        duration: 800,
        type: 'keyframes',
        ease: 'easeOut'
      }
    }"
  >
    <div class="details-modal__container">
      <BaseCloseButton @close="emit('closeModal')" />
      <ProjectHero
        :project="{
          title: project.title[i18n.global.locale].title,
          logo: project.logo,
          image: project['bg-img'],
          link: project.link
        }"
      />
      <div class="details-modal__box">
        <ProjectInfo
          :project="{
            title: project.title[i18n.global.locale].title,
            description: project.description[i18n.global.locale].description,
            link: project.link,
            client: project.client,
            scope: project.scope[i18n.global.locale].scope,
            date: project.date.finish
          }"
        />
        <ProjectGallery :images="project.content[0]" />
        <ProjectColors :colors="['#B0A6C3', '#DCD1C7', '#D2E2EC', '#D4D3D9', '#ECEBF1']" />
        <ProjectGallery :images="project.content[1]" />
        <ClientFeedback :feedback="project.feedback" />
      </div>
      <!-- <NextProject :project="{ image: project.image }" /> -->
      <div class="detail-modal__box">
        <div class="details-modal__contact-box">
          <ContactSection class="details-modal__contact" />
        </div>
      </div>
    </div>
  </div>
</template>
