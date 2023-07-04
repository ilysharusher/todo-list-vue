import TasksPage from '@/pages/TasksPage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import SignupPage from '@/pages/SignupPage.vue';
import SummaryPage from '@/pages/SummaryPage.vue';

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
    },
    {
        path: '/tasks/summary',
        name: 'summary',
        component: SummaryPage
    }
];

export default routes;
