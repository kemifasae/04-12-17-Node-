var a = "makeMoneyEveryDay"
var index = 0;
var arr = [];
var count = 0;
for(var i = 0;i < a.length;i++){

	if(a[i] == a[i].toUpperCase()){
		console.log(a.substr(index,i - index));
		arr[count] = a.substr(index,i - index);
		index = i;
		count++;
	}

}

console.log(arr);
var len = a.length;
console.log(a.substr(index,len - 1));
arr[count] = a.substr(index,len - 1);
console.log(arr.length);
