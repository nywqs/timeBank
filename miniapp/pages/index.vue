<template>
	<view>
		<home v-if="tabIndex==0"></home>
		<activity v-if="tabIndex==1"></activity>
		<find v-if="tabIndex==2"></find>
		<!-- <exchange v-if="tabIndex==3"></exchange> -->
		<mine v-if="tabIndex==3"></mine>
		<u-tabbar :value="tabIndex" @change="change" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item text="首页" icon="home"></u-tabbar-item>
			<u-tabbar-item text="活动" icon="photo"></u-tabbar-item>
			<u-tabbar-item text="发现" icon="play-right"></u-tabbar-item>
			<!-- <u-tabbar-item text="兑换" icon="account"></u-tabbar-item> -->
			<u-tabbar-item text="我的" icon="account"></u-tabbar-item>
		</u-tabbar>
	</view>
</template> 

<script>
	import Home from '@/pages/home/index.vue';
	import Activity from '@/pages/activity/index.vue';
	import Find from '@/pages/find/index.vue';
	import Exchange from '@/pages/exchange/index.vue';
	import Mine from '@/pages/mine/index.vue';
	export default {
		components: {
			Home,
			Activity,
			Find,
			Exchange,
			Mine
		},
		data() {
			return {
				tabIndex: 0,
				tabbar:["首页","活动","发现","我的"]
			}
		},
		methods: {
			click1() {},
			change(e) {
				uni.setNavigationBarTitle({
					title:this.tabbar[e]
				})
				this.tabIndex = e
			}
		}
	}
</script>

<style>

</style>
