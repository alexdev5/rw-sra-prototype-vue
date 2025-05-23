<template>
    <div class="app-card-wrapper grid gap-32 app-card-products">
        <div
            class="app-card"
            v-for="product in products"
            @click="goToProduct(product.id)"
        >
            <h2 class="mb-8">{{ product.name }}</h2>
            <p class="description">- {{ product.categoryName }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '@/stores'
import { computed } from 'vue'
import type { Product } from '@/stores/products.store.ts'
import { RouteName } from '@/router'
import { useRouter } from 'vue-router'

const props = defineProps<{
    records?: Product[]
}>()

const router = useRouter()
const store = useProductsStore()

const products = computed(() =>
    props.records?.length ? props.records : store.products
)

function goToProduct(id: number) {
    router.push({
        name: RouteName.Product,
        params: { id },
    })
}
</script>

<style lang="scss">
div.app-card-products {
    .app-card {
        background: #dff0e7;
        border-color: #dff0e7 !important;
        cursor: pointer;
        transition: all 0.3s linear;

        &:hover {
            background: #fff;
        }
    }
}
</style>
