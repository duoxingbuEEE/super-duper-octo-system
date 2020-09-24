

// 引入网络请求地址

import URL from './config.js';
console.log(URL)

export default (options)=>{
	let url = URL+'/api/'+options.url
	return new Promise((resolve,reject)=>{
		uni.request({
			url,
			data:options.data || {},
			method:options.method || 'GET',
			header:options.header || {
				"content-type":'application/json'
			},
			success:resolve,
			fail:reject
		})
	})
}