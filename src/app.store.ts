import { defineStore } from 'pinia'
import { reactive, watch } from 'vue'

export const useAppStore = defineStore('app', () => {
    const state = reactive({
        isAuth: true,
    })

    function toggleAuth() {
        state.isAuth = !state.isAuth
    }

    watch(
        () => state.isAuth,
        () => {
            handlePageEvent()
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
