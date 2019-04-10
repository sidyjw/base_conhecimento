<template>
	<aside class="menu" v-show="isMenuVisible">
		
	</aside>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		name: 'Menu',
		computed: {
			...mapGetters(['isMenuVisible'])
		}
	}
</script>

<style>
	.menu{
		grid-area: menu;
		background: linear-gradient(to right, #232526, #414345);
		display: flex;
		flex-flow: column wrap; 
	}

</style>