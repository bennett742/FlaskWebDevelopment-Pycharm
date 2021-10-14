function  range (start, end){
    var rg = [];
    for(var i=start; i<=end; i++){
        rg[i-1]=i;
    }
    return rg;
}
function  sum (arr){
    var s = 0;
    for(i=0; i<arr.length; i++){
        s=s+arr[i];
    }
    return s;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));