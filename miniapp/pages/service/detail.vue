<template>
	<view class="mainPage">
		<u-sticky>
			<view class="userinfo">
				<view class="avatar">
					<u-avatar src="https://img2.woyaogexing.com/2017/06/05/78f2f756a027bebb!400x400_big.jpg"></u-avatar>
				</view>
				<view class="content">
					<view class="nickname">
						海川~芳邻时间银行
					</view>
					<view class="desc">
						发布活动6次
					</view>
				</view>
				<view class="tel">
					<u-avatar icon="phone" bgColor="#ff8000" fontSize="30"></u-avatar>
				</view>
			</view>
		</u-sticky>
		<view class="thumb">
			<u--image :showLoading="true" :src="src" width="100%"  mode="widthFix" @click="click"></u--image>
		</view>
		<view class="service-content">
			<view class="header">
				<view class="title">
					服务供给信息
				</view>
				<view class="price">
					<text class="num">10</text>芳邻币
				</view>
			</view>
			<view class="content">
				<u-read-more :toggle="true" showHeight="100">
					<rich-text :nodes="content"></rich-text>
				</u-read-more>
			</view>
		</view>
		<view class="service-info">
			<view class="info">
				<text>开始时间：</text> <text class="value">2022-08-01 12:00:00</text>
			</view>
			<view class="info">
				<text>结束时间：</text> <text class="value">2022-08-01 12:00:00</text>
			</view>
			<view class="info">
				<text>服务地点：</text> <text class="value">市区内</text>
			</view>
			<u-line margin="10px 0"></u-line>
			<view class="info">
				<text>服务类型：</text> <text class="value">扶贫济困|家政服务|居家养老</text>
			</view>
			<view class="info">
				<text>服务人数：</text> <text class="value">0人</text>
			</view>
		</view>
		<view class="toolbar">
				<view class="price">
					<text class="num">0</text><text>人已申请</text>
				</view>
				<u-button type="warning" :plain="true" icon="heart"  customStyle="margin-right:20px">收藏</u-button>
				<u-button type="warning" v-if="statu==0"  customStyle="margin-right:20px">立即报名</u-button>
				<u-button type="primary" v-else  disabled  customStyle="margin-right:20px">服务结束</u-button>
				<view class="gap">
					
				</view>
		</view>
	</view> 
</template>

<script>
	export default {
		data() {
			return {
				status:1,
				src: 'http://zgd2.nyjianzhan.com/pic.jpeg',
				content: `山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？山不在高，有仙则名。水不在深，有龙则灵。斯是陋室，惟吾德馨。
								苔痕上阶绿，草色入帘青。谈笑有鸿儒，往来无白丁。可以调素琴，阅金经。
								无丝竹之乱耳，无案牍之劳形。南阳诸葛庐，西蜀子云亭。孔子云：何陋之有？`,
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.mainPage{
		padding-bottom: 80px;
		.userinfo{
			display: flex;
			.avatar{
				width: 50px;
				padding: 5px;
			}
			.content{
				flex: 1;
				.nickname{
					font-size: 16px;
					line-height: 30px;
				}
				.desc{
					font-size: 14px;
					color: #999;
				}
			}
			.tel{
				width: 50px;
				padding: 5px;
			}
		}
		.thumb{
			width: 100%;
			padding: 10px 0;
			height: 120px;
			overflow: hidden;
			image{
				width: 100%;
			}
		}
		.service-content{
			.header{
				display: flex;
				line-height: 50px;
				.title{
					flex: 1;
				}
				.price{
					width: 120px;
					text-align: right;
					.num{
						font-size: 30px;
						font-weight: 900;
						color: #ff8000;
						padding-right: 10px;
					}
				}
			}
			.content{
				
			}
		}
		.service-info{
			padding: 10px 0;
			.info{
				line-height: 30px;
				.value{
					color: #999;
				}
			}
		}
		.toolbar{
			width: 100%;
			background-color: #fff;
			position: fixed;
			bottom: 0;
			display: flex;
			border-top: 1px solid #f1f1f1;
			padding: 5px 10px;
			.price{
				width: 150%;
				line-height: 40px;
				text-align: left;
				.num{
					font-size: 30px;
					color: #ff8000;
					font-weight: 900;
					padding: 0 10px;
				}
			}
			.gap{
				width: 40px;
			}
		}
	}
	
</style>
