<template>
    <div class="app-card-wrapper grid gap-32 app-card-categories">
        <div class="app-card" v-for="category in store.categories">
            <h2 class="mb-8">{{ category.name }}</h2>
            <p class="description">{{ category.description }}</p>
            <ul>
                <li v-for="name in category.productsName">
                    {{ name }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { useCategoriesStore } from '@/stores'

const store = useCategoriesStore()
</script>

<style lang="scss">
.app-card-categories {
    .app-card {
        background: #dfe9f1;
        border-color: #dfe9f1 !important;
        cursor: pointer;
        transition: all 0.3s linear;

        &:hover {
            background: #fff;
        }
    }
}
</style>
