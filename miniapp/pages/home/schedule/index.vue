<template>
	<view class="content">
		<cx-calendar ref="calendar" :isFullwidth="true"  swiperBg="#fff" swiperItemWidth="100%" @changeDate="showDate" @dateItemClick="dateClick"></cx-calendar>
		<view class="footer">
			<button class="nowdate" size="mini" type="primary" @tap="goToday"> {{ title }}</button>
			<text class="current-date">用户点击了：<text>{{ clickDate }} </text></text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: '回到今天',
				date:'',
				clickDate:'',
				statusInfo:[],
			}
		},
		onLoad() {
			
		},
		mounted() {
			let now = new Date();
			this.$refs.calendar.fristShow(now.getFullYear()+'-0'+(now.getMonth()+1)+'-0'+now.getDate(),[{date:'2021-08-05',statusText:'已执行',color:'#007aff',opt:{name:'123'}}]);
		},
		methods: {
			goToday() {
				let now = new Date();
				this.$refs.calendar.fristShow(now.getFullYear()+'-0'+(now.getMonth()+1)+'-0'+now.getDate(),[{date:'2021-08-04',statusText:'已执行',color:'#007aff',opt:[{date:'name',age:'12'}]}]);
			},
			dateClick(dateObj) {
				console.log(dateObj);
				this.clickDate = dateObj.year + "-" + dateObj.month + "-" + dateObj.day;
			},
			showDate(newDate) {
				console.log('show date!! ==> 开始发送网络请求！' + newDate);
				setTimeout(() => {
					this.$refs.calendar.show(newDate,[]);
					this.date = newDate;
					this.clickDate = '';
				},0);				
			},
			showDate1(currentItemDate) {
				//发送网络请求，请求数据后改变 showDate，statusInfo
				this.showDate = currentItemDate;
				//中断之前的请求任务；
				getPreRequestTask().abort();
				let requestTask  = 发送网络请求.callback(() => {
					if(this.showDate == currentItemDate) {
						//更新statusInfo
					}
				});
				arr.push(requestTask);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.content {
		background: #fff;
		.footer {
			display:flex;
			flex-direction: column;
			justify-content: center;
			margin-top:20px;
			.current-date {
				padding:5px;
				text{
					color:#007AFF;

				}
			}
		}
	}
</style>