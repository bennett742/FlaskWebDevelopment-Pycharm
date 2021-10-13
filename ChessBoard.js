var length="";
for ( var height = 1; height <=8; height += 1){
    length="";
    for ( var row = 1; row <=8; row += 1){
        if(height%2!=0){
            if(row%2==0){
                length = length+"#";
                
            }
            else{
                length =length+" ";
            }
        }
        else{
            if(row%2!=0){
                length = length+"#";
                
            }
            else{
                length =length+" ";
            }
        }
    }
    console.log(length);
    console.log();
}