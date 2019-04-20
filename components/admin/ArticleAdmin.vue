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
						label-for="article-category"
					>
						<b-form-select
							id="article-category"
							v-model="article.categoryId"
							:options="categories"
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
					<b-form-group label="Conteúdo" v-if="mode === 'save'">
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
						@click="loadArticle(data.item)"
						mr-2
						><i class="fas fa-edit"></i
					></b-button>

					<b-button
						variant="danger"
						@click="loadArticle(data.item, 'remove')"
						><i class="fas fa-trash-alt"></i
					></b-button>
				</div>
			</template>

		</b-table>
			<b-row>
				<b-col>
					<b-pagination
					  size="md"
				      v-model="page"
				      :total-rows="count"
				      :per-page="limit"
				      aria-controls="my-table"
				    ></b-pagination>	
				</b-col>
			</b-row>
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
		page: 1,
		limit: 2,
		count: 6,
		article: {
			id: null,
			articleId: '',
			categoryId: '',
			name: '',
			description: '',
			imageUrl: '',
			content: ''
		},
		articles: [],
		categories: [],
		users: [],
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
	watch:{
		page(){
			this.loadArticles()
		}
	},
	mounted() {
		this.loadCategories()
		this.loadArticles()
		this.loadUsers()
	},
	computed: {
		readonly() {
			return this.mode === 'remove' ? true : false
		},
	},
	methods: {
		save() {
			const method = this.article.id ? 'put' : 'post'
			const id = this.article.id ? `/${this.article.id}` : ''
			// Aqui usa quando tiver o back-end
			// this.$axios[method]()

			//A linha abaixo é temporaria
			if (method === 'put') {
				const categoryIndex = this.categories.findIndex(
					category => category.id === this.article.id,
				)
				this.categories[categoryIndex] = this.article
				this.$refs.table.refresh()
			} else {
				this.article.id = Date.now()
				this.categories.push(this.article)
			}

			this.$toasted.global.defaultSuccess()
			this.reset()
		},
		reset() {
			this.mode = 'save'
			this.article = {}
			// this.loadCategories()
		},
		remove() {
			const categoryId = this.article.id
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
		loadArticle(article, mode = 'save') {
			console.log(article)
			this.mode = mode
			this.article = { ...article }
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

			this.categories = categories.map(category => ({
				text: category.path,
				value: category.id
			}))
		},
		loadArticles() {
			const page = this.page - 1
			const articles = [
				{
					id: 1,
					name: 'Dez motivos para usar VueJS',
					description: 'Uma lista que prova o quão incrível é o Vue...',
					actions: null,
				},
				{
					id: 2,
					name: 'ReactJS - Por que é tão popular?',
					description: 'Iremos ver qual é o motivo dessa lib ter se popularizado tanto',
					actions: null,
				},
				{
					id: 3,
					name: 'Angular - O ínicio de uma nova Era',
					description: 'Por que podemos dizer que o Angular marcou o ínicio de uma nova era no Front-End',
					actions: null,
				},
			]

			this.articles = articles.slice(page, this.limit)
		},
		loadUsers(){
			const users = [
				{
					id: 1,
					name: 'Sidiney',
					email: 'sid@test.com'
				},
				{
					id: 2,
					name: 'Alan',
					email: 'alan@test.com'
				},
			]

			this.users = users.map(user => ({
				value: user.id,
				text: `${user.name} - ${user.email}`
			}))
		}
	},
}
</script>

<style></style>
