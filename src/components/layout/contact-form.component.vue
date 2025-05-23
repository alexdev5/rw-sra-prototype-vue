<template>
    <div class="app-contact-form">
        <h2>Напишіть нам</h2>
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
</script>

<style lang="scss">
.app-contact-form {
    max-width: 632px;
    margin-inline: auto;

    label {
        display: grid;
        gap: 8px;
    }

    textarea {
        width: 100%;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
        font-size: 18px;
        color: #606060;
        font-family: 'Open Sans', sans-serif;
        -moz-appearance: none;
        appearance: none;
        -webkit-appearance: none;
        padding: 12px 20px;
        height: 150px;
        resize: none;
    }

    .app-contact-form-form {
        display: grid;
        gap: 32px;
    }
}
</style>
