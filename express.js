
const express=require("express");
const app =express();
//what should happen when the browser gets request
//mainly req=request and res=response shorthand people use usually
// "/" this is targeting a home root
app.get("/",function(request,response){
// console.log(request);
response.send("<h1>my first server code</h1><h2>this page have 3 directory 1. about 2. contact 3. bio</h2>");
});

app.get("/contact",function(req , res){
res.send("contact me : rossyshruti29@gmail.com");
});

app.get("/about",function(req,res){
    res.send("hii im shruti raj currently learning how to host a website in personal server");
})
app.get("/bio",function(req , res){
    res.send(" im from india ranchi is my city and im doin my btech i love coffe")
})




//listen to hyper so that when node sever.js run it got listen and the get to browser and show response

app.listen(3000 ,function(){
    console.log("server started on port 3000")
});


///have to run this code in hyper and the only .
