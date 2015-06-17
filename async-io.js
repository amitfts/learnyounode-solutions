var fs = require('fs');
var fname =  process.argv[2];
var num=0;
if(fname){
    fs.readFile(fname,function(err,data){
        if(err){
            console.log(0);
        }else{
            
          num = data.toString().split("\n").length-1;
          console.log(num);
        }
    });
    
}
