import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { loggedIn: false }
    },

    actions: {
        login() {
            this.loggedIn= true
        },
        logout() {
            this.loggedIn= false
        }

    }
})