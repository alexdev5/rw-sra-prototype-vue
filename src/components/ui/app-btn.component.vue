<template>
    <component
        :is="component"
        class="app-btn"
        :class="classes"
        :to="to ? to : {}"
        :disabled="disabled"
    >
        <slot />
    </component>
</template>

<script lang="ts" setup>
import { computed } from 'vue'
import type { RouteLocationRaw } from 'vue-router'

const props = withDefaults(
    defineProps<{
        size?: 'xl' | 'md' | 'sm'
        outlined?: boolean
        to?: RouteLocationRaw
        url?: string
        disabled?: boolean
    }>(),
    {
        size: 'md',
    }
)

const component = computed(() => {
    if (props.to) return 'router-link'
    if (props.url) return 'a'
    return 'button'
})

const classes = computed(() => ({
    ['size-' + props.size]: true,
    disabled: props.disabled,
    outlined: props.outlined,
}))
</script>

<style lang="scss">
.app-btn {
    background: var(--app-color-p-40);
    border-radius: 6px;
    color: #fff;
    border: 1px solid var(--app-color-p-40);
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:not(.size-xl, .size-sm) {
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
        min-width: 150px;
    }

    &.size-sm {
        block-size: 32px;
        padding-inline: 16px;
        font-size: 0.9rem;
    }

    &.disabled {
        background: #c0c0c0;
        border-color: #c0c0c0;
        pointer-events: none;
    }
}
</style>
