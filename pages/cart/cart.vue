<template>
	<view class="container" v-if="buffer">
		<view class="top">
			<scroll-view class="scroll-view_H" scroll-x="true" :scroll-left="scrollLeft" >
				<view class="cartInfo" id="demo1">
					<!-- 明日来写购物车基本信息 -->
					<view class="cartInfochild">
						<!-- 选择框 -->
						<view class="cartInfo_switch common">
							<!-- 点击当前商品 -->
							<switch type="checkbox" checked="true"  :data-ind="ind" />
						</view>
						<!-- 图片 -->
						<view class="cartInfo_image common">
							<image src="../../static/classify/10.jpg" mode="widthFix"></image>
						</view>

						<!-- 信息 -->
						<view class="cartInfo_info">
							<label style="font-size: 26rpx;">洗发水</label>
							<label style="font-size: 24rpx; color: #ccc;">规格：不错的商品</label>
							<label style="color: red;">￥100</label>
						</view>
						<!-- 加减数量 -->
						<view class="cartInfo_num">
							<view class="cartInfo_num_child">
								<label>-</label>
								<label>2</label>
								<label >+</label>
							</view>
						</view>
					</view>

				</view>
				<view class="cartDel" id="demo2">
					<label for="">删除</label>
				</view>
			</scroll-view>
		</view>
		
		<!-- 底部 -->
		<view class="foot">
			<view class="footd1">
				<switch type="checkbox" checked="true" />
				<label>全选</label>
			</view>
			<view class="footd2">
				<view class="footd2sp1">总计：<label style="color: red;">200</label></view>
				<label class="footd2sp2">不含运费，已优惠￥0.00</label>
			</view>
			<!-- 跳到提交订单，结算页面 -->
			<view class="footd3" >
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
	
	export default {
		data() {
			return {
				scrollLeft: 0, //默认横向滚动 0,
				buffer: true, //检测购物车是否有数据
			}
		},
		// 页面显示时
		onShow() {
		
		},
	
		methods: {
		
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
