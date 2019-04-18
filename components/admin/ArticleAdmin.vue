<template>
	<div class="article-admin">
		<b-form>
			<input type="hidden" id="article-id" v-model="article.id" />
			<b-row>
				<b-col xs="12">
					<b-form-group
						description="Nome do artigo."
						label="Digite o nome do artigo"
						label-for="article-name"
					>
						<b-form-input
							id="article-name"
							v-model="article.name"
							:readonly="readonly"
						></b-form-input>
					</b-form-group>
					<b-form-group
						description="Descrição do artigo."
						label="Descrição"
						label-for="article-name"
					>
						<b-form-input
							id="article-description"
							v-model="article.description"
							:readonly="readonly"
						></b-form-input>
					</b-form-group>
					<b-form-group
						description="URL da imagem."
						label="Imagem (URL)"
						label-for="article-imageUrl"
					>
						<b-form-input
							id="article-imageUrl"
							v-model="article.imageUrl"
							:readonly="readonly"
						></b-form-input>
					</b-form-group>
					<b-form-group
						v-if="mode === 'save'"
						description="Nome da categoria."
						label="Categoria"
						label-for="article-name"
					>
						<b-form-select
							id="article-name"
							v-model="article.name"
							:options="articles"
						/>
					</b-form-group>
					<b-form-group
						v-if="mode === 'save'"
						description="Nome do autor."
						label="Autor"
						label-for="article-autor"
					>
						<b-form-select
							id="article-autor"
							v-model="article.userId"
							:options="users"
						/>
					</b-form-group>
					<b-form-group label="Conteúdo">
						<VueEditor
							v-model="article.content"
							placeholder="Informe o Conteúdo"
						/>
					</b-form-group>
				</b-col>
			</b-row>
			<b-row>
				<b-col xs="12">
					<b-button
						v-show="mode === 'save'"
						variant="primary"
						@click="save"
						mr-2
						>Salvar</b-button
					>
					<b-button
						v-show="mode === 'remove'"
						variant="danger"
						@click="remove"
						mr-2
						>Excluir</b-button
					>
					<b-button variant="secondary" @click="reset"
						>Cancelar</b-button
					>
				</b-col>
			</b-row>
		</b-form>
		<hr />
		<b-table hover striped :items="articles" ref="table" :fields="fields">
			<template slot="actions" slot-scope="data">
				<div class="d-flex justify-content-around">
					<b-button
						variant="warning"
						@click="loadCategory(data.item)"
						mr-2
						><i class="fas fa-edit"></i
					></b-button>

					<b-button
						variant="danger"
						@click="loadCategory(data.item, 'remove')"
						><i class="fas fa-trash-alt"></i
					></b-button>
				</div>
			</template>
		</b-table>
	</div>
</template>

<script>
import { VueEditor } from 'vue2-editor'

export default {
	name: 'ArticleAdmin',
	components: {
		VueEditor,
	},
	data: () => ({
		mode: 'save',
		article: {
			name: '',
			userId: '',
			description: '',
			imageUrl: '',
		},
		articles: [],
		categories: [],
		users: [],
		page: 1,
		limit: 0,
		count: 0,
		fields: {
			id: {
				label: 'Código',
				sortable: true,
			},
			name: {
				label: 'Nome',
				sortable: true,
			},
			description: {
				label: 'Descrição',
				sortable: true,
			},
			actions: {
				label: 'Ações',
			},
		},
	}),
	mounted() {
		this.loadCategories()
	},
	computed: {
		readonly() {
			return this.mode === 'remove' ? true : false
		},
	},
	methods: {
		save() {
			const method = this.category.id ? 'put' : 'post'
			const id = this.category.id ? `/${this.category.id}` : ''
			// Aqui usa quando tiver o back-end
			// this.$axios[method]()

			//A linha abaixo é temporaria
			if (method === 'put') {
				const categoryIndex = this.categories.findIndex(
					category => category.id === this.category.id,
				)
				this.categories[categoryIndex] = this.category
				this.$refs.table.refresh()
			} else {
				this.category.id = Date.now()
				this.categories.push(this.category)
			}

			this.$toasted.global.defaultSuccess()
			this.reset()
		},
		reset() {
			this.mode = 'save'
			this.category = {}
			// this.loadCategories()
		},
		remove() {
			const categoryId = this.category.id
			// Aqui usa quando tiver o back-end
			//this.$axios.delete()

			//Remover o bloc abaixo
			this.categories = this.categories.filter(
				category => category.id !== categoryId,
			)
			this.$refs.table.refresh()

			this.$toasted.global.defaultSuccess()
			this.reset()
		},
		loadCategory(category, mode = 'save') {
			console.log(category)
			this.mode = mode
			this.category = { ...category }
		},
		loadCategories() {
			const categories = [
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

			this.categories = categories
		},
	},
}
</script>

<style></style>
