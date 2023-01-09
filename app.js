
const express = require("express");
const bodyParser = require("body-parser")
const https = require("https");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(request, response){
   response.sendFile(__dirname+"/index.html");

       
    
});
app.post("/",function(request, response){
   var pincode = request.body.cityName;
   var countrycode = request.body.countrycode;



   const url = "https://api.openweathermap.org/data/2.5/weather?q="+pincode+","+countrycode+"&appid=4f5ac1f828fb95fb149b0990ac744634&units=metric";
   https.get(url,function(res){
      console.log(res.statusCode);
      res.on("data",function(data){
       var wData = JSON.parse(data);
       const temp = wData.main.temp;
        const tempfeelslike = wData.main.feels_like;
        const description = wData.weather[0].description;
        const icon = wData.weather[0].icon;
        const imageUrl = wData.weather
        var str = "<h1>The temperature is : "+temp +"<br>"+" Temperature feels like :"+tempfeelslike+"<br>"+" Looks like "+description+"</h1>";
        response.write(str);
        response.write
      

      });
   });
})
// app.post("/",function(req,res){
//     res.send("")
// })
app.listen(3000, function(){
    console.log("Port 3000 is started");
});