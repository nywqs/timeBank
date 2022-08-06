<template>
	<view class="list-item">
		<view class="pic">
			<image src="../static/images/pic.jpeg" mode=""></image>
		</view>
		<view class="content">
			<view class="title">
				企业社会责任与创新案例/企业社会责任与创新案例/企业社会责任与创新案例
			</view>
			<view class="other">
				<text style="zl">70人助力</text>
				<text class="hk">回馈733芳邻币</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"GyxmItem",
		data() {
			return {
				
			};
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	.list-item{
		display: flex;
		margin-bottom: 10px;
		.pic{
			width: 85px;
			height: 60px;
			image{
				width: 85px;
				height: 60px;
			}
		}
		.content{
			.title{
				font-size: 14px;
				padding-left: 15px;
				height: 40px;
			}
			.other{
				text-align: left;
				height: 20px;
				font-size: 14px;
				padding-left: 15px;
				color: #ccc;
				font-weight: 100;
				.hk{
					margin-left: 5px;
				}
			}
		}
	}
</style>