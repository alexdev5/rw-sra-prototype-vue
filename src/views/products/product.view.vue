<template>
    <template v-if="product">
        <section class="mb-24">
            <div class="app-container">
                <h1 class="ta-center mb-16">{{ product.name }}</h1>
                <p class="ta-center description">{{ product.categoryName }}</p>
            </div>
        </section>

        <section class="margin-block">
            <div class="app-container">
                <h2>Параметри зберігання</h2>
                <ul>
                    <li>Категорія: {{ product.categoryName }}</li>
                    <li>Температурний режим: % °C</li>
                    <li>Рекомендована вологість: %</li>
                    <li>Максимальний термін зберігання: % днів</li>
                    <li>Тип упаковки: %</li>
                </ul>
            </div>
            <div class="app-container">
                <h2>Інформація про партію</h2>
                <ul>
                    <li>Дата надходження: %</li>
                    <li>Номер партії: YOG-BIO-2405</li>
                    <li>Постачальник: ТОВ «%»</li>
                    <li>Обсяг партії: % шт.</li>
                    <li>Тип упаковки: %</li>
                    <li>Зона зберігання: Камера №2, стелаж 3B</li>
                </ul>
            </div>
            <div class="app-container">
                <h2>Контроль та сповіщення</h2>
                <ul>
                    <li>Термін придатності завершується через % дні</li>
                    <li>
                        Жодного порушення температурного режиму не зафіксовано
                    </li>
                </ul>
            </div>
            <div class="app-container" v-if="comments?.length">
                <h2 class="ta-center">Коментарі та події</h2>
                <div class="product-comments-wrapper grid">
                    <div class="product-comments" v-for="comment in comments">
                        <p class="product-comments-username">
                            {{ comment.userName }}
                        </p>
                        <p class="product-comments-message">
                            {{ comment.message }}
                        </p>
                    </div>
                </div>

                <div class="grid gap-32 mt-24">
                    <textarea v-model="commentModel"></textarea>
                    <AppBtn
                        size="xl"
                        @click="addComment()"
                        :disabled="!commentModel"
                        >Додати коментар
                    </AppBtn>
                </div>
            </div>
        </section>
    </template>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

import { useProductsStore } from '@/stores'
import { computed, onMounted, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { RouteName } from '@/router'
import type { Product } from '@/stores/products.store.ts'

const productsStore = useProductsStore()
const route = useRoute()
const router = useRouter()

const product = ref<Product | null>(null)
const comments = computed(() => {
    if (!product.value?.id) return []

    return productsStore.comments.filter(
        (comm) => comm.productId === product.value!.id
    )
})

const commentModel = ref('')

function addComment() {
    if (!product.value?.id || !commentModel.value) return

    productsStore.comments.push({
        productId: product.value.id,
        id: productsStore.comments.length,
        message: commentModel.value,
        userName: 'Admin',
    })

    commentModel.value = ''
}

onMounted(() => {
    const id = Number(route.params.id)
    if (!id) router.push({ name: RouteName.PageNotFound })

    const _product = productsStore.products.find((prod) => prod.id === id)

    if (!_product) router.push({ name: RouteName.PageNotFound })

    product.value = _product ?? null
})
</script>

<style lang="scss">
.product-comments-wrapper {
    .product-comments {
        border-bottom: 1px solid #e0e0e0;
        padding: 16px;
    }

    .product-comments-username {
        color: #606060;
        font-size: 0.9rem;
    }
}
</style>
