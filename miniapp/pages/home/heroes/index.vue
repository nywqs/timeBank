<template>
	<view class="">
		<u-sticky bgColor="#fff">
			<fui-tabs :tabs="list1" @change="click"></fui-tabs>
		</u-sticky>
		<u-gap height="10"></u-gap>
		<view class="mainPage">
			<scroll-view scroll-y="true">
				<heroes-item v-for="item in 100"></heroes-item>
			</scroll-view>
		</view>
	</view>
</template>

<script>
	
	import HeroesItem from "@/pages/home/heroes/components/heroes-item.vue";
	export default {
		components: {
			HeroesItem
		},
		data() {
			return {
				list1: [{
					name: '服务次数',
				}, {
					name: '服务时长',
				}, {
					name: '服务评价'
				}],
				name: 123
			}
		},
		methods: {
			click(e) {

			}
		}
	}
</script>

<style lang="scss" scoped>
	
</style>
