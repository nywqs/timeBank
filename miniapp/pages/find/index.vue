<template>
	<view class="mainPage">
		<u-sticky bgColor="#fff" offsetTop="0">
			<view class="team">
				<view class="main-title">
					志愿团队
				</view>
				<u-gap height="10"></u-gap>
				<u-scroll-list @right="right" @left="left" :indicator="false">
					<view class="scroll-list" style="flex-direction: row;">
						<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index"
							:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']" @click="teamDetail()">
							<image class="scroll-list__goods-item__image" :src="item.thumb"></image>
							<u--text :lines="1" :text="item.price" type="warning"></u--text>
						</view>
					</view>
				</u-scroll-list>
			</view>
			<view class="activity">
				<view class="main-title">
					服务信息
				</view>
				<fui-tabs :tabs="list1" @change="tabChange" :current="tabCurrent" :scroll="true"></fui-tabs>
			</view>
		</u-sticky>
		<swiper :indicator-dots="false" :current="tabCurrent" class="swiper" @change="swiperChange">
			<swiper-item v-for="o in list1">
				<view class="mainPage" style="padding-top: 10px;">
					<scroll-view scroll-y="true">
						<activity-item v-for="item  in 5" @tap="serviceDetail"></activity-item>
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
				list: [{
					price: '武汉爱心厨房',
					thumb: 'https://cdn.uviewui.com/uview/goods/1.jpg'
				}, {
					price: '关爱儿童',
					thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
				}, {
					price: 'XXX篮球队',
					thumb: 'https://cdn.uviewui.com/uview/goods/6.jpg'
				}, {
					price: '信阳恒心社区',
					thumb: 'https://cdn.uviewui.com/uview/goods/5.jpg'
				}, {
					price: '信阳市志愿者协会',
					thumb: 'https://cdn.uviewui.com/uview/goods/2.jpg'
				}],
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
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			tabChange(e) {
				this.tabCurrent = e.index
			},
			swiperChange(e){
				console.log(e);
				this.tabCurrent = e.detail.current
			},
			teamDetail(){
				uni.navigateTo({
					url:"/pages/team/index"
				})
			},
			serviceDetail(){
				uni.navigateTo({
					url:"/pages/service/detail"
				})
			}
		}
	}
</script>

<style lang="scss">
	.scroll-list {
		@include flex(column);

		&__goods-item {
			margin-right: 20px;

			&__image {
				width: 60px;
				height: 60px;
				border-radius: 4px;
			}

			&__text {
				color: #f56c6c;
				text-align: center;
				font-size: 3px;
				margin-top: 5px;
			}
		}
	}
	.swiper{
		height: calc(100vh - 320px);
	}
	.activity{
		padding-bottom: 10px;
	}
</style>
