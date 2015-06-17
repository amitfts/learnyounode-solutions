var l = process.argv.length;
var sum=0;
if(l>2){
    for(var i=2;i<l; i++){
        sum+=Number(process.argv[i]);
    }
    
}
console.log(sum);
