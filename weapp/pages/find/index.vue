<template>
	<view class="mainPage">
		<u-sticky bgColor="#fff" offset-top="-2">
			<view class="team">
				<view class="main-title">
					精选
				</view>
				<u-gap height="20"></u-gap>
				<u-scroll-list @right="right" @left="left" :indicator="false">
					<view class="scroll-list" style="flex-direction: row;">
						<view class="scroll-list__goods-item" v-for="(item, index) in list" :key="index"
							:class="[(index === 9) && 'scroll-list__goods-item--no-margin-right']">
							<image class="scroll-list__goods-item__image" :src="item.thumb"></image>
							<u--text :lines="1" :text="item.price" type="warning"></u--text>
						</view>
					</view>
				</u-scroll-list>
			</view>
			<view class="activity">
				<view class="main-title">
					精选
				</view>
				<u-tabs :list="list1" @change="tabChange">
					<view slot="right" style="padding-left: 4px;" @tap="$u.toast('插槽被点击')">
						<u-icon name="list" size="21" bold></u-icon>
					</view>
				</u-tabs>
			</view>
		</u-sticky>
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
				console.log(e);
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
</style>
