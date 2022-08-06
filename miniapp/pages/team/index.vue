<template>
	<view class="page">
		<view class="header" style="background-image: url('@/static/images/pic.jpeg');">
			<view class="avatar">
				<u-avatar src="http://pic2.sc.chinaz.com/Files/pic/pic9/202002/hpic2119_s.jpg" size="80"></u-avatar>
			</view>
			<view class="teamInfo">
				<view class="info">
					关爱儿童
				</view>
				<view class="info">
					团队成员3人
				</view>
				<view class="info">
					服务0人次 | 时长0小时
				</view>
			</view>
		</view>
		<u-gap height="10" bgColor="#f1f1f1"></u-gap>
		<view class="info">
			<view class="address">
				<text class="label">地址：</text>
				<text class="value">信阳市浉河区火车站对面</text>
			</view>
			<view class="shanchang">
				<text class="label">擅长：</text>
				<text class="value">科普教育|家政服务</text>
			</view>
			<view class="notice">
				<text class="label">公告：</text>
				<view class="content">
					<u-read-more :toggle="true" showHeight="150">
						<rich-text :nodes="content"></rich-text>
					</u-read-more>
				</view>
			</view>
		</view>
		<u-gap height="10" bgColor="#f1f1f1"></u-gap>
		<view class="mainPage">
			<u-gap height="10"></u-gap>
			<view class="main-title">
				团队介绍
			</view>
			<u-gap height="10"></u-gap>
			<view class="content">
				{{content}}
			</view>
		</view>
		<view class="toolbar">
			<view style="padding: 0 10px;">
				<u-button  type="warning"> 加入团队</u-button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
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
	.page {
		padding-bottom: 80px;

		.header {
			background-repeat: no-repeat;
			background-size: contain;
			display: flex;
			padding: 30px 20px;
			.avatar{
				padding: 6px 10px;
			}
			.teamInfo{
				.info{line-height: 10px;}
				
			}
		}

		.info {
			padding: 10px;

			.address,
			.shanchang,
			.notice {
				line-height: 40px;

				.content {
					line-height: 20px;
				}
			}
		}

		.toolbar {
			position: fixed;
			bottom: 0;
			width: 100%;
			height: 60px;
			background-color: #fff;
			border-top: 1px solid #f1f1f1;
			padding: 10px 0px;
		}
	}
</style>
