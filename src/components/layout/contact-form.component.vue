<template>
    <div class="app-contact-form">
        <h2 v-if="!titleHidden">Напишіть нам</h2>
        <div class="app-contact-form-form">
            <label>
                Ім'я
                <input type="text" class="form-control" />
            </label>
            <label>
                Email
                <input type="text" class="form-control" />
            </label>
            <label>
                Повідомлення
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </label>
            <AppBtn size="xl">Відправити</AppBtn>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppBtn from '@/components/ui/app-btn.component.vue'

defineProps<{
    titleHidden?: boolean
}>()
</script>

<style lang="scss">
.app-contact-form {
    max-width: 632px;
    margin-inline: auto;

    label {
        display: grid;
        gap: 8px;
    }

    .app-contact-form-form {
        display: grid;
        gap: 32px;
    }
}
</style>
