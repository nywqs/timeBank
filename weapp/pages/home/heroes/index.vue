<template>
	<u-sticky>
		<u-tabs :list="list1" @click="click" scrollable="false"></u-tabs>
	</u-sticky>
</template>

<script>
	export default {
		data() {
			return {
				list1: [{
					name: '服务次数',
				}, {
					name: '服务时长',
				}, {
					name: '服务评价'
				}]
			}
		},
		methods: {
			click(){}
		}
	}
</script>

<style lang="scss">

</style>
