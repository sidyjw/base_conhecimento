<template>
	<div class="user-admin">
		<b-form>
			<input id="user-id" type="hidden" v-model="user.id" />
			<b-row>
				<b-col md="6" sm="12">
					<b-form-group label="Nome:" label-for="user-name">
						<b-form-input 
							id="user-name" 
							type="text" 
							v-model="user.name" 
							required
							:readonly="readonly" 
							placeholder="Informe o Nome do Usuário..."
							/>
					</b-form-group>
				</b-col>
				<b-col md="6" sm="12">
					<b-form-group label="E-mail:" label-for="user-email">
						<b-form-input 
							id="user-email" 
							type="email" 
							v-model="user.email" 
							required
							:readonly="readonly"  
							placeholder="Informe o E-mail do Usuário..."
							/>
					</b-form-group>
				</b-col>
			</b-row>
			<b-form-checkbox id="user-admin" :readonly="readonly" v-model="user.admin" class="mt-3 mb-3">
				Administrador?
			</b-form-checkbox>
			<b-row>
				<b-col md="6" sm="12">
					<b-form-group label="Senha:" label-for="user-password">
						<b-form-input 
							id="user-password" 
							type="password" 
							v-model="user.password" 
							required
							:readonly="readonly" 
							placeholder="Informe a Senha do Usuário..."
							/>
					</b-form-group>
				</b-col>
				<b-col md="6" sm="12">
					<b-form-group label="Confirmação de Senha:" label-for="user-confirm-password">
						<b-form-input 
							id="user-confirm-password" 
							type="password" 
							v-model="user.confirmPassword" 
							required
							:readonly="readonly" 
							placeholder="Confirme a Senha do Usuário..."
							/>
					</b-form-group>
				</b-col>
			</b-row>
			<b-button variant="primary" v-if="mode === 'save'" @click="save">Salvar</b-button>
			<b-button variant="danger" v-if="mode === 'remove'" @click="remove">Excluir</b-button>
			<b-button class="ml-2" @click="reset">Cancelar</b-button>
		</b-form>
		<hr />
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
			user: {
				admin: false
			},
			users: []
		}),
		mounted(){
			this.loadUsers()

		},
		computed:{
			readonly(){
				return this.mode === 'remove' ? true : false
			}
		},
		methods: {
			reset(){
				this.mode = 'save'
				this.user = {}

				//Depois adicionar a linha abaixo
				// this.loadUsers()
			},
			save(){
				const method = this.user.id ? 'put' : 'post'
				const id = this.user.id ? `/${this.user.id}` : ''
				// Aqui usa quando tiver o back-end
				// this.$axios[method]()

				//A linha abaixo é temporaria
					this.users.push(this.user)

				this.$toasted.global.defaultSuccess()
				this.reset()

			},
			remove(){
				const id = this.user.id
				// Aqui usa quando tiver o back-end
				//this.$axios.delete()

				console.log(id)
				this.$toasted.global.defaultSuccess()
				this.reset()
			},
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