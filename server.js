const express=require("express");
const app=express();
const port=3000;

app.get("/",(req,res)=>{
	res.sendFile("index.html");
	console.log(req);
});
	
app.listen(port,()=>{
console.log("Listining on port:"+port);
});
