<template>
	<view class="mainPage">
		<u-swiper :list="list3" indicator indicatorMode="line" circular height="140"></u-swiper>
		<u-gap height="10"></u-gap>
		<view class="nav">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(item,index) in navs" :key="index" @click="navito(item)">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item.name" :size="22"></u-icon>
					<text class="grid-text">{{item.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<u-gap height="20"></u-gap>
		<view class="notice">
			<view class="notice-title">
				公告
			</view>
			<view class="notice-content">
				欢迎加入弘文尚德时间银行！请点击本公告进入本机构详情页，在详情页上点击“申请加入”即可加入
			</view>
		</view>
		<u-gap height="20"></u-gap>
		<view class="jingxuan">
			<view class="main-title">
				精选
			</view>
			<view class="box">
				<view class="box-l">
					<view class="box1" @click="goArticle()">
						<image src="https://cdn.uviewui.com/uview/album/1.jpg" model="scaleToFill"></image>
					</view>
					<view class="box2" @click="goArticle()">
						<image src="https://cdn.uviewui.com/uview/album/1.jpg" model="scaleToFill"></image>
					</view>
				</view>
				<view class="box-r">
					<view class="box1" @click="goArticle()">
						<image src="https://cdn.uviewui.com/uview/album/1.jpg" model="scaleToFill"></image>
					</view>
					<view class="box2" @click="goArticle()">
						<image src="https://cdn.uviewui.com/uview/album/1.jpg" model="scaleToFill"></image>
					</view>
					<view class="box3" @click="goArticle()">
						<image src="https://cdn.uviewui.com/uview/album/1.jpg" model="scaleToFill"></image>
					</view>
				</view>
			</view>
		</view>
		<u-gap height="20"></u-gap>
		<view class="gongyixiangmu">
			<view class="main-title">
				公益项目
			</view>
			<u-gap height="10"></u-gap>
			<view class="list">
				<gyxm-item v-for="(item,index) in 5" :key="index"  @tap="projectDetail"></gyxm-item>
			</view>
		</view>
	</view>
</template>

<script>
	import GyxmItem from '@/components/gyxm-item.vue';
	export default {
		components: {
			GyxmItem
		},
		data() {
			return {
				list3: [
					'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					'https://cdn.uviewui.com/uview/swiper/swiper1.png',
				],
				navs: [{
						name: 'photo',
						title: '扫一扫',
						url: ''
					},
					{
						name: 'lock',
						title: '日程表',
						url: '../../home/schedule/index'
					},
					{
						name: 'star',
						title: '英雄榜',
						url: '../../home/heroes/index'
					},
					{
						name: 'hourglass',
						title: '活动签到',
						url: '../../home/sigin/index'
					}
				],
			}
		},
		methods: {
			navito(item) {
				uni.navigateTo({
					url: item.url
				})
			},
			goArticle() {
				uni.$u.route({
					url: "pages/common/article",
					params: {
						name: 'lisa'
					}
				})
			},
			projectDetail(){
				uni.navigateTo({
					url:"/pages/project/detail"
				})
			}
		}
	}
</script>
<style lang="scss">
	.nav{
		width: 100%;
	}
	.notice {
		display: flex;
		background-color: goldenrod;
		border-radius: 5px;
		padding: 10px;
		height: 60px;

		.notice-title {
			width: 28px;
			line-height: 30px;
			vertical-align: middle;
			font-weight: 600;
			color: white;
		}

		.notice-content {
			flex: 1;
			font-size: 14px;
			line-height: 20px;
			color: white;
		}
	}

	.jingxuan {
		.box {
			display: flex;

			.box-l {
				flex: 1;

				.box1 {
					height: calc(100vw/2 - 55px);
					width: calc((100vw - 30px)/2);
					overflow: hidden;
				}

				.box2 {
					margin-top: 10px;
					height: 55px;
					width: calc((100vw - 30px)/2);
					overflow: hidden;
				}
			}

			.box-r {
				flex: 1;

				.box1,
				.box2,
				.box3 {
					margin-top: 10px;
					height: 66px;
					width: calc((100vw - 25px)/2);
					overflow: hidden;
				}

				.box1 {
					margin-top: 0px;
				}
			}
		}
	}
</style>
