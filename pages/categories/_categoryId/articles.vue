<template>
	<div class="articles-by-category">
		<PageTitle 
			icon="far fa-folder" 
			:main="category.name"
			sub="Categoria"
			/>
	</div>
	</div>
</template>

<script>
	export default{
		name: 'ArticleByCategory',
		data: () => ({
			category: {},
			articles: [],
			page: 1,
			loadMore: true
		}),
		mounted(){
			this.category.id = this.$route.params.categoryId 
			this.getCategory()
		},
		methods: {
			getCategory(){
				console.log(this.category)
			}
		}	
	}
</script>

<style>
	.stats{
		display: flex;
		justify-content: space-between;
		flex-flow: wrap;
	}
</style>
