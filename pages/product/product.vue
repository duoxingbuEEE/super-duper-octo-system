<template>
	<view>
		<view class="search">
			<icon type="search" color="white" size="10"></icon>
			<input type="text" value="" placeholder="搜索商品" placeholder-class="placeholder" />
		</view>
		<view class="list">
			<view class="row" v-for="(item,index) in list" :key="index">
			<!-- <view class="row"> -->
				<image :src="item.img" mode="widthFix"></image>
				<view class="info">
					<text>{{item.goodsname}}</text>	
					<text>￥{{item.price}}</text>	
					<text>3565评论</text>	
				</view>
			</view>
		</view>
		<!-- <view class="api">
			暂无商品数据！
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 初始化商品列表数据
				list:[],
				// 初始化商品分类id
				cateid:'',
				// 初始化页面
				page:1,
				// 初始化总页码数
				totalPages:1
			}
		},
		onLoad(options){
			// 获取商品id
			this.cateid = options.id
			// 根据分了id查询对于的商品数据
			this.getlist();
		},
		// 监听上拉事件
		onReachBottom(){
			if(this.totalPages > this.page){
				// 提示
				uni.showLoading({
					title:'数据加载中...'
				})
				++this.page;
				// 延迟请求500
				setTimeout(()=>{
					this.getlist()
				},500)
			}else{
				uni.showLoading({
					title:'亲住手！'
				})
			}
		},
		methods: {
			
			// 查询商品列表数据
			getlist(){
				this.$http({
					url:"getsecondcategoodPage",
					data:{
						page:this.page,
						sid:this.cateid,
						size:5
					}
				})
				.then(res=>{
					let data = res.data.list[1];//获取数据
					this.totalPages = res.data.list[0]//获取总页码数
					data.forEach((item)=>{
						item.img = this.$URL+item.img
					})
					this.list = this.list.concat(data);
				})
			},
		}
		
	}
</script>

<style>
	.search{
		margin: 65rpx;
		height: 75rpx;
		background-color: #f26b11;
		border-radius: 80rpx;
		color: white;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	icon{
		margin:0 10rpx 0 250rpx;
	}
	.placeholder{
		color: white;
		font-size: 25rpx;
	}
	.row{
		position: relative;
		margin: 10rpx 20rpx;
		height: 190rpx;
		border-bottom: 1rpx solid #AAAAAA;
	}
	image{
		position: absolute;
		top: 0;
		left:10rpx;
		width: 160rpx;
	}
	.info{
		height: 85%;
		width: 100%;
		position: absolute;
		top: 0;
		left: 200rpx;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
		font-size: 25rpx;
	}
	.info text:nth-of-type(2){
		color: red;
	}
	.info text:nth-of-type(3){
		font-size: 20rpx;
		color: #AAAAAA;
	}
	.api{
		line-height: 200rpx;
		text-align: center;
		font-size: 40rpx;
		color: #006699;
	}
</style>
