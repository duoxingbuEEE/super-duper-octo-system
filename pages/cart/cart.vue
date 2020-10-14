<template>
	<view class="container" v-if="!!cartlist">
		<view class="top">
			<template v-for="(item,index) of cartlist">
				<scroll-view class="scroll-view_H" scroll-x="true" :scroll-left="scrollLeft">
					<view class="cartInfo" id="demo1">
						<!-- 购物车基本信息 -->
						<view class="cartInfochild">
							<!-- 选择框 -->
							<view class="cartInfo_switch common">
								<!-- 点击当前商品 -->
								<switch type="checkbox" :checked="item.status" :data-index="index" @change="change(index)" />
							</view>
							<!-- 图片 -->
							<view class="cartInfo_image common">
								<image :src="item.img" mode="widthFix"></image>
							</view>

							<!-- 信息 -->
							<view class="cartInfo_info">
								<label style="font-size: 26rpx;">{{item.goodsname}}</label>
								<label style="font-size: 24rpx; color: #ccc;">规格：不错的商品</label>
								<label style="color: red;">￥{{item.price}}</label>
							</view>
							<!-- 加减数量 -->
							<view class="cartInfo_num">
								<view class="cartInfo_num_child">
									<label @click="changeNum(index, item.id, 1)">-</label>
									<label>{{item.num}}</label>
									<label @click="changeNum(index, item.id, 2)">+</label>
								</view>
							</view>
						</view>

					</view>
					<view class="cartDel" id="demo2">
						<label for="">删除</label>
					</view>
				</scroll-view>
			</template>
		</view>

		<!-- 底部 -->
		<view class="foot">
			<view class="footd1">
				<switch type="checkbox" :checked="allStatus" @change="allChange" />
				<label>全选</label>
			</view>
			<view class="footd2">
				<view class="footd2sp1">总计：<label style="color: red;">{{allPrice}}</label></view>
				<label class="footd2sp2">不含运费，已优惠￥0.00</label>
			</view>
			<!-- 跳到提交订单，结算页面 -->
			<view class="footd3">
				<!-- 被选中的商品的个数 -->
				<label>去结算(2件)</label>
			</view>
		</view>

	</view>
	<view v-else>
		<image src="/static/kk.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
	import {
		carToLogin
	} from "../../utils/tip.js"
	let app = getApp();
	export default {
		data() {
			return {
				cartlist: [],
				scrollLeft: 0, //默认横向滚动 0,
				buffer: true, //检测购物车是否有数据
				header: {},
				uid: "",
				allStatus: true
			}
		},
		watch: {
			cartlist: {
				handler(newVal, oldVal) {
					console.log(this);
					this.allStatus = !newVal.some(item => !item.status)
				},
				deep: true
			}
		},
		computed:{
			allNum(){
				
			},
			allPrice(){
				let p = 0;
				this.cartlist.map(item=>{
					if (item.status) p += item.price * item.num;
				})
				return p
			}
		},
		// 页面显示时
		onShow() {
			uni.showLoading({
				title: "loading..."
			})
			setTimeout(() => {
				// 判断用户登录是否有效
				let userinfo = uni.getStorageSync("userinfo");
				// console.log(!app.globalData.loginstatus, !userinfo, !userinfo.uid, !userinfo.token);
				// 判断登录是否有效
				if (!app.globalData.loginstatus || !userinfo || !userinfo.uid || !userinfo.token) {
					uni.hideLoading();
					carToLogin();
					return;
				}
				uni.hideLoading();
				let {
					uid,
					token
				} = userinfo;
				let {
					header
				} = app.globalData;
				header.authorization = token;
				this.header = { ...header
				};
				this.uid = uid;
				this.getCart(this.uid, this.header);
			}, 500);
			// uni.request({
			// 	url: 'http://demo.dcloud.net.cn/payment/?payid=alipay&total=1',
			// 	success: res => {
			// 		console.log(res)
			// 	},
			// 	fail: err => {
			// 		console.log(err)
			// 	}
			// })
		},

		methods: {
			// 全选
			allChange(){
				this.allStatus = !this.allStatus;
				this.cartlist.forEach((item,index)=>{
					item.status = this.allStatus
				})
			},
			// 选择
			change(index) {
				this.cartlist[index].status = !this.cartlist[index].status;
			},
			// 减少数量
			async changeNum(index, id, type) {
				console.log(this.header)
				if (type == 1) {
					if (this.cartlist[index].num <= 1) {
						uni.showToast({
							title: "请左滑删除！"
						})
						return;
					}
					--this.cartlist[index].num;
				} else {
					if (this.cartlist[index].num >= 99) return;
					++this.cartlist[index].num;
				}
				let res = await this.$http({
					method: "POST",
					url: "cartedit",
					header: this.header,
					data: {
						id,
						type
					}
				});
				if (res.data.code == 403) {
					carToLogin();
					return;
				}
				console.log(res);
			},
			// 获取用户购物车数据
			async getCart(uid, header) {
				let res = await this.$http({
					url: "cartlist",
					header,
					data: {
						uid
					}
				})
				console.log(res);
				if (res.data.code == 403) {
					carToLogin(); // 提示登录
					return;
				}
				if (res.data.list == null) {
					return;
				}
				let cartlist = [];
				({
					data: {
						list: cartlist
					}
				} = res);
				cartlist.forEach((item) => {
					item.img = this.$URL + item.img; //修改图片路径
					item.status = true; //追加选中状态
					// item.left = 0;
				})
				this.cartlist = cartlist;
				console.log(this.cartlist)
			},
			// // 登录检测
			// watchLogin() {
			// 	// 判断用户登录是否有效
			// 	let userinfo = uni.getStorageSync("userinfo");
			// 	// console.log(!app.globalData.loginstatus, !userinfo, !userinfo.uid, !userinfo.token);
			// 	// 判断登录是否有效
			// 	if (!app.globalData.loginstatus || !userinfo || !userinfo.uid || !userinfo.token) {
			// 		uni.hideLoading();
			// 		carToLogin();
			// 		return;
			// 	}
			// 	uni.hideLoading();
			// 	let {
			// 		uid,
			// 		token
			// 	} = userinfo;
			// 	let {
			// 		header
			// 	} = app.globalData;
			// 	header.authorization = token;
			// 	this.header = header;
			// 	this.uid = uid;
			// }
		}
	}
</script>

<style>
	@import url("../../common/css/cart.css");

	.cartInfo_image_img {
		width: 120rpx;
		height: 120rpx;
	}
</style>
