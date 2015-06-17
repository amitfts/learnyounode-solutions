fs=require('fs');
module.exports = function(myDir, MyExt,callback){
    myArr=[];
    fs.readdir(myDir,function(err,fl){
        if(err){
            callback(err);
        }else{
            for(var i=0; i<fl.length; i++){
            var fname = fl[i];
            //console.log(fname);
            if(fname.split('.').slice(-1).pop()==MyExt && fname.split('.').length>1){
                //console.log(fl[i]);
                myArr.push(fname);
            }
            
        }
        callback('',myArr);
        }
    });
}
