<template>
    <section class="margin-block">
        <div class="app-container">
            <h1 class="ta-center mb-16">Категорії</h1>
            <p class="ta-center description">Оберіть для перегляду</p>
        </div>
    </section>
    <section class="margin-block">
        <div class="app-container">
            <AppProductCategories />
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppProductCategories from '@/components/layout/product-categories.component.vue'
</script>

<style lang="scss"></style>
