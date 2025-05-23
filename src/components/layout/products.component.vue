<template>
    <div class="app-card-wrapper grid gap-32 app-card-products">
        <div
            class="app-card"
            v-for="product in store.products"
            @click="selectProduct(product.id)"
        >
            <h2 class="mb-8">{{ product.name }}</h2>
            <p class="description">- {{ product.categoryName }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '@/stores'

const emit = defineEmits(['selected'])
const store = useProductsStore()

function selectProduct(id: number) {
    emit('selected', id)
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
