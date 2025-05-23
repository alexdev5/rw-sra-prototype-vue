<template>
    <div class="app-card-wrapper grid gap-32 app-card-products">
        <div class="app-card" v-for="product in store.products">
            <h2 class="mb-8">{{ product.name }}</h2>
            <p class="description">- {{ product.categoryName }}</p>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useProductsStore } from '@/stores'

const store = useProductsStore()
</script>

<style lang="scss">
.app-card-products {
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
