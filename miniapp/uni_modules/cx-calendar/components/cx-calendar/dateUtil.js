import CALENDAR from './calendar.js'

// var now = new Date();

// now.getFullYear(); // 2015, 年份
// now.getMonth(); // 5, 月份，注意月份范围是0~11，5表示六月
// now.getDate(); // 24, 表示24号
// now.getDay(); // 3, 表示星期三
// now.getHours(); // 19, 24小时制
// now.getMinutes(); // 49, 分钟
// now.getSeconds(); // 22, 秒
// now.getMilliseconds(); // 875, 毫秒数
// now.getTime(); // 1435146562875, 以number形式表示的时间戳


//这个月多少天
function currentMonthDays(year, month) {
	let day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	if ((year % 4 === 0) && (year % 100 !== 0 || year % 400 === 0)) {
		day[1] = 29
	}
	return day[month];
}

//当前天是星期几
function currentDayWeek(date) {

}

//返回加一个月的日期 yyyy-mm-dd
function addMonth(date) {
	let dateTemp = new Date(date);
	let year = dateTemp.getFullYear();
	let month = dateTemp.getMonth();
	if (month === 11) {
		year = year + 1;
		month = 0;
	} else {
		month++;
	}
	let monthStr =  (month + 1) +'';
	if(monthStr.length < 2){
		monthStr = '0'+monthStr;
	}
	
	return year + '-' + monthStr + '-' + '01';
}

//返回减一个月的日期 yyyy-mm-dd
function subtractMonth(date) {
	let dateTemp = new Date(date);
	let year = dateTemp.getFullYear();
	let month = dateTemp.getMonth();
	if (month === 0) {
		year = year - 1;
		month = 11;
	} else {
		month--;
	}
	let monthStr =  (month + 1) +'';
	if(monthStr.length < 2){
		monthStr = '0'+monthStr;
	}
	
	return year + '-' + monthStr + '-' + '01';
}

//获得这天的阴历
function getLunar(y, m, d) {
	return CALENDAR.solar2lunar(y, m, d).IDayCn + '';
}

export default {
	currentMonthDays,
	currentDayWeek,
	addMonth,
	subtractMonth,
	getLunar
};
