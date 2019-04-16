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
			<b-form-checkbox
				id="user-admin"
				:disabled="readonly"
				v-model="user.admin"
				class="mt-3 mb-3"
			>
				Administrador?
			</b-form-checkbox>
			<b-row v-if="!readonly">
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
					<b-form-group
						label="Confirmação de Senha:"
						label-for="user-confirm-password"
					>
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
			<b-row>
				<b-col xs="12">
					<b-button
						variant="primary"
						v-if="mode === 'save'"
						@click="save"
						>Salvar</b-button
					>
					<b-button
						variant="danger"
						v-if="mode === 'remove'"
						@click="remove"
						>Excluir</b-button
					>
					<b-button class="ml-2" @click="reset">Cancelar</b-button>
				</b-col>
			</b-row>
		</b-form>
		<hr />
		<b-table hover striped :items="users" :fields="fields" ref="table">
			<template slot="actions" slot-scope="data">
				<div class="d-flex justify-content-around">
					<b-button
						variant="warning"
						@click="loadUser(data.item)"
						class="mr-2"
						><i class="fas fa-edit"></i
					></b-button>
					<b-button
						variant="danger"
						@click="loadUser(data.item, 'remove')"
						><i class="fas fa-trash-alt"></i
					></b-button>
				</div>
			</template>
		</b-table>
	</div>
</template>

<script>
export default {
	name: 'UserAdmin',
	data: () => ({
		mode: 'save',
		fields: [
			{ key: 'id', label: 'Código', sortable: true },
			{ key: 'name', label: 'Nome', sortable: true },
			{ key: 'email', label: 'E-mail', sortable: true },
			{
				key: 'admin',
				label: 'Administrador',
				sortable: true,
				formatter: value => (value ? 'Sim' : 'Não'),
			},
			{ key: 'actions', label: 'Ações' },
		],
		user: {},
		users: [],
	}),
	mounted() {
		this.loadUsers()
	},
	computed: {
		readonly() {
			return this.mode === 'remove' ? true : false
		},
	},
	methods: {
		loadUser(user, mode = 'save') {
			console.log(user)
			this.mode = mode
			this.user = { ...user }
		},
		reset() {
			this.mode = 'save'
			this.user = {}

			//Depois adicionar a linha abaixo
			// this.loadUsers()
		},
		save() {
			const method = this.user.id ? 'put' : 'post'
			const id = this.user.id ? `/${this.user.id}` : ''
			// Aqui usa quando tiver o back-end
			// this.$axios[method]()

			//A linha abaixo é temporaria
			if (method === 'put') {
				const userIndex = this.users.findIndex(
					user => user.id === this.user.id,
				)
				this.users[userIndex] = this.user
				this.$refs.table.refresh()
			} else {
				this.users.push(this.user)
			}

			this.$toasted.global.defaultSuccess()
			this.reset()
		},
		remove() {
			const userId = this.user.id
			// Aqui usa quando tiver o back-end
			//this.$axios.delete()

			//Remover o bloc abaixo
			this.users = this.users.filter(user => user.id !== userId)
			this.$refs.table.refresh()

			this.$toasted.global.defaultSuccess()
			this.reset()
		},
		loadUsers() {
			//Estou mockando uma requisição pro servidor
			const users = [
				{
					admin: true,
					email: 'sid@test.com',
					id: 1,
					name: 'Sidiney Silva',
				},
				{
					admin: false,
					email: 'tiago@test.com',
					id: 2,
					name: 'Tiago Silva',
				},
				{
					admin: false,
					email: 'joao@test.com',
					id: 3,
					name: 'João Silva',
				},
			]
			this.users = users
		},
	},
}
</script>

<style></style>
