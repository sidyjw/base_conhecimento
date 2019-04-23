<template>
	<div class="article-by-id">
		<PageTitle
			icon="far fa-folder" 
			:main="article.name"
			:sub="article.description"
			/>
		<div class="article-content" v-html="article.content">
		</div>
	</div>
	</div>
</template>

<script>
	export default{
		name: 'ArticleById',
		data: () => ({
			article: {},
		}),
		created(){
			const article = `
				<h1>Olá mundo</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</p>
				<pre>
					if(true) { 
						console.log('Hello')
					}
				</pre>
			`
			this.article.content = article
				
		},
		methods: {
			
		}	
	}
</script>

<style>
	.article-content{
		background-color: #FFF;
		border-radius: 8px;
		padding: 25px;
	}

	.article-content pre {
		padding: 20px;
		border-radius: 8px;
		font-size: 1rem;
	}

	.article-content img {
		max-width: 100%;
	}

	.article-content :last-child{
		margin-bottom: 0;
	}
</style>
