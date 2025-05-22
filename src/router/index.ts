import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useHead } from '@vueuse/head'

export enum RouteName {
    Home = 'home',
    Page_1 = 'page-1',
    Page_2 = 'page-2',
    Page_3 = 'page-3',
    Page_4 = 'page-4',
    Page_5 = 'page-5',
    PageNotFound = 'page-not-found',
}

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: RouteName.Home,
        meta: { title: 'Home' },
        component: () => import('@/views/home/home.view.vue'),
    },
    {
        path: '/work-3',
        name: RouteName.Page_1,
        meta: { title: 'Практикум 3' },
        component: () => import('@/views/work-3/work-3.view.vue'),
    },
]

const serviceRoutes: Array<RouteRecordRaw> = [
    {
        path: '/:pathMatch(.*)*',
        name: RouteName.PageNotFound,
        meta: { title: '404 not found' },
        component: () => import('@/views/system/not-found.view.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [...routes, ...serviceRoutes],
})

router.beforeEach((to, from, next) => {
    const title = to.meta.title || 'Default Title'
    useHead({
        title,
    })
    next()
})

export default router
