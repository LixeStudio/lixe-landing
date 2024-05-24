<script setup>
import './details-modal.scss';
import { BaseCloseButton } from '@/shared/ui';
import { ProjectGallery } from '@/entities/ProjectDetails';
import { ProjectColors } from '@/entities/ProjectDetails';
import { ClientFeedback } from '@/entities/ProjectDetails';
import { ContactSection } from '@/features/SendForm';
import { ProjectInfo } from '@/entities/ProjectDetails';
import { ProjectHero } from '@/entities/ProjectDetails';
import { NextProject } from '@/entities/ProjectDetails';

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
          title: project.title,
          logo: project.logo,
          modalImage: project.modalImage,
          link: project.link
        }"
      />
      <div class="details-modal__box">
        <ProjectInfo
          :project="{
            title: project.title,
            description: project.description,
            link: project.link,
            client: project.client,
            scopeOfWork: project.scopeOfWork,
            date: project.date
          }"
        />
        <ProjectGallery :images="Array(3).fill(project.modalImage)" />
        <ProjectColors :colors="project.colors" />
        <ProjectGallery :images="Array(3).fill(project.modalImage)" />
        <ClientFeedback :clientFeedback="project.clientFeedback" />
        <NextProject :project="{ image: project.image }" />
        <div class="details-modal__contact-box">
          <ContactSection class="details-modal__contact" />
        </div>
      </div>
    </div>
  </div>
</template>
