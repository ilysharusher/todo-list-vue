import TasksPage from '@/pages/TasksPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import SignupPage from '@/pages/SignupPage.vue';
import SummaryPage from '@/pages/SummaryPage.vue';
import NotFoundErrorPage from '@/pages/errors/NotFoundErrorPage.vue';

const routes = [
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksPage,
        meta: {
            auth: true
        }
    },
    {
        path: '/tasks/login',
        name: 'login',
        component: LoginPage
    },
    {
        path: '/tasks/signup',
        name: 'signup',
        component: SignupPage
    },
    {
        path: '/tasks/summary',
        name: 'summary',
        component: SummaryPage,
        meta: {
            auth: true
        }
    },
    {
        path: '/:notFound(.*)',
        name: 'notFound',
        component: NotFoundErrorPage
    }
];

export default routes;
