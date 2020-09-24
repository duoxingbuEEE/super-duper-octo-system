<template>
	<view class="container">
		<!-- 详情图片 -->
		<view class="detailImage">
			<image src="../../static/classify/11.jpg">
		</view>
		<!-- 详情基本信息 -->
		<view class="detailInfo">
			<view class="detailInfoName">
				<label>洗发水</label>
			</view>
			<view class="detailInfoPrice">
				<label style="color: red;">￥ 50</label>
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
				  <label class="jian">-</label>
				  <label class="zhi">1</label>
				  <label class="jia">+</label>
				</view>
			</view>
			<!-- 商品属性 -->
			<view class="changeState">
				<view class="productStat">
					<label for="">商品属性</label>
				</view>
				<view class="productGuige">
					<label></label>
					<view class="bg" >红色</view>
				</view>
			</view>
		</view>
		<!-- 商品详情 -->
		 <view class="productDetail">
			<view class="productDetailTitle">商品详情</view>
			<!-- 需要处理图片自适应问题 -->
			<image :src="productDetailImage.detailImage" mode="widthFix" style="width: 100%;" />
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
			<button class="footbtn1" >加入购物车</button>
			<button class="footbtn2" >立即购买</button>
		</view>
	</view>
</template>

<script>
	
	export default {
		data() {
			return {
				bg:'threed3i1',//商品属性背景色
				productDetailImage:{
					detailImage:"../../static/detail/2.jpg"
				},
				evals: [{  //评价内容
					name: '小李白',
					title: '效果很好，物流到位，下次继续来',
					img: ["../../static/detail/pingjia1.jpg","../../static/detail/pingjia1.jpg","../../static/detail/pingjia1.jpg","../../static/detail/pingjia1.jpg","../../static/detail/pingjia2.jpg","../../static/detail/pingjia3.jpg"],
					time: '2020-01-13'
				}]
			}
		},
		onLoad: function (options) {
			
		},
		onShow(){
			
		},
		
		methods: {
			
			
		}
		
	}
</script>

<style>
	@import url("../../common/css/details.css");
</style>
