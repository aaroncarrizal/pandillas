import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        name: 'login',
        component: () => import('@/components/LoginPage.vue')
    },
    {
        path: '/gangs',
        name: 'gangs',
        component: () => import('@/components/GangList.vue')
    },
    {
        path: '/gangs/new',
        name: 'gangs-new',
        component: () => import('@/components/GangForm.vue')
    },
    {
        path: '/songs/:id',
        name: 'songs-details',
        component: () => import('@/components/SongDetails.vue')
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('@/components/FaqPage.vue')
    },
    {
<<<<<<< Updated upstream
        path: '/member',
        name: 'member-new',
        component: () => import('@/components/MemberForm.vue')
=======
        path: '/report',
        name: 'generate-report',
        component: () => import('@/components/GenerateReport.vue')
    },
    {
        path: '/user',
        name: 'user-config',
        component: () => import('@/components/UserConfig.vue')
    },
    {
        path: '/users',
        name: 'users-list',
        component: () => import('@/components/UsersList.vue')
    },
    {
        path: '/users/new',
        name: 'users-new',
        component: () => import('@/components/UserForm.vue')
    },
    {
        path: '/sos',
        name: 'sos',
        component: () => import('@/components/SOSPage.vue')
>>>>>>> Stashed changes
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router