<template>
	<view class="list-item">
		<view class="list-icon">
			<u-icon name="home" size="30" />
		</view>
		<view class="pic">
			<u-avatar src="../../../../static/uview/common/logo.png"></u-avatar>
		</view>
		<view class="title">
			<view class="nickname">
				程永磊
			</view>
			<view class="memo">
				这家伙很懒，什么也没留下
			</view>
		</view>
		<view class="desc">
			15次
		</view>
	</view>
</template>

<script>
	export default {
		name: 'HeroesItem',
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style scoped lang="scss">
	.list-item {
		display: flex;
		justify-content: center;
		align-items: center;
		padding: 10px 0;
		.pic {
			width: 40px;
			height: 40px;

			.img {
				width: 40px;
				height: 40px;
			}
		}

		.title {
			padding-left: 10px;
			line-height: 20px;
			flex: 1;
			.nickname{
				font-size: 14px;
			}
			.memo{
				font-size: 10px;
				color: #ccc;
			}
		}
		.desc{
			line-height: 40px;
		}
	}
</style>
