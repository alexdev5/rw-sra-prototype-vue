<template>
    <template v-if="category">
        <section class="margin-block">
            <div class="app-container">
                <h1 class="ta-center mb-16">{{ category.name }}</h1>
                <p class="ta-center description">{{ category.description }}</p>
            </div>
        </section>
        <section class="margin-block">
            <div class="app-container">
                <AppProducts :records="products" />
            </div>
        </section>
    </template>
</template>

<script lang="ts" setup>
import { useCategoriesStore, useProductsStore } from '@/stores'
import { onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouteName } from '@/router'
import type { Category } from '@/stores/categories.store.ts'
import type { Product } from '@/stores/products.store.ts'
import AppProducts from '@/components/layout/products.component.vue'

const categoriesStore = useCategoriesStore()
const productsStore = useProductsStore()
const route = useRoute()
const router = useRouter()

const category = ref<Category | null>(null)
const products = ref<Product[] | undefined>(undefined)

onMounted(() => {
    const id = Number(route.params.id)
    if (!id) router.push({ name: RouteName.PageNotFound })

    const _category = categoriesStore.categories.find((cat) => cat.id === id)

    if (!_category) router.push({ name: RouteName.PageNotFound })

    category.value = _category ?? null
    products.value = productsStore.products.filter(
        (prod) => prod.categoryId === id
    )
})
</script>

<style lang="scss"></style>
