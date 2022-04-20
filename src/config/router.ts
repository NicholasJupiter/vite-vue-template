import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [{
    path: '/',
    component: () => import('@p/login.vue'),
}];

export default routes;