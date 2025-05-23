<template>
    <div class="app-image-placeholder">
        <span class="description"><slot/></span>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    width?: 100
    height?: 100
    units?: 'px' | '%'
}>()
</script>

<style lang="scss">
.app-image-placeholder {
    background: #DFE9F1;
    width: 100%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .description {
        font-size: 4rem;
        text-transform: uppercase;
    }
}
</style>