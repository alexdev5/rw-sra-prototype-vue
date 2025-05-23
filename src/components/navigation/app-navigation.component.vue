<template>
    <nav class="nav-menu">
        <div class="app-container">
            <AppLogo />

            <div class="nav-menu-links">
                <template v-for="route in routes">
                    <RouterLink
                        :to="{ name: route.name }"
                        class="nav-menu-item"
                        v-if="!route.hidden"
                    >
                        {{ route.label }}
                    </RouterLink>
                </template>

                <a href="https://github.com/alexdev5" target="_blank"
                    >github.com</a
                >
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import AppLogo from '@/components/layout/logo.component.vue'
import { RouteName } from '@/router'
import { computed } from 'vue'

const routes = computed(() => {
    return [
        { name: RouteName.Page_3, label: 'Користувачеві' },
        { name: RouteName.Page_2, label: 'Про сервіс' },
        { name: RouteName.Page_1, label: 'Контикти' },
    ]
})
</script>

<style lang="scss">
@use '@/styles/utils/media' as *;

.nav-menu {
    padding-block: 8px;

    a {
        text-decoration: none;
    }

    .app-container {
        justify-content: space-between;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: 16px;
    }

    .nav-menu-links {
        display: flex;
        align-items: center;
        gap: 16px;
    }
}

.nav-menu-item {
    transition: all 0.2s linear;
    font-size: 1rem;

    &:hover,
    &.router-link-active {
        text-decoration: underline;
        color: var(--app-color-p-40);
    }
}
</style>
