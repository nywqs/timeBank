<template>
	<view class="">
		<u-sticky bgColor="#fff" offset-top="0">
			<fui-tabs :tabs="list1" :current="tabCurrent" @change="tabChange" :scroll="true"></fui-tabs>
		</u-sticky>
		<swiper :indicator-dots="false" :current="tabCurrent" class="swiper" @change="swiperChange">
			<swiper-item v-for="o in list1">
				<view class="mainPage" style="padding-top: 10px;">
					<scroll-view scroll-y="true">
						<activity-item v-for="item  in 5"></activity-item>
					</scroll-view>
				</view>
			</swiper-item>
		</swiper>
		
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
				tabCurrent:0,
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
				this.tabCurrent = e.index
			},
			swiperChange(e){
				this.tabCurrent = e.detail.current
			}
		}
	}
</script>
<style scoped lang="scss">
	.swiper{height: calc(100vh - 150px);}
</style>