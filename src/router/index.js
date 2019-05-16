import Vue from 'vue'
import Router from 'vue-router'
import paths from './paths';

// NProgress >> https://appdividend.com/2018/04/20/vue-router-loading-indicator-tutorial/
import NProgress from 'nprogress'
import '../../node_modules/nprogress/nprogress.css'

Vue.use(Router);
const router =  new Router({
  base: '/',
  mode: 'hash',
  linkActiveClass: 'active',
  routes: paths
});
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach((to, from) => {
  NProgress.done();
});

export default router;

