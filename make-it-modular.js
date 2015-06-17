myModule = require('./firstmodule.js');
var dir1 = process.argv[2];
var ext = process.argv[3];
//console.log(dir1);
//console.log(ext);
myModule(dir1,ext, function(err, fl){
    if(err){
       // console.log('directory can not be found');
    }else{
        for(var i=0; i<fl.length; i++){
            var fname = fl[i];
            //console.log(fname);
            if(fname.split('.').slice(-1).pop()==ext && fname.split('.').length>1){
                console.log(fl[i]);
            }
            
        }
    }
});
