<template>
	<view class="">
		<view class="mainPage">
			<view class="thumb">
				<image src="../../static/images/pic.jpeg" mode="widthFix" width="100%" height="150px"></image>
			</view>
			<view class="title">
				赠送10套时间银行系统
			</view>
			<view class="desc">
				<u-read-more :toggle="true" showHeight="150">
					<rich-text :nodes="content"></rich-text>
				</u-read-more>
			</view>
			<view class="progress">
				<view class="title">
					项目进展
				</view>
				<view class="labs">
					<view class="label">
						<text>发布机构</text><text class="value">河南省信阳市海鹏联创科技</text>
					</view>
					<view class="label">
						<text>发布时间</text><text class="value">2022-08-01</text>
					</view>
					<view class="label" style="width: 50%;float: left;">
						<text>求助目标</text><text class="value">5000元</text>
					</view>
					<view class="label"  style="width: 50%;float: left;">
						<text>完成</text><text class="value">15.0%</text>
					</view>
					<view class="label" style="width: 50%;float: left;">
						<text>助力人数</text><text  class="value">70人</text>
					</view>
					<view class="label" style="width: 50%;float: left;">
						<text>回馈</text><text  class="value">773芳邻币</text>
					</view>
				</view>
			</view>
			<view class="situation">
				<view class="title">
					执行情况
				</view>
				<view class="labs">
					<view class="label" style="width: 50%;float: left;">
						<text>执行情况</text><text class="value">5次</text>
					</view>
					<view class="label"  style="width: 50%;float: left;">
						<text>服务人时</text><text class="value">8人次 14小时</text>
					</view>
				</view>
			</view>
			<u-gap height="30"></u-gap>
			<view class="content">
				<rich-text v-html="content">
				</rich-text>
			</view>
		</view>
		<view class="toolbar">
			<view class="price">
				回馈 <text class="num">10000</text><text>芳邻分/元</text>
			</view>
			<view class="gap">
				
			</view>
			<u-button type="warning"  customStyle="margin-right:20px">出把力</u-button>
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

<style lang="scss" scoped>
	.mainPage{
		padding-bottom: 80px;
	}
	.thumb{
		width: 100%;
		image{width: 100%;}
	}
	.title{
		line-height: 40px;
		font-weight: 600;
	}
	.progress .title,.situation .title{
		line-height:40px;
	}
	.labs{
		.label{
			line-height: 30px;
			color: grey;
			.value{
				padding-left: 10px;
				 color: black;
			}
		}
	}
	.content{
		margin-top: 20px;
		font-size: 16px;
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
			width: 180%;
			line-height: 40px;
			text-align: center;
			.num{
				font-size: 30px;
				color: #ff8000;
				font-weight: 900;
				padding: 0 10px;
			}
		}
		.gap{
			width: 20px;
		}
	}
</style>
