<script>
	// 项目的根组件
	export default {
		globalData: {
			loginstatus: false, //true代码用户登录有效  false:登录无效
			header: {
				"content-type": "application/json",
				"authorization": ''
			}
		},

		onLaunch() {
			// 根据缓存判断用户是否登录过
			let userinfo = uni.getStorageSync("userinfo") || "";
			if (userinfo == "") {
				this.globalData.loginstatus = false;
				uni.setTabBarItem({
					index: 2,
					text: "未登录"
				})
			} else {
				// token有效性检查
				// 组装header
				let {
					header
				} = this.globalData;
				header.authorization = userinfo.token;
				this.$http({
					url: "checktoken",
					header
				}).then(res => {
					if (res.data.msg != '登录有效') {
						console.log('检测登录失效')
						// 动态设置我的菜单下的文字为‘未登录’
						uni.setTabBarItem({
							index: 2,
							text: '未登录'
						})
						// 设置检测登录的开关状态
						this.globalData.loginstatus = false;
						uni.showToast({
							title: "登录已失效！",
							icon: "none"
						})
						return
					}
					// 登录有效
					this.globalData.loginstatus = true;
				}).catch(err => {
					this.globalData.loginstatus = false;
					console.log(err);
				})
			}
		},
	}
</script>

<style>
	/*每个页面公共css */
</style>
