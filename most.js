///////////////全局定义

var t = 0;	//用于存相等的次数
var max = 0;	//用于存出现最多次的次数
var maxLetter;	//用于存数量最多的字符
var num = [];  //用于存字符出现的位置
var flag = 0;	//数组的键值

var str = prompt("请输入字符串(以英文的,隔开)："); //打开页面跳出对话框让用户输入字符串
var arr = str.split(","); //获取字符串并转化为数组


//////////////循环选择最多

for (i = 0; i < arr.length; i++) {  //循环第一次数组，把每一个与一整个数组作比较得出相等的字符
	flag = 0; //初始化num[flag=0]
	for (j = 0; j < arr.length; j++) {  //把每一个字符与一整个数组作比较得出相等的字符
		if (arr[j] == arr[i]) {    //若字符相等
			t++;       //则t加1，若一整个数组里面有2组相等的字符则t=2
			num[flag] = j + 1;   //  把相等的字符的位置存入数组
			flag++;    //键值加1
		}
	}
	//以上字符比较结束，下面用于确定最多
	if (t > max) {   
		max = t;     //初始化了max=0，如果t有大于0，则赋值给max，后来若有比max再大的值会进行覆盖
		maxLetter = arr[i];   //把数量最多的字符传给maxletter
	}
	t = 0;    //初始化t=0，下次的for循环还要用
}

/////////////输出
document.getElementById("letter").innerHTML = "您输入的字符串为：" + str;
document.write("出现最多的字符是：" + maxLetter + "</br>");
document.write("出现的次数是：" + max + "</br>");
document.write("出现的位置分别是：");
for (flag = 0; flag < num.length; flag++) {
	document.write(num[flag] + " ");
}