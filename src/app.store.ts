import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'
import { useRouter } from 'vue-router'
import { RouteName } from '@/router'

export const useAppStore = defineStore('app', () => {
    const router = useRouter()

    const state = reactive({
        isAuth: true,
    })

    function toggleAuth() {
        state.isAuth = !state.isAuth
    }

    watch(
        () => state.isAuth,
        async () => {
            handlePageEvent()
            await router.push(RouteName.Home)
        }
    )

    function handlePageEvent() {
        window.scrollTo({ top: 0, behavior: 'smooth' })
        document.body.scrollTo({ top: 0, behavior: 'smooth' })
    }

    return {
        state,
        toggleAuth,
    }
})
