<template>
    <header>
        <div class="header-actions">
            <p>АІС склад-холодильник</p>
            <a href="https://github.com/alexdev5" target="_blank">github.com</a>
        </div>

        <AppNavigation />
    </header>
</template>

<script lang="ts" setup>
import AppNavigation from './app-navigation.component.vue'

import { RouteName } from '@/router'
</script>

<style lang="scss">
@use '@/styles/utils/media' as *;

header {
    position: relative;

    .header-title {
        font-size: 1rem;

        @include mobile {
            font-size: 1.4rem;
        }
    }

    .nav-menu {
        margin-block-start: 16px;
    }

    .header-actions {
        background: #0a64f1;
        top: 0;
        padding: 20px 0 21px;
        display: flex;
        justify-content: space-between;
        color: white;

        p {
            font-size: 1.2rem;
        }
    }

    .show-more {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 4px 10px;

        span {
            font-size: 1.3rem;
            font-weight: 400;
        }
    }
}
</style>
