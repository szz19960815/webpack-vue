import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router);
Vue.config.productionTip = false;

const router = new Router({
  mode: 'history',
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { x: 0, y: 0 }
  }
});

export default router;