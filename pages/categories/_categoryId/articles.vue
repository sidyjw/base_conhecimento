<template>
	<div class="articles-by-category">
		<PageTitle
			icon="far fa-folder" 
			:main="category.name"
			sub="Categoria"
			/>
		<ul>
			<li v-for="article in articles" :key="article.id">
				<ArticleItem :article="article" />
			</li>
		</ul>
		<div class="load-more">
			<button 
				v-if="loadMore" 
				@click="getArticles" 
				class="btn btn-sm btn-outline-primary">
					Carregar Mais Artigos
			</button>
		</div>
	</div>
	</div>
</template>

<script>
	import ArticleItem from '@/components/article/ArticleItem'
	export default{
		name: 'ArticleByCategory',
		components: {
			ArticleItem
		},
		data: () => ({
			category: {},
			articles: [],
			page: 1,
			loadMore: true
		}),
		created(){
			this.category.id = this.$route.params.categoryId 
			this.getCategory()
			this.getArticles()
		},
		methods: {
			getCategory(){
				this.category.name = 'Web Moderno'
				console.log(this.category)
			},
			getArticles(){
				const articles = [
					{
						id: Math.floor(Math.random() * 10000),
						name: 'ABC '
					},
					{
						id: Math.floor(Math.random() * 10000),
						name: 'DEF'
					},
					{
						id: Math.floor(Math.random() * 10000),
						name: 'HIJ'
					},
				]
				this.articles = [...this.articles, ...articles]
				this.page++

				if(this.articles.length > 10)
					this.loadMore = false
			}
		},
		watch: {
			$route(to){
				this.category.id = to.params.id
				this.articles = []
				this.page = 1
				this.loadMore = true
				this.getCategory()
				this.getArticles()
			}
		},	
	}
</script>

<style>
	.articles-by-category ul{
		list-style-type: none;
		padding: 0px;
	}

	.articles-by-category .load-more{
		display: flex;
		flex-flow: column;
		align-items: center;
		margin-top: 25px;
	}
</style>
