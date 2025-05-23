<template>
    <section class="margin-block">
        <div class="app-container container-md">
            <h1 class="ta-center mb-16">
                Зв’яжіться з нами — ми завжди на зв’язку.
            </h1>
            <p class="description">
                Маєте запитання щодо системи або потребуєте технічної підтримки?
                Напишіть нам або зателефонуйте — допоможемо швидко та
                професійно.
            </p>
        </div>
    </section>

    <section class="margin-block">
        <div class="app-container">
            <AppContactForm titleHidden />
        </div>
    </section>
</template>

<script lang="ts" setup>
import AppContactForm from '@/components/layout/contact-form.component.vue'
</script>

<style lang="scss"></style>
