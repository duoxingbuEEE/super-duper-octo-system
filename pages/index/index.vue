<template>
	<view class="">
		<!-- 搜索框区域 -->
		<view class="head">
			<image src="../../static/index/logo.jpg" mode="widthFix"></image>
			<view class="searchview">
				<input type="text" value="" placeholder="寻找商品" @focus="getsearch" />
			</view>
		</view>
		<!-- 快速分类导航 滚动视图 -->
		<scroll-view scroll-x class="quicknav">
			<view v-for="(item,index) in quicknav" :key="index" @click="changenav(index)">
				<text :class="index == topindex ? 'navactive' :'' ">{{item.catename}}</text>
			</view>
		</scroll-view>
		<!-- 轮播图 -->
		<swiper indicator-dots circular autoplay :interval="3000" :duration="1000">
			<swiper-item v-for="(item,index) in swipers" :key="index">
				<image :src="item.img" mode=widthFix></image>
			</swiper-item>
		</swiper>
		<!-- 功能导航 -->
		<view class="funnav">
			<view class="funnavrow" v-for="(item,index) in funNavList" :key="index" @click="getcate(index)">
				<image :src="item.icon" mode="widthFix"></image>
				<text>{{item.name}}</text>
			</view>
		</view>
		<!-- 秒杀商品推荐区域 -->
		<view class="seckill">
			<!-- 秒杀左侧区域 -->
			<view class="leftseckill">
				<view class="title">
					<image src="../../static/index/xianshi.jpg" mode="widthFix"></image>
					<text>限时秒杀</text>
				</view>
				<view class="info">
					<text>每天零点场，好货抢不停</text>
				</view>
				<view class="time">
					<view>{{skillDown.h}}</view>:
					<view>{{skillDown.m}}</view>:
					<view>{{skillDown.s}}</view>
					<view>秒杀</view>
				</view>
				<image :src="skillData.img" mode="widthFix" class="goodimg"></image>
			</view>
			<!-- 秒杀右侧区域 -->
			<view class="rightseckill">
				<view class="top">
					<view class="topinfo">
						<text>品牌上新 <text style="background: #f33182;font-size: 28rpx;color: white;">折</text></text>
						<text>每天九点，抢大牌</text>
					</view>
					<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
				</view>
				<view class="bottom">
					<view class="bottomgood">
						<text>每日十件</text>
						<text>只为您好选</text>
						<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
					</view>
					<view class="bottomgood">
						<text>每日十件</text>
						<text>只为您好选</text>
						<image src="../../static/index/goods1.jpg" mode="widthFix"></image>
					</view>
				</view>
			</view>
		</view>
		<!-- 广告图片推送区域 -->
		<view class="gg">
			<image src="../../static/index/swiper1.jpg" mode="widthFix"></image>
		</view>
		<!-- 推荐商品区域 -->
		<view class="recommendgood">
			<!-- 推荐导航 -->
			<view class="recommendnav">
				<view :class="menuIndex == 0 ? 'recommendactive' : '' " @click="changeMenu(0)">
					<text>热门推荐</text>
				</view>
				<view :class="menuIndex == 1 ? 'recommendactive' : '' " @click="changeMenu(1)">
					<text>上新推荐</text>
				</view>
				<view :class="menuIndex == 2 ? 'recommendactive' : '' " @click="changeMenu(2)">
					<text>所有商品</text>
				</view>
			</view>
			<view class="recommendlist">
				<view class="recommendrow" v-for="(item,index) in goods" :key="index">
					<image :src="item.img" mode="widthFix"></image>
					<view class="recommendrowinfo">
						<text>{{item.goodsname}}</text>
						<text>现价格： ￥{{item.price}}</text>
						<text>原价格：￥{{item.market_price}}</text>
						<text>
							立即抢购
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				quicknav: [], //快速分类导航,
				topindex: 0,
				swipers: ['../../static/index/swiper.jpg', '../../static/index/swiper1.jpg'],
				skillData: {}, //秒杀数据
				skillDown: {
					h: '00',
					m: '00',
					s: '00'
				}, //倒计时数据
				products: [], //热销、上新、所有商品数据
				goods: [], //默认展示推荐商品数据
				menuIndex: 0, //推荐商品选项卡默认下标
				funNavList: [{ //功能导航数据
						name: "限时抢购",
						icon: "../../static/index/xiaohuoban.png"
					},
					{
						name: "积分商城",
						icon: require("../../static/index/jifentixicopy.png")
					},
					{
						name: "联系我们",
						icon: require("../../static/index/lianxiwomen.png")
					},
					{
						name: "商品分类",
						icon: require("../../static/index/-shangpinfenlei-gai.png")
					}
				],
			}
		},
		onLoad() {
			// 获取导航分类
			this.getnavCate()
			// 获取首页轮播图
			this.getbanner()
			// 获取秒杀数据
			this.getSkill()
			// 获取首页推荐商品数据
			this.gethortData()
		},
		methods: {
			// 跳转到商品分类页面
			getcate(index) {
				if (index == 3) {
					uni.navigateTo({
						url: '../classify/classify'
					})
				}
			},

			// 获取热门数据
			gethortData() {
				this.$http({
						url: 'getindexgoods'
					})
					.then(res => {
						let data = res.data.list;
						// 循环处理图片路径
						data.forEach((item) => {
							item.content.forEach((item) => {
								item.img = this.$URL + item.img
							})
						});

						this.products = data;
						// 默认展示推荐商品数据
						this.goods = this.products[this.menuIndex].content;
					})
			},

			// 切换推荐选项卡
			changeMenu(index) {
				this.menuIndex = index;
				this.goods = this.products[index].content;
			},

			// 定义获取秒杀数据
			getSkill() {
				this.$http({
						url: 'getseckill'
					})
					.then(res => {
						let data = res.data.list[0];
						// 处理图片路径
						data.img = this.$URL + data.img;
						this.skillData = data;
						// 处理倒计时
						this.countDown(data.endtime)
					})
			},

			// 定义倒计时方法
			countDown(time) {
				let nowTime = new Date().getTime();
				let leftTime = time - nowTime;
				if (leftTime > 0) {
					let h = Math.ceil(leftTime / 1000 / 60 / 60 % 24);
					let m = Math.ceil(leftTime / 1000 / 60 % 60);
					let s = Math.ceil(leftTime / 1000 % 60);
					h = h >= 10 ? h : '0' + h;
					m = m >= 10 ? m : '0' + m;
					s = s >= 10 ? s : '0' + s;
					this.skillDown = {
						h,
						m,
						s
					};
					setTimeout(() => {
						this.countDown(time)
					}, 1000)
				} else {
					this.skillDown = {
						h: '00',
						m: '00',
						s: '00'
					}
				}
			},

			// 获取首页轮播图
			getbanner() {
				this.$http({
						url: 'getbanner'
					})
					.then(res => {
						let data = res.data.list;
						// 处理图片的域名问题
						data.forEach((item) => {
							item.img = this.$URL + item.img
						})
						this.swipers = data;
					})
			},

			// 切换导航分类
			changenav(index) {
				this.topindex = index
			},

			// 获取首页导航分类
			getnavCate() {
				this.$http({
						url: 'getcate'
					})
					.then(res => {
						this.quicknav = res.data.list
					})
			},
		}
	}
</script>

<style>
	@import url("../../common/css/index.css");
</style>
