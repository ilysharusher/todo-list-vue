import { createRouter, createWebHistory } from 'vue-router';
import routes from './routes';

const router = createRouter({
    routes,
    history: createWebHistory(),
    linkActiveClass: 'active'
});

router.beforeEach((to, from) => {
    console.log(`${from.fullPath} => ${to.fullPath}`);
});

export default router;
