<template>
	<div class="category-admin">
		<b-form>
			<input type="hidden" id="category-id" v-model="category.id" />
			<b-row>
				<b-col xm="12">
					<b-form-group
						description="Nome da categoria."
						label="Digite o nome da categoria"
						label-for="category-name"
					>
						<b-form-input
							id="category-name"
							v-model="category.name"
						></b-form-input>
					</b-form-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col xm="12">
					<b-button
						v-show="mode === 'save'"
						variant="primary"
						@click="saveCategory"
						mr-2
						>Salvar</b-button
					>
					<b-button
						v-show="mode === 'delete'"
						variant="danger"
						@click="saveCategory"
						mr-2
						>Excluir</b-button
					>
					<b-button variant="secondary" @click="clearCategory"
						>Cancelar</b-button
					>
				</b-col>
			</b-row>
		</b-form>
		<hr />
		<b-table
			hover
			striped
			:items="filteredCategory"
			ref="table"
			:fields="fields"
		>
			<template slot="actions" slot-scope="data">
				<div class="d-flex justify-content-around">
					<b-button variant="warning" mr-2
						><i class="fas fa-edit"></i
					></b-button>

					<b-button variant="danger"
						><i class="fas fa-trash-alt"></i
					></b-button>
				</div>
			</template>
		</b-table>
	</div>
</template>

<script>
export default {
	name: 'CategoryAdmin',
	data: () => ({
		mode: 'save',
		category: {
			id: null,
			name: '',
		},
		fields: {
			id: {
				label: 'Código',
				sortable: true,
			},
			name: {
				label: 'Nome',
				sortable: true,
			},
			path: {
				label: 'Caminho',
				sortable: true,
			},
			actions: {
				label: 'Ações',
			},
		},
		categoryes: [],
	}),
	mounted() {
		this.loadCategoryes()
	},
	computed: {
		filteredCategory() {
			if (this.category.name) {
				const result = this.categoryes.filter(category =>
					category.name
						.toLowerCase()
						.includes(this.category.name.toLowerCase()),
				)
				return result
			}

			return this.categoryes
		},
	},
	methods: {
		saveCategory() {
			const method = this.category.id ? 'put' : 'post'
			const id = this.category.id ? `/${this.category.id}` : ''
			// Aqui usa quando tiver o back-end
			// this.$axios[method]()

			//A linha abaixo é temporaria
			if (method === 'put') {
				const categoryIndex = this.categoryes.findIndex(
					category => category.id === this.category.id,
				)
				this.categoryes[categoryIndex] = this.category
				this.$refs.table.refresh()
			} else {
				this.category.id = Date.now()
				this.categoryes.push(this.category)
			}

			this.$toasted.global.defaultSuccess()
			this.clearCategory()
		},
		clearCategory() {
			this.mode = 'save'
			this.category = {}
		},
		loadCategoryes() {
			const categoryes = [
				{
					id: 1,
					name: 'Curso Android',
					path: 'Curso Android',
					actions: null,
				},
				{
					id: 2,
					name: 'ABC',
					path: 'Curso Android > ABC',
					actions: null,
				},
				{
					id: 3,
					name: 'Instalação',
					path: 'Curso Android > Instalação',
					actions: null,
				},
			]

			this.categoryes = categoryes
		},
	},
}
</script>

<style></style>
