var fs = require('fs');
var filename = process.argv[2];
var num=0;
if(filename){
    //console.log(filename);
    if(fs.existsSync(filename)){
        //console.log('file has been found')
         var bf = fs.readFileSync(filename);
         var fstr = bf.toString();
         num =fstr.split("\n").length - 1;
    }else{
        //console.log('file can not been found')
        
    }
}else{
    //console.log('No file');
}
console.log(num);
