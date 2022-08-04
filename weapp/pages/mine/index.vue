<template>
	<view>
		<view class="header">
			<view class="header-info">
				<view class="pic">
					<u-avatar :src="src" size="80"></u-avatar>
				</view>
				<view class="info">
					<view class="nickname item">
						程永磊
					</view>
					<view class="nickname item">
						服务0次| 时长0小时
					</view>
					<view class="rate item">
						服务评价 <u-rate :count="count" v-model="value"></u-rate>
					</view>
				</view>
			</view>
			<u-grid :border="false" @click="click">
				<u-grid-item v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<u-gap height="5" bgColor="#f1f1f1"></u-gap>
		<view class="order-status">
			<u-grid :border="false" @click="click" col="4">
				<u-grid-item v-for="(baseListItem,baseListIndex) in orderStatus" :key="baseListIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="22"></u-icon>
					<text class="grid-text">{{baseListItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		<u-gap height="5" bgColor="#f1f1f1"></u-gap>
		<view class="actions">
			<u-cell-group>
				<u-cell icon="setting-fill" title="我的活动" :isLink="true"></u-cell>
				<u-cell icon="integral-fill" title="我的钱包" :isLink="true"></u-cell>
				<u-cell icon="integral-fill" title="我的团队" :isLink="true"></u-cell>
				<u-cell icon="integral-fill" title="我的证书" :isLink="true"></u-cell>
				<u-cell icon="integral-fill" title="我的兑换" :isLink="true"></u-cell>
				<u-cell icon="integral-fill" title="我的邀请码" :isLink="true"></u-cell>
			</u-cell-group>
		</view>
		<view class="copyright">
			技术支持：信阳市联创海鹏科技有限公司
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: 'https://cdn.uviewui.com/uview/album/1.jpg',
				count: 6,
				value: 2,
				baseList: [{
						name: 'photo',
						title: '收藏'
					},
					{
						name: 'lock',
						title: '关注'
					},
					{
						name: 'star',
						title: '足迹'
					},
				],
				orderStatus: [{
						name: 'photo',
						title: '未完成'
					},
					{
						name: 'lock',
						title: '已完成'
					},
					{
						name: 'star',
						title: '已结算'
					},
					{
						name: 'star',
						title: '争议'
					},
				]
			}
		},
		methods: {
			click() {}
		}
	}
</script>

<style lang="scss" scoped>
	.header {
		padding-top: 20px;
		padding-bottom: 20px;

		.header-info {
			display: flex;
			margin-bottom: 10px;

			.pic {
				width: 100px;
				padding-top: 0px;
				padding: 0px 20px;
			}

			.info {
				flex: 1;
				font-size: 12px;
				padding: 3px 0;

				.item {
					line-height: 25px;
					font-size: 12px;
				}

				.rate {
					display: flex;
				}
			}
		}
	}

	.order-status {
		padding: 10px 0 20px 0;
	}
	.copyright{
		line-height: 50px;
		text-align: center;
		font-size: 12px;
		color: #ccc;
	}
</style>
