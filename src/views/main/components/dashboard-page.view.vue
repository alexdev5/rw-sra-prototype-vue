<template>
    <div class="home-page dashboard-page">
        <div class="app-container">
            <div class="flex gap-32">
                <div class="grid gap-32">
                    <h1>Вітаємо в системі!</h1>

                    <div class="flex gap-32">
                        <AppBtn size="xl" @click="store.toggleAuth()">
                            Вихід
                        </AppBtn>
                    </div>
                </div>
                <AppImagePlaceholder>Dashboard page</AppImagePlaceholder>
            </div>
        </div>

        <section class="border-top">
            <div class="app-container">
                <h2 class="ta-center mb-24">Категорії</h2>
                <AppProductCategories />
            </div>
        </section>

        <section class="border-top">
            <div class="app-container">
                <h2 class="ta-center mb-24">Продукти</h2>
                <AppProducts />
            </div>
        </section>
    </div>
</template>

<script lang="ts" setup>
import AppImagePlaceholder from '@/components/ui/image-placeholder.component.vue'
import AppBtn from '@/components/ui/app-btn.component.vue'
import AppProductCategories from '@/components/layout/product-categories.component.vue'
import AppProducts from '@/components/layout/products.component.vue'

import { useAppStore } from '@/app.store.ts'

const store = useAppStore()
</script>

<style lang="scss">
.dashboard-page {
}
</style>
