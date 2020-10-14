// 参数路径处理
const liparse = (url, data) => {
	let num = Object.keys(data).length - 1;
	let num1 = 0;
	if (url.indexOf("?") == -1) {
		url += "?"
	}
	for (let key in data) {
		let pStr = num == num1 ? "" : "&"
		url += key + "=" + data[key] + pStr;
		num1++
	}
	return url
}
// console.log(liparse("lihan", {
// 	id: 1,
// 	text: "haha",
// 	a: 2
// }));

// navicateTo跳转方法封装
const navTo = ({
	url,
	data = {},
	events
}) => {
	url = liparse(url, data);
	return uni.navigateTo({
		url,
		events
	})
}
// reLaunch跳转方法封装
const reLaunch = ({
	url,
	data = {}
}) => {
	url = liparse(url, data);
	return uni.reLaunch({
		url
	})
}

export {
	navTo,
	reLaunch
}

export default {
	navTo,
	reLaunch
}
