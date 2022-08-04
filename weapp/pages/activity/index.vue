<template>
	<u-sticky bgColor="#fff" offset-top="0">
	<u-tabs :list="list1" @change="tabChange">
		<view slot="right" style="padding-left: 4px;" @tap="$u.toast('插槽被点击')">
			<u-icon name="list" size="21" bold></u-icon>
		</view>
	</u-tabs>
	</u-sticky>
	<view class="mainPage" style="padding-top: 10px;">
		<scroll-view scroll-y="true" >
			<activity-item v-for="item  in 100"></activity-item>
		</scroll-view>
	</view>
</template>

<script>
	import ActivityItem from '@/components/activity-item.vue'
	export default {
		components: {
			ActivityItem
		},
		data() {
			return {
				list1: [{
					name: '关注',
				}, {
					name: '推荐',
				}, {
					name: '电影'
				}, {
					name: '科技'
				}, {
					name: '音乐'
				}, {
					name: '美食'
				}, {
					name: '文化'
				}, {
					name: '财经'
				}, {
					name: '手工'
				}]
			}
		},
		methods: {
			tabChange(e) {
				console.log(e);
			}
		}
	}
</script>
