<template>
    <div class="home-page">
        <div class="app-container">
            <div class="flex gap-32">
                <div class="grid gap-32">
                    <h1>
                        <span>АІС склад-холодильник</span><br />
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
                            :to="{ name: RouteName.Page_2 }"
                            >Докладніше
                        </AppBtn>
                    </div>
                </div>
                <AppImagePlaceholder>Logo</AppImagePlaceholder>
            </div>
        </div>

        <div class="app-container container-md">
            <h2 class="ta-center mb-16">Про нас</h2>
            <p class="description">
                Команда, що створює інтелектуальні рішення для зберігання
                товарів у холодильних умовах. Ми віримо, що автоматизація — це
                не лише про ефективність, а й про турботу.
            </p>
        </div>

        <section class="our-principe">
            <div class="app-container">
                <h2 class="ta-center mb-16">Наші принципи</h2>

                <div class="app-card-wrapper grid gap-32">
                    <div class="app-card">
                        Ми про безпеку товарів: температурний режим, вологість,
                        контроль строків зберігання — усе це наша
                        відповідальність. Ми впевнені, що жодна партія не має
                        бути втрачена через людський фактор.
                    </div>
                    <div class="app-card">
                        Ми створюємо рішення, що полегшують роботу людей, а не
                        замінюють її. Автоматичні сповіщення, облік товарів,
                        прогнозування термінів — усе для швидкості, точності та
                        зручності.
                    </div>
                    <div class="app-card">
                        Інтерфейс повинен бути інтуїтивним. Ми проти складних
                        форм, заплутаних процесів і прихованих кнопок. Кожен
                        користувач — від комірника до адміністратора — має
                        відчувати себе впевнено.
                    </div>
                    <div class="app-card">
                        Ми про безпеку товарів: температурний режим, вологість,
                        контроль строків зберігання — усе це наша
                        відповідальність. Ми впевнені, що жодна партія не має
                        бути втрачена через людський фактор.
                    </div>
                    <div class="app-card">
                        Точність даних — основа наших рішень. Система зберігає
                        історію всіх дій, автоматично формує звіти та попереджає
                        про відхилення ще до того, як це стане проблемою.
                    </div>
                    <div class="app-card">
                        Інтерфейс повинен бути інтуїтивним. Ми проти складних
                        форм, заплутаних процесів і прихованих кнопок. Кожен
                        користувач — від комірника до адміністратора — має
                        відчувати себе впевнено.
                    </div>
                    <div class="app-card">
                        Точність даних — основа наших рішень. Система зберігає
                        історію всіх дій, автоматично формує звіти та попереджає
                        про відхилення ще до того, як це стане проблемою.
                    </div>
                    <div class="app-card">
                        Ми завжди поруч. Підтримка 24/7, навчання персоналу,
                        адаптація під реальні процеси вашого складу — наша
                        система масштабується разом із вашим бізнесом.
                    </div>
                    <div class="app-card">
                        Ми про безпеку товарів: температурний режим, вологість,
                        контроль строків зберігання — усе це наша
                        відповідальність. Ми впевнені, що жодна партія не має
                        бути втрачена через людський фактор.
                    </div>
                </div>
            </div>
        </section>

        <div class="app-container">
            <AppContactForm />
        </div>
    </div>
</template>

<script lang="ts" setup>
import AppImagePlaceholder from '@/components/ui/image-placeholder.component.vue'
import AppBtn from '@/components/ui/app-btn.component.vue'
import AppContactForm from '@/components/layout/contact-form.component.vue'

import { RouteName } from '@/router'
import { useAppStore } from '@/app.store.ts'

const store = useAppStore()
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

        + .app-container {
            margin-block: 60px;
        }
    }

    section {
        padding-block: 24px 32px;
        margin-block: 60px;
    }

    .our-principe {
        background: #dfe9f1;
    }
}

.app-card-wrapper {
    grid-template-columns: repeat(auto-fit, 400px);

    .app-card {
        background: #fff;
        padding: 20px;
        border: 1px solid #e0e0e0;
        border-radius: 6px;
    }
}
</style>
