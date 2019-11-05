import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [];
const requireComponent = require.context('@/modules', true, /\.router.js$/);

requireComponent.keys().forEach((fileName) => {
  const routerConfig = requireComponent(fileName);
  routes.push(...routerConfig.default);
});

const router = new VueRouter({
  routes
});

export default router;
