import $ from 'jquery';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

gsap.registerPlugin(ScrollTrigger);

export const animateText = () => {
  new SplitType('[details-text-split]', {
    types: 'words, chars',
    tagName: 'span'
  });

  function createScrollTrigger(triggerElement, timeline) {
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 80%',
      onEnter: () => timeline.play(),
      onLeaveBack: () => {
        timeline.pause();
      },
      scroller: '.details-modal'
    });
  }

  $('[details-letters-fade-in]').each(function () {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.char'), {
      opacity: 0,
      duration: 0.2,
      ease: 'power1.out',
      stagger: { amount: 0.8 }
    });
    createScrollTrigger($(this), tl);
  });

  $('[details-words-slide-up]').each(function () {
    let tl = gsap.timeline({ paused: true });
    tl.from($(this).find('.word'), {
      opacity: 0,
      yPercent: 100,
      duration: 0.5,
      ease: 'back.out(2)',
      stagger: { amount: 0.5 }
    });
    createScrollTrigger($(this), tl);
  });

  gsap.set('[details-text-split]', { opacity: 1 });
};
