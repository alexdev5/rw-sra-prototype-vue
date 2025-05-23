<template>
    <button class="app-btn" :class="classes">
        <slot />
    </button>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = withDefaults(
    defineProps<{
        size?: 'xl' | 'md'
        outlined?: boolean
    }>(),
    {
        size: 'md',
    }
)
const classes = computed(() => ({
    ['size-' + props.size]: true,
    ['outlined']: props.outlined,
}))
</script>

<style lang="scss">
.app-btn {
    background: var(--app-color-p-40);
    border-radius: 6px;
    min-width: 150px;
    color: #fff;
    border: 1px solid var(--app-color-p-40);

    &:not(.size-xl) {
        block-size: 40px;
        font-size: 0.9rem;
    }

    &:hover {
        background: #fff;
        color: var(--app-color-p-40);
    }

    &.outlined {
        background: #fff;
        color: var(--app-color-p-40);

        &:hover {
            background: var(--app-color-p-40);
            color: #fff;
        }
    }

    &.size-xl {
        block-size: 56px;
        padding-inline: 24px;
        font-size: 1.1rem;
    }
}
</style>
