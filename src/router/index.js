import { createRouter, createWebHistory } from 'vue-router';
import TemplateOption from '@/pages/TemplateOption.vue';
import Reactive from '@/pages/Reactive.vue';

const routes = [
  {
    path: '/TemplateOption',
    name: 'TemplateOption',
    component: TemplateOption
  },
  {
    path: '/Reactive',
    name: 'Reacitve',
    component: Reactive
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
