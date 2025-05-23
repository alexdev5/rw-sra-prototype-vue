<template>
    <RouterLink :to="{ name: RouteName.Home }">
        <div class="app-logo">
            <div><span>W</span>arehouse</div>
            <div><span>R</span>efrigerator</div>
        </div>
    </RouterLink>
</template>

<script lang="ts" setup>
import { RouteName } from '@/router'
</script>

<style lang="scss">
.app-logo {
    font-size: 0.8rem;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        color: var(--app-color-p-40);
    }
}
</style>
