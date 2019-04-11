<template>
	<div class="stat">
		<div class="stat-icon">
			<i :class="icon" :style="color"></i>
		</div>
		<div class="stat-info">
			<span class="stat-title">{{ title }}</span>
			<span class="stat-value">{{ value }}</span>
		</div>
	</div>
</template>

<script>
	export default{
		name: 'Stat',
		props: {
			title: {
				required: true,
				type: String
			},
			value: {
				required: true,
				type: Number,
				default: 0
			},
			icon: String,
			color: {
				type: [String, Object],
				default: () => ({color: '#000'})
			}
			

		},
		// computed: {
		// 	style(){
		// 		return `color: ${this.color || '#000'}`
		// 	}
		// }
	}
</script>

<style>
	.stat {
		flex: 1;
		display: flex;
		border-radius: 8px;		
		margin-right: 20px;
		margin-bottom: 20px;
		background-color: #FFF;
		padding: 20px;
		border: 1px solid rgba(0, 0, 0, 0.2);
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);
	}

	.stat-icon{
		display: flex;
		align-items: center;
	}

		.stat-icon i {
			font-size: 3rem;
		}

	.stat-info{
		flex: 1;
		display: flex;
		flex-flow: column;
		align-items: flex-end;
	}

	.stat-title {
		font-size: 1rem;
	}

	.stat-value {
		font-size: 2rem;
	}
</style>