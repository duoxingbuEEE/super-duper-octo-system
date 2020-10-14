<template>
	<view class="container">
		<!-- 详情图片 -->
		<view class="detailImage">
			<image :src="goodsinfo.img">
		</view>
		<!-- 详情基本信息 -->
		<view class="detailInfo">
			<view class="detailInfoName">
				<label>{{goodsinfo.goodsname}}</label>
			</view>
			<view class="detailInfoPrice">
				<label style="color: red;">￥{{goodsinfo.price}}</label>
				<label style="color: red;text-decoration: line-through;">￥{{goodsinfo.market_price}}</label>
				<label style="font-size: 24rpx;color: #ccc;">(此价格不与套装优惠同时享受)</label>
			</view>
		</view>

		<!-- 基本信息改变 -->
		<view class="changeInfo">
			<view class="youhui">
				<view>促销：<label class="manjian">满减</label><label class="dazhe">满2件9折；3件8折</label></view>
			</view>
			<!-- 数量加减 -->
			<view class="changeNum">
				<view class="num">购买数量</view>
				<view class="action">
					<label class="jian" @click="decNum">-</label>
					<label class="zhi">{{goodsinfo.cartfree}}</label>
					<label class="jia" @click="addNum">+</label>
				</view>
			</view>
			<!-- 商品属性 -->
			<view class="changeState">
				<view class="productStat">
					<label for="">商品属性</label>
				</view>
				<view class="productGuige">
					<label>{{goodsinfo.specsname}}</label>
					<view class="bg">{{goodsinfo.specsattr}}</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		<view class="productDetail">
			<view class="productDetailTitle">商品详情</view>
			<view class="" v-html="goodsinfo.description"></view>
			<!-- 需要处理图片自适应问题 -->
			<!-- <image :src="productDetailImage.detailImage" mode="widthFix" style="width: 100%;" /> -->
		</view>

		<view class="productEval">
			<view class="eval">商品评价</view>
			<view v-for="(item,index) in evals" :key="index">
				<label class="evalUsername">{{item.name}}</label>
				<label class="evalUsertitle">{{item.title}}</label>
				<view class="evalImage">
					<image v-for="(i,ind) in item.img" :key="ind" :src="i">
				</view>
				<label class="evalTime">{{item.time}}</label>
			</view>
		</view>
		<!-- 底部按钮 -->
		<view class="foot">
			<button class="footbtn1" @click="addCar">加入购物车</button>
			<button class="footbtn2">立即购买</button>
		</view>
	</view>
</template>

<script>
	import {
		toLogin
	} from "../../utils/tip.js";
	let app = getApp();
	export default {
		data() {
			return {
				id: "",
				goodsinfo: {

				},
				bg: 'threed3i1', //商品属性背景色
				productDetailImage: {
					detailImage: "../../static/detail/2.jpg"
				},
				evals: [{ //评价内容
					name: '小李白',
					title: '效果很好，物流到位，下次继续来',
					img: ["../../static/detail/pingjia1.jpg", "../../static/detail/pingjia1.jpg", "../../static/detail/pingjia1.jpg",
						"../../static/detail/pingjia1.jpg", "../../static/detail/pingjia2.jpg", "../../static/detail/pingjia3.jpg"
					],
					time: '2020-01-13'
				}]
			}
		},
		onLoad: function(options) {
			this.id = options.id;
			// 获取商品详情
			this.getGoodsDetail()
		},
		onShow() {

		},

		methods: {
			// 加入购物车
			async addCar() {
				let userinfo = uni.getStorageSync("userinfo");
				// 判断登录是否有效
				if (!app.globalData.loginstatus || !userinfo || !userinfo.uid || !userinfo.token) {
					toLogin();
					return;
				}
				let {
					uid,
					token
				} = userinfo;
				let {
					header
				} = app.globalData;
				header.authorization = token;
				let res = await this.$http({
					method: "POST",
					url: "cartadd",
					header,
					data: {
						uid,
						goodsid: this.goodsinfo.id,
						num: this.goodsinfo.cartfree
					}
				})
				console.log(res);
				if(res.data.code == 403){
					// 登录提示
					isLogin();return;
				}else{
					uni.showToast({
						title:'添加成功'
					});
					
					setTimeout(()=>{
						uni.reLaunch({
							url:'../cart/cart'
						})
					},200)
				}
			},
			// 减少数量
			decNum() {
				if (this.goodsinfo.cartfree <= 1) return;
				--this.goodsinfo.cartfree;
			},
			// 增加数量
			addNum() {
				if (this.goodsinfo.cartfree >= 99) return;
				++this.goodsinfo.cartfree;
			},
			// 获取商品详情
			async getGoodsDetail() {
				uni.showLoading({
					title: "正在加载..."
				})
				let {
					data: {
						list
					}
				} = await this.$http({
					url: "getgoodsinfo",
					data: {
						id: this.id
					}
				})
				if (!list) {
					uni.showToast({
						title: "商品不见了，去看看别的吧！",
						icon: "none",
						mask: true,
						success() {
							setTimeout(() => {
								uni.reLaunch({
									url: "../classify/classify"
								})
							}, 1000)
						}
					})
					return
				}
				// console.log(list);
				let goodsinfo = list[0];
				goodsinfo.cartfree = 1; // 添加默认购物车数量
				goodsinfo.img = this.$URL + goodsinfo.img;
				this.goodsinfo = goodsinfo;
				// console.log(this.goodsinfo);
				uni.hideLoading();
			}

		}

	}
</script>

<style>
	@import url("../../common/css/details.css");
</style>
