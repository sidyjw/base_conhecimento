<template>
	<div class="admin-pages">
		<PageTitle 
			icon="fa fa-cogs" 
			main="Administração do Sistema"
			sub="Cadastros & Cia"
		/>
		<div class="admin-pages-tabs">
			<b-card no-body>
				<b-tabs card>
					<b-tab title="Artigos" active>
						<ArticleAdmin />
					</b-tab>
					<b-tab title="Categorias">
						<CategoryAdmin />
					</b-tab>
					<b-tab title="Usuários">
						<UserAdmin />
					</b-tab>
				</b-tabs>
			</b-card>
		</div>
	</div>
</template>

<script>
	import ArticleAdmin from '@/components/admin/ArticleAdmin'
	import CategoryAdmin from '@/components/admin/CategoryAdmin'
	import UserAdmin from '@/components/admin/UserAdmin'

	export default{
		name: 'Admin',
		components: {
			ArticleAdmin,
			CategoryAdmin,
			UserAdmin
		}
	}
</script>

<style>

</style>