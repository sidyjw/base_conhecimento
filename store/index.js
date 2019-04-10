export const state = () => ({
	isMenuVisible: true,
})

export const mutations = {
	toggleMenu( state , isVisible){

		if(isVisible === undefined){
			state.isMenuVisible = !state.isMenuVisible
		} else {
			state.isMenuVisible = isVisible
		}

	}
}

export const getters = {
	isMenuVisible({ isMenuVisible }){
		return isMenuVisible
	}
}