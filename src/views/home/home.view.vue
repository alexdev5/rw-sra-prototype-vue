<template>
    <div class="home-page">
        <div class="app-container">
            <div class="flex gap-32">
                <div class="grid gap-32">
                    <h1>
                        <span>Cклад-холодильник</span><br />
                        для зберігання продуктів
                    </h1>
                    <p class="description">
                        Це система для зберігання продуктів харчування з
                        дотриманням умов зберігання та термінів придатності.
                    </p>

                    <div class="flex gap-32">
                        <AppBtn size="xl">Авторизація</AppBtn>
                        <AppBtn
                            size="xl"
                            outlined
                            :to="{ name: RouteName.Page_1 }"
                            >Докладніше
                        </AppBtn>
                    </div>
                </div>
                <AppImagePlaceholder> Logo</AppImagePlaceholder>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppImagePlaceholder from '@/components/ui/image-placeholder.component.vue'
import AppBtn from '@/components/ui/app-btn.component.vue'
import { RouteName } from '@/router'
</script>

<style lang="scss">
.home-page {
    .description {
        font-size: 18px;
    }

    .app-container {
        > .flex {
            > div {
                width: 50%;
            }
        }
    }
}
</style>
