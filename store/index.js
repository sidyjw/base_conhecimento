export const state = () => ({
    isMenuVisible: true,
    user: {
        name: 'Usuário Mock',
        email: 'mock@cod3r.com.br',
    },
})

export const mutations = {
    toggleMenu(state, isVisible) {
        if (isVisible === undefined) {
            state.isMenuVisible = !state.isMenuVisible
        } else {
            state.isMenuVisible = isVisible
        }
    },
}

export const getters = {
    isMenuVisible({ isMenuVisible }) {
        return isMenuVisible
    },
    user({ user }) {
        return user
    },
}
