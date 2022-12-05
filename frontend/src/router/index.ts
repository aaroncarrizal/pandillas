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
        path: '/members/edit/:id',
        name: 'members-edit',
        component: () => import('@/components/memberComponents/MemberEdit.vue')
    },
    {
        path: '/crimes',
        name: 'crimes',
        component: () => import('@/components/crimeComponents/CrimeList.vue')
    },
    {
        path: '/crimes/new',
        name: 'crimes-new',
        component: () => import('@/components/crimeComponents/CrimeForm.vue')
    },
    {
        path: '/places',
        name: 'places',
        component: () => import('@/components/placeComponents/PlaceList.vue')
    },
    {
        path: '/places/new',
        name: 'places-new',
        component: () => import('@/components/placeComponents/PlaceForm.vue')
    },
    {
        path: '/places/edit/:id',
        name: 'places-edit',
        component: () => import('@/components/placeComponents/PlaceEdit.vue')
    },
    {
        path: '/faq',
        name: 'faq',
        component: () => import('@/components/FaqPage.vue')
    },
    {
        path: '/home',
        name: 'home-citizen',
        component: () => import('@/components/HomePage.vue')
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