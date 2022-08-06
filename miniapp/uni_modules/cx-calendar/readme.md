# cx-calendar

> @changeDate : 日历左右滑动时，会调用这个事件，传入的参数为滑动后的日期（yyyy-mm-dd）
>
> @dateItemClick:点击日历中的某一个触发的事件，传入的参数为一个对象 格式：{year:2021,month:12,day:1} ** 其中month，day都是数字，1月 =  1,第1天 = 1；**
>
> 通过定义ref="calendar"，可以调用日历组件的函数：this.$refs.calendar.show(newDate,[]);
>
> this.$refs.calendar.fristShow('2021-08-02',[]);
>
> 第一次展示组件一定要调用fristShow函数，传递今天的日期，第二个参数可以默认'[]';接下来通过调用这个函数可以直接返回今天（日历滑动后也可以直接调用）；
>
> this.$refs.calendar.show(newDate,[]); 这个函数控制滑动后，下个月的日历是否显示，默认这样写就可以直接展示了；

**总之：**cx-calendar标签的的定义格式是固定的；可以参考index.vue代码

各位如果有什么问题、建议；还望不吝赐教！^.^

