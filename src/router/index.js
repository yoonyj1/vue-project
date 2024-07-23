import { createRouter, createWebHistory } from 'vue-router';
import TemplateOption from '@/pages/OptionAPI/TemplateOption.vue';
import About from '@/pages/About.vue';

const routes = [
  
  {
    path: '/TemplateOption',
    name: 'TemplateOption',
    component: TemplateOption
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
