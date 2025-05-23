<template>
    <section class="margin-block">
        <div class="app-container">
            <h1 class="ta-center mb-16">Продукти</h1>
            <p class="ta-center description">Оберіть для перегляду</p>
        </div>
    </section>
    <section class="margin-block">
        <div class="app-container">
            <AppProducts />
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppProducts from '@/components/layout/products.component.vue'
</script>

<style lang="scss"></style>
