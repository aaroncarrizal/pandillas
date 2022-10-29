import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router"
const routes: RouteRecordRaw[] = [
    {
        path: '/',
        alias: '/gangs',
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
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router