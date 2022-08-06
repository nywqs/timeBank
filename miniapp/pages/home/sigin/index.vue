<template>
	<view>
		<u-cell label="签到时间" value="2022-08-05"></u-cell>
		<u-cell label="签到地点" value="信阳市浉河区火车站对面"></u-cell>
		<view class="locationMap" style="height: 200px; ">
			<map :scale='18' id="myMap" style="width: 100%;" :style="{height: mapHeight + 'px'}" :markers="markers"
				:longitude="longitude" :latitude="latitude" :circles="circles"></map>
		</view>
		
			<u-cell label="签到地点" value="信阳市浉河区火车站对面"></u-cell>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 在data中初始化的中心位置
				latitude: 39.984104,
				longitude:  116.307503,
				//data中定义
				circles: [], //圆
				markers: [],//标记点
				mapHeight:20,
				

			}
		},
		onLoad() {
			const _this = this;
			uni.getSystemInfo({
				success: (res) => {
					_this.mapHeight = res.screenHeight - res.statusBarHeight
					_this.mapHeight = _this.mapHeight
					this.getLocationInfo()
				}
			})
		},
		methods: {
			// 获取地理位置
			getLocationInfo() {
				var that = this
				uni.getLocation({
					type: 'gcj02',
					success(res) {
						console.log(res, "当前位置");
						that.latitude = res.latitude
						that.longitude = res.longitude
						//标记点
						that.markers = [{
							id: 1,
							latitude: res.latitude,
							longitude: res.longitude,
							iconPath: '../../../static/img/pos.png',
						}]
						that.circles = [{ //在地图上显示圆
							latitude: res.latitude,
							longitude: res.longitude,
							fillColor: "#D9E6EF", //填充颜色
							color: "#A7B6CB", //描边的颜色
							radius: 50, //半径
							strokeWidth: 2 //描边的宽度
						}]
					}
				});
			},
		}
	}
</script>

<style>
	.locationMap{
		height: 200px;
		/* overflow: hidden; */
	}
</style>
