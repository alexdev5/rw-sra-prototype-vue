import { defineStore } from 'pinia'
import { reactive } from 'vue'

export const useAppStore = defineStore('app', () => {
    const state = reactive({
        isAuth: false,
    })

    function toggleLogin() {
        state.isAuth = !state.isAuth
    }

    return {
        state,
        toggleLogin,
    }
})
