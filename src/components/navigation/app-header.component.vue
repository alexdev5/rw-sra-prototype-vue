<template>
    <header>
        <div class="header-actions">
            <div class="app-container">
                <p>АІС склад-холодильник для зберігання продуктів</p>
            </div>
        </div>

        <AppNavigation />
    </header>
</template>

<script lang="ts" setup>
import AppNavigation from './app-navigation.component.vue'
</script>

<style lang="scss">
@use '@/styles/utils/media' as *;

header {
    position: relative;
    border-bottom: 1px solid #e0e0e0;

    .header-title {
        font-size: 1rem;

        @include mobile {
            font-size: 1.4rem;
        }
    }

    .header-actions {
        background: var(--app-color-p-40);
        top: 0;
        padding-block: 8px;
        text-align: center;
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
