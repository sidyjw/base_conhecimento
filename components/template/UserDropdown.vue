<template>
	<div class="user-dropdown">
		<div class="user-button">
			<span class="d-none d-sm-block">{{user.name}}</span>
			<div class="user-dropdown-img">
				<Gravatar :email="user.email" alt="user" />
			</div>
			<i class="fa fa-angle-down"></i>
		</div>
		<div class="user-dropdown-content">
			<nuxt-link to="/admin">
				<i class="fa fa-cogs"></i>
				 Administração
			</nuxt-link>
			<nuxt-link to="/">
				<i class="fa fa-sign-out"></i>
				Sair
			</nuxt-link>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Gravatar from 'vue-gravatar'

	export default {
		name: 'UserDropdown',
		components: { Gravatar },
		computed: {
			...mapGetters(['user']),
		}
	}
</script>

<style>
	.user-dropdown{
		height: 100%;
		position: relative;
	}
		.user-dropdown:hover {
			background-color: rgba(0, 0, 0, 0.2)
		}

	.user-button{
		display: flex;
		align-items: center;
		color: #FFF;
		font-weight: 100;
		height: 100%;
		padding: 0 20px;
	}

	.user-dropdown-img {
		margin: 0 10px;
	}

	.user-dropdown-img > img {
		max-height: 37px;
		border-radius: 5px;
	}

	.user-dropdown-content{
		position: absolute;
		right: 0px;
		background-color: #F9F9F9;
		min-width: 170px;
		box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
		padding: 10px;
		z-index: 1;
		display: flex;
		flex-flow: column wrap;
		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.5s linear;
	}

	.user-dropdown:hover  .user-dropdown-content{
		visibility: visible;
		opacity: 1;
	}

	.user-dropdown-content a {
		text-decoration: none;
		color: #000;
		padding: 10px
	}

	.user-dropdown-content a:hover{
		background-color: #EDEDED
	}
</style>
