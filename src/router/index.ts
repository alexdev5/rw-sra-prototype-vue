import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { useHead } from '@vueuse/head'

export enum RouteName {
    Home = '/',
    Contacts = 'contacts',
    About = 'about',
    Categories = 'categories',
    Category = 'category',
    Products = 'products',
    Product = 'product',
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
        path: '/contacts',
        name: RouteName.Contacts,
        meta: { title: 'Контикти' },
        component: () => import('@/views/contacts/contacts.view.vue'),
    },
    {
        path: '/about',
        name: RouteName.About,
        meta: { title: 'Про сервіс' },
        component: () => import('@/views/about/about.view.vue'),
    },
    {
        path: '/categories',
        name: RouteName.Categories,
        meta: { title: 'Категорії' },
        component: () => import('@/views/categories/categories.view.vue'),
    },
    {
        path: '/category/:id',
        name: RouteName.Category,
        meta: { title: 'Категоря' },
        component: () => import('@/views/categories/category.view.vue'),
    },
    {
        path: '/products',
        name: RouteName.Products,
        meta: { title: 'Продукти' },
        component: () => import('@/views/products/products.view.vue'),
    },
    {
        path: '/product/:id',
        name: RouteName.Product,
        meta: { title: 'Продукти' },
        component: () => import('@/views/products/product.view.vue'),
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
