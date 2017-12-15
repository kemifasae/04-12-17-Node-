//var input = "make money every day";
//var arr = input.split(" ");
//var len = arr.length;
//console.log(len);


var a = "HARRY";
var b = "SALLY";


if (a.length == b.length){
    for( i = 1; i <= a.length; i++){
        for(j = 1; j <= b.length; j++){
            var arr;
            if(a[i] == b[j]){
                arr = (a[i]);

                console.log(arr);
            }
        }
    }
}else{
    console.log('They are not of equal lenght');
}
