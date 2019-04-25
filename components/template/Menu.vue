<template>
	<aside class="menu" v-show="isMenuVisible">
		<div class="menu-filter">
			<i class="fa fa-search fa-lg"></i>
			<input 
				type="text" 
				placeholder="Digite para filtrar..."
				v-model="treeFilter" 
				class="filter-field"/>
		</div>
		<Tree 
			:data="treeData" 
			:options="treeOptions" 
			:filter="treeFilter"
			ref="tree"/>
	</aside>
</template>

<script>
	import { mapGetters } from 'vuex'
	import Tree from 'liquor-tree'

	export default {
		name: 'Menu',
		components: {
			Tree
		},
		data(){
			return {
				treeData: this.getTreeData(),
				treeFilter: '',
				treeOptions: {
					propertyNames: {'text': 'name'},
					filter: { emptyText: 'Categoria não encontrada' }
				}
			}
		},
		computed: {
			...mapGetters(['isMenuVisible'])
		},
		methods: {
			getTreeData(){
				const items =  [
		            {name: 'API'},
		            {name: 'Back-End'},
		            {name: 'Front-End', children: [
		              {name: 'CSS'},
		              {name: 'FlexBox'},
		              {name: 'VueJS'},
		            ]},
		        ]
				return Promise.resolve(items)
			}
		}
	}
</script>

<style>
	.menu{
		grid-area: menu;
		background: linear-gradient(to right, #232526, #414345);
		display: flex;
		flex-flow: column wrap; 
	}
	
	.menu .tree-anchor,
	.menu .tree-anchor:hover{
		color: #FFF;
		text-decoration: none;
	}
	.menu .tree-node.selected > .tree-content,
	.menu .tree-node .tree-content:hover{
		background-color: rgba(255, 255, 255, 0.2)
	}

	.tree-arrow.has-child{
		filter: brightness(2);
	}

	.menu .menu-filter {
		display: flex;
		justify-content: center;
		align-items: center;
		margin: 10px;
		padding-bottom: 5px;
		border-bottom: 1px solid #AAA;
	}

	.menu .menu-filter i {
		color: #AAA;
		margin-right: 10px;
	}
	.menu input {
		color: #CCC;
		font-size: 1.1rem;
		border: 0;
		outline: 0;
		width: 100%;
		background: transparent;
	}
	.tree-filter-empty{
		color: #CCC;
		margin-left: 10px;
		font-size: 1.2rem;
	}
</style>