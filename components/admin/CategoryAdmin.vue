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
					<b-button variant="primary" @click="saveCategory" mr-2
						>Salvar</b-button
					>
					<b-button variant="secondary" @click="clearCategory"
						>Cancelar</b-button
					>
				</b-col>
			</b-row>
		</b-form>
		<hr />
		<b-table hover :items="categoryes" :fields="fields">
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
	methods: {
		clearCategory() {
			this.category = {}
		},
		saveCategory() {
			this.category.id = Date.now()
			this.categorys.push(this.category)
			this.clearCategory()
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
