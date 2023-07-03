import TasksPage from '@/pages/TasksPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import SignupPage from '@/pages/SignupPage.vue';

const routes = [
    {
        path: '/tasks',
        name: 'tasks',
        component: TasksPage
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
    }
];

export default routes;
