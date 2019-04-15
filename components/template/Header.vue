<template>
	<header class="header">
		<a class="toggle" @click="$emit('toggleMenu')">
			<i class="fa fa-lg" :class="icon"></i>
		</a>
		<h1 class="title">
			<nuxt-link to="/"> {{ title }} </nuxt-link>
		</h1>
		<UserGravatar v-if="!hideUserDropdown" />
	</header>
</template>

<script>
import { mapMutations } from 'vuex'
import UserGravatar from './UserDropdown'
export default {
	name: 'Header',
	props: {
		title: String,
		hideToggle: Boolean,
		hideUserDropdown: Boolean,
	},
	components: { UserGravatar },
	computed: {
		icon() {
			return (this.hideToggle && 'fa-angle-left') || 'fa-angle-down'
		},
	},
}
</script>

<style>
.header {
	grid-area: header;
	background: linear-gradient(to right, #1e469a, #49a7c1);
	display: flex;
	justify-content: center;
	align-items: center;
}
.title {
	font-size: 1.2rem;
	color: #fff;
	font-weight: 100;
	flex-grow: 1;
	text-align: center;
}
.title > a {
	color: inherit;
	text-decoration: none;
}

header.header > a.toggle {
	width: 60px;
	height: 100%;
	color: #fff;
	justify-self: flex-start;
	text-decoration: none;
	display: flex;
	justify-content: center;
	align-items: center;
	transition: background-color 250ms linear;
}

header.header > a.toggle:hover {
	background-color: rgba(0, 0, 0, 0.2);
	color: #fff;
}
</style>
