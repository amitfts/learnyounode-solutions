var http =  require('http');
var first='',second='',third='';
var respCount=0;
var chars='';
function getData(url,num){
   http.get(url, function(res) {
  //console.log("Got response: " + res.statusCode);
  res.on("data",function(data){
      //console.log(data.toString());
      var  mystr =data.toString();
      var curlen=mystr.length;
      
     if(num==1){
          first+=mystr;
      }else if(num==2){
          second+=mystr;
      }else if(num==3){
          third+=mystr;
      }
  });
  res.on("end", function(){
      ord=chars;
      respCount++;
      
      if(respCount==3){
          console.log(first);
          console.log(second);
          console.log(third);
      }
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
}); 
    
}
getData(process.argv[2],1);
getData(process.argv[3],2);
getData(process.argv[4],3);
