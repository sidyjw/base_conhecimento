<template>
	<div class="home">
		<PageTitle 
			icon="fa fa-home" 
			main="Dashboard"
			sub="Base de conhecimento"
		/>
		<div class="stats">
			<Stat 
				title="Categorias"
				:value="stat.categories"
				icon="fa fa-folder"
				color="color: #d54d50"
			/>
			<Stat 
				title="Artigos"
				:value="stat.articles"
				icon="fa fa-file"
				color="color: #3bc480"
			/>
			<Stat 
				title="Usuários"
				:value="stat.users"
				icon="fa fa-user"
				color="color: #3282cd"
			/>
		</div>
	</div>
</template>

<script>
	import Stat from '@/components/general/Stat'
	export default{
		name: 'Home',
		components: {
			Stat
		},
		data: () => ({
			stat: {}
		}),
		methods: {
			getStats(){
				//Aqui estou mockando uma requisição ao servidor
				return new Promise(resolve => {
					const stat = {
						categories: 3,
						articles: 5,
						users: 2
					}

					setTimeout(() => resolve(stat), 3000)
				})
			}
		},
		async created(){
			this.stat = await this.getStats()
			
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
