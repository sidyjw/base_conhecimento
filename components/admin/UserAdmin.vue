<template>
	<div class="user-admin">
		<b-table hover striped :items="users" :fields="fields"/>
	</div>
</template>

<script>
	export default{
		name: 'UserAdmin',
		data: () => ({
			mode: 'save',
			fields: [
				{ key: 'id', label: 'Código', sortable: true },
				{ key: 'name', label: 'Nome', sortable: true },
				{ key: 'email', label: 'E-mail', sortable: true },
				{ 
					key: 'admin', label: 'Administrador', sortable: true,
					formatter: value => value ? 'Sim' : 'Não'
				},
				{ key: 'actions', label: 'Ações'}

			],
			user: {},
			users: []
		}),
		mounted(){
			this.loadUsers()

		},
		methods: {
			loadUsers(){
				//Estou mockando uma requisição pro servidor
				const users = [
					{
						admin: true,
						email: "sid@test.com",
						id: 1,
						name: "Sidiney Silva"
					},
					{
						admin: false,
						email: "tiago@test.com",
						id: 2,
						name: "Tiago Silva"
					},
					{
						admin: false,
						email: "joao@test.com",
						id: 3,
						name: "João Silva"
					}
				]
				this.users = users			
			}
		}
	}
</script>

<style>

</style>