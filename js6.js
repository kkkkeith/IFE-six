// getData方法
// 读取id为source的列表，获取其中城市名字及城市对应的空气质量
// 返回一个数组，格式见函数中示例
function getData() {
// coding here
// data = [
// ["北京", 90],
// ["北京", 90]
//  ……
// ]
    var source = document.getElementById("source");
    var cities = source.getElementsByTagName("li");
    var data = new Array();
    for (var i = 0; i < cities.length; i++) {
    	data[i] = new Array();
    	data[i][0] = cities[i].innerHTML.substring(0,cities[i].innerHTML.indexOf("空"));
    	var b = cities[i].getElementsByTagName("b");
    	data[i].push(parseInt(b[0].innerHTML));
    }
    return data;
}
// sortAqiData
// 按空气质量对data进行从小到大的排序
// 返回一个排序后的数组
function sortAqiData(data) {
	data.sort(function(x, y){
		return x[1] - y[1];
	});
	return data;
}
// render
// 将排好序的城市及空气质量指数，输出显示到id为resort的列表中
// 格式见ul中的注释的部分
function render(data) {
	var resort = document.getElementById("resort");
	var num = ["一","二","三","四","五","六","七"];
	var str = "";
	for (var i = 0; i < data.length; i++) {
		str += "<li>第"+num[i]+"名:"+data[i][0]+"空气质量:<b>"+data[i][1]+"</b></li>";
	}
	resort.innerHTML = str;
}

function btnHandle() {
    var aqiData = getData();
    aqiData = sortAqiData(aqiData);
    render(aqiData);
}

function init() {
// 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数
    document.getElementById("sort-btn").onclick = btnHandle;
}

init();