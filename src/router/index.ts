import { createRouter, createWebHashHistory } from 'vue-router';
import routes from '@/config/router';


export const route = createRouter({
    history: createWebHashHistory(),
    routes
});

export default {};