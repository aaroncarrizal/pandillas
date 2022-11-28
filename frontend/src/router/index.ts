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
        component: () => import('@/components/gangComponents/GangList.vue')
    },
    {
        path: '/gangs/new',
        name: 'gangs-new',
        component: () => import('@/components/gangComponents/GangForm.vue')
    },
    {
        path: '/gangs/:id',
        name: 'gang-details',
        component: () => import('@/components/gangComponents/GangDetails.vue')
    },
    {
        path: '/members',
        name: 'members',
        component: () => import('@/components/memberComponents/MemberList.vue')
    },
    {
        path: '/members/new',
        name: 'members-new',
        component: () => import('@/components/memberComponents/MemberForm.vue')
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('@/components/FaqPage.vue')
    },
    {
        path: '/report',
        name: 'generate-report',
        component: () => import('@/components/GenerateReport.vue')
    },
    {
        path: '/user',
        name: 'user-config',
        component: () => import('@/components/UserConfig.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router