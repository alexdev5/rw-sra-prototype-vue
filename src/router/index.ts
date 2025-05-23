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
        component: () => import('@/views/main/main.view.vue'),
    },
    {
        path: '/page-1',
        name: RouteName.Page_1,
        meta: { title: 'Контикти' },
        component: () => import('@/views/page-1/page-1.view.vue'),
    },
    {
        path: '/page-2',
        name: RouteName.Page_2,
        meta: { title: 'Про сервіс' },
        component: () => import('@/views/page-2/page-2.view.vue'),
    },
    {
        path: '/page-3',
        name: RouteName.Page_3,
        meta: { title: 'Користувачеві' },
        component: () => import('@/views/page-3/page-3.view.vue'),
    },
    {
        path: '/page-4',
        name: RouteName.Page_4,
        meta: { title: 'Категорії' },
        component: () => import('@/views/page-4/page-4.view.vue'),
    },
    {
        path: '/page-5',
        name: RouteName.Page_5,
        meta: { title: 'Продукти' },
        component: () => import('@/views/page-5/page-5.view.vue'),
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
