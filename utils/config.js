let URL = '';

// 动态设置网络请求地址
if (process.env.NODE_ENV === 'development') {
	// URl = 'http://localhost:3000'
	// 为了调试方便本地的请求地址直接请求线上的地址
	URL = 'http://api.aslegou.top'
} else {
	URL = 'http://api.aslegou.top'
}

// 导出URL
export default URL;
