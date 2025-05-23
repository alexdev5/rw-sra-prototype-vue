<template>
    <div class="app-card-wrapper grid gap-32 app-card-categories">
        <div
            class="app-card"
            v-for="category in categories"
            @click="goToCategory(category.id)"
        >
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
import { useRouter } from 'vue-router'
import { RouteName } from '@/router'
import { computed } from 'vue'
import type { Category } from '@/stores/categories.store.ts'

const props = defineProps<{
    records?: Category[]
}>()

const store = useCategoriesStore()
const router = useRouter()

const categories = computed(() =>
    props.records?.length ? props.records : store.categories
)

function goToCategory(id: number) {
    router.push({
        name: RouteName.Category,
        params: { id },
    })
}
</script>

<style lang="scss">
div.app-card-categories {
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
