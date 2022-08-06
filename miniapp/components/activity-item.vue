<template>
	<view class="list-item">
		<view class="pic">
			<image src="../static/images/pic.jpeg" mode=""></image>
		</view>
		<view class="content">
			<view class="title">
				企业社会责任与创新案例
			</view>
			<view class="date-location">
				<view class="date">
					2021.12.01 08:00 开始
				</view>
				<view class="location">
					0m
				</view>
			</view>
			<view class="other">
				<view class="price">
					80<text style="font-size: 10px;padding-left: 10px;">芳邻币/人</text>
				</view>
				<view class="acrtion">
					<u-button type="warning" class="custom-style" size="mini" :plain="true">立即报名</u-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "A",
		data() {
			return {

			};
		}
	}
</script>

<style scoped lang="scss">
	.list-item {
		display: flex;
		margin-bottom: 10px;

		.pic {
			width: 115px;
			height: 75px;

			image {
				width: 115px;
				height: 75px;
			}
		}

		.content {
			flex: 1;

			.title {
				font-size: 16px;
				padding-left: 15px;
				height: 30px;
			}

			.date-location {
				font-size: 14px;
				display: flex;
				height: 25px;
				padding-left: 15px;
				color: #ccc;
				font-weight: 100;
				lline-height: 25px;
				.date {
					flex: 1;
				}
			}

			.other {
				padding-left: 15px;
				display: flex;
				lline-height: 15px;
				.price {
					flex: 1;
					font-size: 14px;
					
					.zl {
						font-size: 14px;
						transform: scale(0.6);
					}
				}

				.custom-style {
					font-size: 5px;
					height: 20px;
				}
			}
		}
	}
</style>
