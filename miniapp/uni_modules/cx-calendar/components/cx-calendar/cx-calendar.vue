<template>
	<view class="container">
		<view class="title">
		{{currentMonth}}
		<button class="nowdate" :plain="true" size="mini" type="primary" @tap="goToday"> 今日</button>
		</view>
		<swiper class="cx-swiper" :style="{background: swiperBg}" :circular="circular" :current="currentIndex" :duration="duration" @change="change" @animationfinish="animationfinish" @transition="transition">
			<swiper-item class="cx-swiper-item">
				<view class="cx-swiper-item-container">
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-item"><text>一</text></view>
						<view class="cx-swiper-item-content-item"><text>二</text></view>
						<view class="cx-swiper-item-content-item"><text>三</text></view>
						<view class="cx-swiper-item-content-item"><text>四</text></view>
						<view class="cx-swiper-item-content-item"><text>五</text></view>
						<view class="cx-swiper-item-content-item"><text>六</text></view>
						<view class="cx-swiper-item-content-item"><text>日</text></view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr0" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr1" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr2" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr3" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr4" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem0DateArr5" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
				</view>
			</swiper-item>
			<!-- 第二个item   -->
			<swiper-item class="cx-swiper-item">
				<view class="cx-swiper-item-container">
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-item"><text>一</text></view>
						<view class="cx-swiper-item-content-item"><text>二</text></view>
						<view class="cx-swiper-item-content-item"><text>三</text></view>
						<view class="cx-swiper-item-content-item"><text>四</text></view>
						<view class="cx-swiper-item-content-item"><text>五</text></view>
						<view class="cx-swiper-item-content-item"><text>六</text></view>
						<view class="cx-swiper-item-content-item"><text>日</text></view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr0" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr1" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
					
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr2" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
					
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr3" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr4" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem1DateArr5" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
				</view>
			</swiper-item>

			<!-- 第三个item   -->
			<swiper-item class="cx-swiper-item">
				<view class="cx-swiper-item-container">
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-item"><text>一</text></view>
						<view class="cx-swiper-item-content-item"><text>二</text></view>
						<view class="cx-swiper-item-content-item"><text>三</text></view>
						<view class="cx-swiper-item-content-item"><text>四</text></view>
						<view class="cx-swiper-item-content-item"><text>五</text></view>
						<view class="cx-swiper-item-content-item"><text>六</text></view>
						<view class="cx-swiper-item-content-item"><text>日</text></view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr0" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr1" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
					
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @click="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr2" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
					
					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr3" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr4" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>

					<view class="cx-swiper-item-content" :style="{width:swiperItemWidth}">
						<view class="cx-swiper-item-content-date-item" @tap="itemClick(item.year,item.month,item.day,item.opt)" :style="{ background: item.today ? '#e9e9e9' : '#fff' }" v-for="(item, index) in sliceSwiperItem2DateArr5" :key="index">
							<text class="cx-date-num" :style="{ color: item.day == 0 ? '#fff' : '#000' }">{{ item.day }}</text>
							<text class="cx-date-lunar" :style="{ color: item.color }">{{ item.statusInfo }}</text>
						</view>
					</view>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>
<script>
import dateUtil from './dateUtil.js';

export default {
	props: {
		swiperBg:  {
      type: String,
      default: '#fff'
    },
		swiperItemWidth:String,		
		date: String,
		statusInfo: Array,
		//swiper是否包含内边距
		isFullwidth: Boolean,
	},
	data() {
		return {
			duration: 500,
			circular: true,
			currentIndex: 1,
			preIndex: 0,
			swiperItem0DateArr: [],
			swiperItem1DateArr: [],
			swiperItem2DateArr: [],
			showDateYear: '',
			showDateMonth: '',
			showDateDay: '',
			currentItemYear: 0,
			currentItemMonth: 0,
			currentItemDate: '',
			todayDate: '',
			currentMonth:'',
			sliceSwiperItem0DateArr0: [],
			sliceSwiperItem0DateArr1: [],
			sliceSwiperItem0DateArr2: [],
			sliceSwiperItem0DateArr3: [],
			sliceSwiperItem0DateArr4: [],
			sliceSwiperItem0DateArr5: [],
			//==
			sliceSwiperItem1DateArr0: [],
			sliceSwiperItem1DateArr1: [],
			sliceSwiperItem1DateArr2: [],
			sliceSwiperItem1DateArr3: [],
			sliceSwiperItem1DateArr4: [],
			sliceSwiperItem1DateArr5: [],
			//==
			sliceSwiperItem2DateArr0: [],
			sliceSwiperItem2DateArr1: [],
			sliceSwiperItem2DateArr2: [],
			sliceSwiperItem2DateArr3: [],
			sliceSwiperItem2DateArr4: [],
			sliceSwiperItem2DateArr5: []
		};
	},
	watch: {},
	methods: {
		show(dateTemp, statusInfoObjArr) {		 
			this.currentItemDate = dateTemp;
			this.updateSwiperItemDateArrByIndex(this.currentIndex, this.currentItemDate, statusInfoObjArr);			
		},
		goToday(){
			let now = new Date();
			this.fristShow(now.getFullYear()+'-0'+(now.getMonth()+1)+'-0'+now.getDate(),[{date:'2021-08-04',statusText:'已执行',color:'#007aff',opt:[{date:'name',age:'12'}]}]);
		},
		fristShow(dateTemp, statusInfoObjArr) {
			this.todayDate = dateTemp;
			
			let temp = new Date(dateTemp);
			this.currentMonth = temp.getFullYear() + '年' + (temp.getMonth() + 1) + '月'
			let tempMonthStr = ''+(temp.getMonth()+1);
			if(tempMonthStr.length <2){
				tempMonthStr = '0' + tempMonthStr;
			}
			this.currentItemDate = temp.getFullYear()+'-'+tempMonthStr+'-'+'01';
			
			this.updateSwiperItemDateArrByIndex(this.currentIndex, this.currentItemDate, statusInfoObjArr);
		},
		initAllSwiperItemDateArr() {
			this.swiperItem0DateArr = [];
			this.swiperItem1DateArr = [];
			this.swiperItem2DateArr = [];
			for (let i = 0; i < 42; i++) {
				this.swiperItem0DateArr.push({ day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.swiperItem1DateArr.push({ day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.swiperItem2DateArr.push({ day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
			}
			this.sliceSwiperItem0DateArr0 = [];
			this.sliceSwiperItem0DateArr1 = [];
			this.sliceSwiperItem0DateArr2 = [];
			this.sliceSwiperItem0DateArr3 = [];
			this.sliceSwiperItem0DateArr4 = [];
			this.sliceSwiperItem0DateArr5 = [];
			//==
			this.sliceSwiperItem1DateArr0 = [];
			this.sliceSwiperItem1DateArr1 = [];
			this.sliceSwiperItem1DateArr2 = [];
			this.sliceSwiperItem1DateArr3 = [];
			this.sliceSwiperItem1DateArr4 = [];
			this.sliceSwiperItem1DateArr5 = [];
			//==
			this.sliceSwiperItem2DateArr0 = [];
			this.sliceSwiperItem2DateArr1 = [];
			this.sliceSwiperItem2DateArr2 = [];
			this.sliceSwiperItem2DateArr3 = [];
			this.sliceSwiperItem2DateArr4 = [];
			this.sliceSwiperItem2DateArr5 = [];
			for (let i = 0; i < 7; i++) {
				this.sliceSwiperItem0DateArr0.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem0DateArr1.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem0DateArr2.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem0DateArr3.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem0DateArr4.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem0DateArr5.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				//==
				this.sliceSwiperItem1DateArr0.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem1DateArr1.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem1DateArr2.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem1DateArr3.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem1DateArr4.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem1DateArr5.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				//==
				this.sliceSwiperItem2DateArr0.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem2DateArr1.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem2DateArr2.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem2DateArr3.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem2DateArr4.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				this.sliceSwiperItem2DateArr5.push({ year:0,month:0,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
			}
		},
		updateSwiperItemDateArrByIndex(swiperItemIndex, currentSwiperItemDate, statusInfo) {
			this.initAllSwiperItemDateArr();
			let tempDate = new Date(currentSwiperItemDate);
			let tempYear = tempDate.getFullYear();
			let tempMonth = tempDate.getMonth();
			let tempWeek = tempDate.getDay();
			if (tempWeek == 0) {
				tempWeek = 7;
			}
			let days = dateUtil.currentMonthDays(tempYear, tempMonth);
			//console.log('tempYear=' + tempYear + '; tempMonth = ' + tempMonth + '; tempWeek=' + tempWeek + '；这个月多少天=' + days);
			let tempMonthStr = '' + (tempDate.getMonth() + 1);
			if (tempMonthStr.length < 2) {
				tempMonthStr = '0' + tempMonthStr;
			}
			// 第一个
			if (swiperItemIndex === 0) {
				for (let initStartDate = 0; initStartDate < tempWeek - 1; initStartDate++) {
					this.$set(this.swiperItem0DateArr, initStartDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				for (let startDate = 0; startDate < days; startDate++) {
					let lunar = dateUtil.getLunar(tempYear, tempMonth + 1, startDate + 1);
					let statusInfoTemp = lunar;
					let colorTemp = '#808080';
					let optTemp = {};
					let startDateStr = ''+(startDate + 1);
					if(startDateStr.length<2){
						startDateStr = '0'+startDateStr;
					}
					let isToday = this.todayDate === tempYear + '-' + (tempMonthStr) + '-' + (startDateStr) ? true : false;
					//console.log(this.currentIndex+' index=>'+this.todayDate +' == ' + (tempYear + '-' + (tempMonthStr) + '-' + (startDateStr)) + " ？ "+isToday);
					for (let i = 0; i < statusInfo.length; i++) {						
						if (tempYear + '-' + tempMonthStr + '-' + startDateStr === statusInfo[i].date) {
							statusInfoTemp = statusInfo[i].statusText;
							colorTemp = statusInfo[i].color;
							optTemp = statusInfo[i].opt;
						}
					}
					this.$set(this.swiperItem0DateArr, startDate + tempWeek - 1, { year:tempYear,month:tempMonth + 1,day: startDate + 1, statusInfo: statusInfoTemp, color: colorTemp, today: isToday ,opt:optTemp});
				}
				for (let endDate = tempWeek + days - 1; endDate < 42; endDate++) {
					this.$set(this.swiperItem0DateArr, endDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				//console.log('第一个shuzu ');
				//切割数组
				this.sliceSwiperItem0DateArr0 = this.swiperItem0DateArr.slice(0, 7);
				//console.log(this.sliceSwiperItem0DateArr0);
				this.sliceSwiperItem0DateArr1 = this.swiperItem0DateArr.slice(7, 14);
				this.sliceSwiperItem0DateArr2 = this.swiperItem0DateArr.slice(14, 21);
				this.sliceSwiperItem0DateArr3 = this.swiperItem0DateArr.slice(21, 28);
				this.sliceSwiperItem0DateArr4 = this.swiperItem0DateArr.slice(28, 35);
				this.sliceSwiperItem0DateArr5 = this.swiperItem0DateArr.slice(35, 42);
			}
			// 第二个
			if (swiperItemIndex === 1) {
				for (let initStartDate = 0; initStartDate < tempWeek - 1; initStartDate++) {
					this.$set(this.swiperItem1DateArr, initStartDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				for (let startDate = 0; startDate < days; startDate++) {
					let lunar = dateUtil.getLunar(tempYear, tempMonth + 1, startDate + 1);
					let statusInfoTemp = lunar;
					let colorTemp = '#808080';
					let optTemp = {};
					let startDateStr = ''+(startDate + 1);
					if(startDateStr.length<2){
						startDateStr = '0'+startDateStr;
					}
					let isToday = this.todayDate === tempYear + '-' + (tempMonthStr) + '-' + (startDateStr) ? true : false;
					//console.log(this.currentIndex+' index=>'+this.todayDate +' == ' + (tempYear + '-' + (tempMonthStr) + '-' + (startDateStr)) + " ？ "+isToday);
					for (let i = 0; i < statusInfo.length; i++) {
					
						if (tempYear + '-' + tempMonthStr + '-' + startDateStr === statusInfo[i].date) {
							statusInfoTemp = statusInfo[i].statusText;
							colorTemp = statusInfo[i].color;
							optTemp = statusInfo[i].opt;
						}
						
						
						
					}
					this.$set(this.swiperItem1DateArr, startDate + tempWeek - 1, { year:tempYear,month:tempMonth + 1,day: startDate + 1, statusInfo: statusInfoTemp, color: colorTemp, today: isToday ,opt:optTemp});
				}
				for (let endDate = tempWeek + days - 1; endDate < 42; endDate++) {
					this.$set(this.swiperItem1DateArr, endDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				//console.log('打印第二个数组：');

				//切割数组
				this.sliceSwiperItem1DateArr0 = this.swiperItem1DateArr.slice(0, 7);
				this.sliceSwiperItem1DateArr1 = this.swiperItem1DateArr.slice(7, 14);
				this.sliceSwiperItem1DateArr2 = this.swiperItem1DateArr.slice(14, 21);
				this.sliceSwiperItem1DateArr3 = this.swiperItem1DateArr.slice(21, 28);
				this.sliceSwiperItem1DateArr4 = this.swiperItem1DateArr.slice(28, 35);
				this.sliceSwiperItem1DateArr5 = this.swiperItem1DateArr.slice(35, 42);	
			}
			// 第三个
			if (swiperItemIndex === 2) {
				for (let initStartDate = 0; initStartDate < tempWeek - 1; initStartDate++) {
					this.$set(this.swiperItem0DateArr, initStartDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				for (let startDate = 0; startDate < days; startDate++) {
					let lunar = dateUtil.getLunar(tempYear, tempMonth + 1, startDate + 1);
					let statusInfoTemp = lunar;
					let colorTemp = '#808080';
					let optTemp = {};
					let startDateStr = ''+(startDate + 1);
					if(startDateStr.length<2){
						startDateStr = '0'+startDateStr;
					}
					let isToday = this.todayDate === tempYear + '-' + (tempMonthStr) + '-' + (startDateStr) ? true : false;
					//console.log(this.currentIndex+' index=>'+this.todayDate +' == ' + (tempYear + '-' + (tempMonthStr) + '-' + (startDateStr)) + " ？ "+isToday);
					for (let i = 0; i < statusInfo.length; i++) {
						if (tempYear + '-' + tempMonthStr + '-' + startDateStr === statusInfo[i].date) {
							statusInfoTemp = statusInfo[i].statusText;
							colorTemp = statusInfo[i].color;
							optTemp = statusInfo[i].opt;
						}
					}
					this.$set(this.swiperItem2DateArr, startDate + tempWeek - 1, { year:tempYear,month:tempMonth + 1,day: startDate + 1, statusInfo: statusInfoTemp, color: colorTemp, today: isToday,opt:optTemp });
				}
				for (let endDate = tempWeek + days - 1; endDate < 42; endDate++) {
					this.$set(this.swiperItem2DateArr, endDate, { year:tempYear,month:tempMonth + 1,day: 0, statusInfo: '0', color: '#fff', today: false ,opt:{}});
				}
				//console.log('打印第三个数组：');		
				//切割数组
				this.sliceSwiperItem2DateArr0 = this.swiperItem2DateArr.slice(0, 7);
				//console.log(this.sliceSwiperItem2DateArr0);
				this.sliceSwiperItem2DateArr1 = this.swiperItem2DateArr.slice(7, 14);
				//console.log(this.sliceSwiperItem2DateArr1);
				this.sliceSwiperItem2DateArr2 = this.swiperItem2DateArr.slice(14, 21);
				//console.log(this.sliceSwiperItem2DateArr2);
				this.sliceSwiperItem2DateArr3 = this.swiperItem2DateArr.slice(21, 28);
				this.sliceSwiperItem2DateArr4 = this.swiperItem2DateArr.slice(28, 35);
				this.sliceSwiperItem2DateArr5 = this.swiperItem2DateArr.slice(35, 42);
				//console.log(this.sliceSwiperItem2DateArr5);
				
			}
		},
		change(event) {
			
			//currentIndex
			//event.detail = {current: current, source: source};
			//this.currentIndex = event.detail.current;
			//判断用户左滑还是右滑
			let tempDate = '';
			if (event.detail.current - this.currentIndex == 1 || event.detail.current - this.currentIndex == -2) {
				//左滑：下一个月
				tempDate = dateUtil.addMonth(this.currentItemDate);
			}
			if (event.detail.current - this.currentIndex == -1 || event.detail.current - this.currentIndex == 2) {
				//右滑：上一个月
				tempDate = dateUtil.subtractMonth(this.currentItemDate);
			}
			let temp = new Date(tempDate);
			this.currentMonth = temp.getFullYear() + '年' + (temp.getMonth() + 1) + '月'
			console.log(tempDate.slice(6,7));
			this.preIndex = this.currentIndex;
			this.currentIndex = event.detail.current;
			this.currentItemDate = tempDate;
			//console.log('change ==> ' + this.currentItemDate + ';currentIndex = ' + this.currentIndex);
			this.$emit('changeDate', tempDate);
		},
		transition() {},
		animationfinish() {},
		itemClick(yearTemp,monthTemp,dayTemp,optTemp) {
			//console.log(optTemp);
			if(dayTemp === 0){
				return;
			}
			this.$emit('dateItemClick', {year:yearTemp,month:monthTemp,day:dayTemp,opt:optTemp});
		}
	}
	
};
</script>
<style lang="scss" scoped>

.container {
	width: 100%;
	height: 386px;
	.title{
		height: 50px;
		line-height: 50px;
		text-align: center;
		font-size: 25px;
		font-weight: 900;
		button{
			position: absolute;
			right: 5px;
			top: 6px;
			padding: 0px 10px;
		}
	}
	.cx-swiper {
	
		height:386px;

		.cx-swiper-item {
			height:386px;
			.cx-swiper-item-container {
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				// padding: 0 35rpx;
				align-self: center;
				
				.cx-swiper-item-content {
					display: flex;
					justify-content: center;
					align-items: center;
					width: 86%;
					&:nth-last-child(1)
					{
					 
					 //padding-bottom: 25rpx;
					}
					padding: 5px 0px;
					background: #fff;

					.cx-swiper-item-content-item {
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						height: 40px;
						border-bottom: 1px solid #808080;
						text-align: center;						
						text {
							color: #808080;
							font-size: 14px;
							font-weight: bold;
						}
					}

					.cx-swiper-item-content-date-item {
						flex: 1;
						display: flex;
						justify-content: center;
						align-items: center;
						flex-direction: column;
						height: 46px;
						text-align: center;

						.cx-date-num {
							color: #000;
							font-size: 14px;
							font-weight: bold;
						}

						.cx-date-lunar {
							color: #808080;
							font-size: 12px;
						}
					}
				}
			}
		}
	}
}
</style>
