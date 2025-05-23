<template>
    <nav class="nav-menu">
        <div class="app-container">
            <AppLogo />

            <div class="nav-menu-links">
                <template v-for="route in routes">
                    <RouterLink
                        :to="{ name: route.name }"
                        class="nav-menu-item"
                    >
                        {{ route.label }}
                    </RouterLink>
                </template>

                <div class="delimiter-vertical"></div>

                <AppBtn size="sm" outlined @click="store.toggleLogin()">
                    {{ store.state.isAuth ? 'Logout' : 'Login' }}
                </AppBtn>

                <a
                    href="https://github.com/alexdev5"
                    target="_blank"
                    class="link-github"
                    >github.com</a
                >
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import AppLogo from '@/components/layout/logo.component.vue'
import AppBtn from '@/components/ui/app-btn.component.vue'
import { RouteName } from '@/router'
import { computed } from 'vue'
import { useAppStore } from '@/app.store.ts'

const store = useAppStore()

const guestRoutes = computed(() => {
    return [
        { name: RouteName.Home, label: 'Головна' },
        { name: RouteName.Page_3, label: 'Користувачеві' },
        { name: RouteName.Page_2, label: 'Про сервіс' },
        { name: RouteName.Page_1, label: 'Контикти' },
    ]
})
const authRoutes = computed(() => {
    if (!store.state.isAuth) return []

    return [
        { name: RouteName.Home, label: 'Головна' },
        { name: RouteName.Page_4, label: 'Категорії' },
        { name: RouteName.Page_5, label: 'Продукти' },
    ]
})

const routes = computed(() =>
    store.state.isAuth ? authRoutes.value : guestRoutes.value
)
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

    .link-github {
        color: #606060;
        font-weight: 400;
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
