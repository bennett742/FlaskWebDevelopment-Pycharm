function reverseArray(arr){
    var reverse =[];
    for(i=0; i<arr.length; i++){

        reverse[i]=arr[arr.length-(i+1)];
    }
    return reverse;
}
function reverseArrayInPlace(arr){
    var reverse =[];
    for(i=0; i<arr.length; i++){

        reverse[i]=arr[arr.length-(i+1)];
    }
    for(i=0; i<arr.length; i++){
        arr[i]=reverse[i];
    }
    return arr;
}
console.log(reverseArray(["A", "B", "C"]));
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);