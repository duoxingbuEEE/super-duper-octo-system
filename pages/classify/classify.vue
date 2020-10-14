<template>
	<view class="container">
		<!-- left左侧一级分类列表 -->
		<scroll-view scroll-y class="left">
			<!-- 循环遍历的 -->
			<view class="left_list" :class="activeIndex == ind ? 'activeList' : ''" v-for="(item,ind) in cateData" :key="ind"
			 @click="changecate(ind)">
				<label for="">{{ item.catename }}</label>
			</view>
		</scroll-view>
		<!-- right右侧二级分类详情 -->
		<scroll-view scroll-y class="right">
			<view class="row">
				<view class="row_list" v-for="(item,index) in classify" :key="index" @click="getlist(item.id)">
					<image :src="item.img" mode="widthFix"></image>
					<text>{{item.catename}}</text>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				activeIndex: 0,
				cateData: ['家电', '手机', '电脑'], //左侧一级分类数据
			}
		},
		computed:{
			classify(){ //右侧二级分类详情	
				return this.cateData[this.activeIndex] ? this.cateData[this.activeIndex].children : [{
						catename: "华为电脑",
						img: "../../static/classify/1.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/2.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/3.jpg"
					},
					{
						catename: "华为电脑",
						img: "../../static/classify/4.jpg"
					},
				] 
			}
		},
		async onLoad(options) {
			// console.log(options);
			this.activeIndex = options.index || 0;
			// 获取全部的商品分类数据
			await this.getCate();
		},
		methods: {
			// 获取二级分类下对应的商品列表数据
			getlist(id) {
				// uni.navigateTo({
				// 	url: "../product/product?id=" + id
				// })
				this.navTo({
					url: "../product/product",
					data: {
						id
					}
				})
			},
			// 切换二级分类
			changecate(index) {
				this.activeIndex = index;
			},
			// 获取全部分类数据
			async getCate() {
				let {
					data: {
						list: cateData
					}
				} = await this.$http({
					url: "getcates"
				})
				// 循环处理分类中的图片路径
				cateData.forEach((item) => {
					if (item.children) {
						item.children.forEach((item) => {
							item.img = this.$URL + item.img
						})
					}
				})
				this.cateData = cateData;
			},
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	@import url("../../common/css/classify.css");

	/* 点击左侧导航，显示动态样式 */
	.activeList {
		border-left: 6rpx solid #f26b11;
		color: #f26b11;
	}
</style>
