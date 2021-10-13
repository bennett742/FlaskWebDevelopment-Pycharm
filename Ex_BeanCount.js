
function countBs(Bean){
    num=0;
    count=0;
    while(num<Bean.length){
        if(Bean.charAt(num)=="B"){
            count+=1;
        }
        num+=1;
    }
    return count;
}
console.log(countBs("BBEN"));

function countChar(Bean2, letter){
    num=0;
    count=0;
    while(num<Bean2.length){
        if(Bean2.charAt(num)==letter){
            count+=1;
        }
        num+=1;
    }
    return count;
}
console.log(countChar("BBEN", 'E'));