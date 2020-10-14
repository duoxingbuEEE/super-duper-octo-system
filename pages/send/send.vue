<template>
	<view class="box">
		<view class="row">
			<text>手机号</text>
			<input type="text" maxlength="11" v-model="phone" />
		</view>
		<view class="row">
			<view class="send">
				<text>验证码</text>
				<text v-if="getCodeTime > 0">请{{getCodeTime}}秒后再试</text>
				<text v-else @click="getCode">获取验证码</text>
			</view>
			<input type="text" placeholder="- - - -" maxlength="4" v-model="code" />
		</view>
		<view class="row">
			<text style="font-size: 23rpx;">收不到验证码？试试 <text style="color:#00BB00;font-size: 23rpx;"> 语音验证</text></text>
			<button type="primary" style="width: 90%;border-radius: 80rpx;margin-top: 50rpx;" @click="login">登录</button>
		</view>
		<view class="row">
			<text style="color: #006699;text-align: center;">通过微信授权登录</text>
		</view>
	</view>
</template>

<script>
	let app = getApp();
	export default {
		data() {
			return {
				phone: "",
				code: "",
				getCodeTime: 0,
			}
		},
		methods: {
			// 登录
			async login() {
				// 校验手机号
				if (!/^1[3456789]\d{9}$/.test(this.phone)) {
					uni.showToast({
						title: "手机号格式错误！",
						icon: "none"
					})
					return
				}
				console.log(uni.getStorageSync("code"));
				// 校验验证码
				if (this.code != uni.getStorageSync("code")) {
					uni.showToast({
						title: "验证码错误！",
						icon: "none"
					})
					return
				}
				// 请求登录接口
				let res = await this.$http({
					url: "wxlogin",
					data: {
						phone: this.phone
					}
				})
				console.log(res);
				if (res.data.code != 200) {
					uni.showToast({
						title: "登录失败！",
						icon: "none"
					})
					return
				}
				// 登陆成功
				// 缓存用户数据到本地中 uid token phone
				uni.setStorageSync("userinfo", res.data.list)
				// 修改检测登录有效性的开关
				app.globalData.loginstatus = true;
				uni.showToast({
					title: res.data.msg
				})
					setTimeout(()=>{
						uni.reLaunch({
							url:"../mine/mine"
						})
					}, 200)
			},
			// 接收验证码
			async getCode() {
				// if (this.getCodeTime > 0) {
				// 	uni.showToast({
				// 		title: "请稍后再试！",
				// 		icon: "none"
				// 	})
				// 	return
				// }
				// 校验手机号
				if (!/^1[3456789]\d{9}$/.test(this.phone)) {
					uni.showToast({
						title: "手机号格式错误！",
						icon: "none"
					})
					return
				}
				let {
					data: {
						code,
						list
					}
				} = await this.$http({
					url: "sms",
					data: {
						phone: this.phone
					}
				})
				// console.log(code);
				if (code != 200) {
					uni.showToast({
						title: "发送失败！",
						icon: "none"
					})
					return
				}
				uni.setStorageSync("code", list.code);
				this.getCodeTime = 60;
				setInterval(()=>{
					this.getCodeTime--
				}, 1000)
				uni.showToast({
					title: "发送成功！",
					icon: "none"
				})
			}
		},
		onLoad() {
			if (app.globalData.loginstatus) {
				// uni.reLaunch({
				// 	url: "../mine/mine"
				// })
				this.reLaunch({
					url: "../mine/mine"
				})
			}
		}
	}
</script>

<style>
	/* 导入外部的样式文件 */
	/* @import url("../../common/css/index.css"); */
	.box {
		position: relative;
	}

	.row {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		margin: 40rpx;
	}

	.send {
		display: flex;
		justify-content: space-between;
	}

	.send text:nth-of-type(2) {
		color: #00BB00;
	}

	text {
		font-size: 27rpx;
		margin-bottom: 10rpx;
	}

	input {
		border-bottom: 1rpx solid gray;
		height: 65rpx;
	}
</style>
