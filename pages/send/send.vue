<template>
	<view class="box">
		<view class="row">
			<text>手机号</text>
			<input  type="text" />
		</view>
		<view class="row">
			<view class="send">
				<text>验证码</text>
				<text @tap="">获取验证码</text>
			</view>
			<input type="text" placeholder="- - - -" maxlength="4" />
		</view>
		<view class="row">
			<text style="font-size: 23rpx;">收不到验证码？试试 <text style="color:#00BB00;font-size: 23rpx;"> 语音验证</text></text>
			<button  type="primary" style="width: 90%;border-radius: 80rpx;margin-top: 50rpx;">登录</button>
		</view>
		<view class="row">
			<text style="color: #006699;text-align: center;" >通过微信授权登录</text>
		</view>
	</view>
</template>
 
<script>
	
	export default {
		data() {
			return {
				phone: "",
				code: "",
				getCode: true,
			}
		},
		onLoad() {},
		methods: {
			getCode(){}
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	/* @import url("../../common/css/index.css"); */
	.box{
		position: relative;
	}

	.row{
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 40rpx;
	}
	.send{
		display: flex;
		justify-content: space-between;
	}
	.send text:nth-of-type(2){
		color: #00BB00;
	}
	text{
		font-size: 27rpx;
		margin-bottom: 10rpx;
	}
	input{
		border-bottom: 1rpx solid gray;
		height: 65rpx;
	}
	
</style>
