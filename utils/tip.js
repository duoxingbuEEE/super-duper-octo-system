// 登录 提示
const toLogin = () => {
	uni.showModal({
		title: '登陆过期提示',
		content: '是否重新登录？',
		success: res => {
			if (res.confirm) {
				uni.navigateTo({
					url: "../login/login"
				})
			}
		}
	})
}

// 购物车登录 提示
const carToLogin = () => {
	uni.showModal({
		title: '登陆过期提示',
		content: '是否重新登录？',
		success: res => {
			if (res.confirm) {
				uni.navigateTo({
					url: "../login/login"
				})
			} else {
				uni.switchTab({
					url: "../index/index"
				})
			}
		}
	})
}

export {
	toLogin,
	carToLogin
}
export default {
	toLogin,
	carToLogin
}
