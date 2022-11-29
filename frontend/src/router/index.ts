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
        path: '/gangs/edit/:id',
        name: 'gang-edit',
        component: () => import('@/components/gangComponents/GangEdit.vue')
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
        path: '/members/:id',
        name: 'members-details',
        component: () => import('@/components/memberComponents/MemberDetails.vue')
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router