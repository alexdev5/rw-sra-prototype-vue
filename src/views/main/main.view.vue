<template>
    <template v-if="store.state.isAuth">
        <DashboardPage />
    </template>
    <template v-else>
        <HomePage />
    </template>
</template>

<script lang="ts" setup>
import HomePage from './components/home-page.view.vue'
import DashboardPage from './components/dashboard-page.view.vue'
import { useAppStore } from '@/app.store.ts'

const store = useAppStore()
</script>

<style lang="scss">
@use 'main.styles' as *;
</style>
