var http =  require('http');
var url = process.argv[2];
var len =0;
var chars='';
http.get(url, function(res) {
  //console.log("Got response: " + res.statusCode);
  res.on("data",function(data){
      //console.log(data.toString());
      var  mystr =data.toString();
      var curlen=mystr.length;
      len+=curlen;
      chars+=mystr;
     
  });
  res.on("end", function(){
      console.log(len);
      console.log(chars);
  });
}).on('error', function(e) {
  console.log("Got error: " + e.message);
});
