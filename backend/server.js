import express from "express";
import data from "./data.js";

const app = express();

app.get("/api/product", function(req, res){
res.send(data.products);
});

app.listen("4000", function(){
    console.log("sever running at port 4000");
});