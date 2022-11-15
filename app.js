const express = require ("express");
const bodyParser =require("body-parser");
const date = require(__dirname+"/date.js")


const app = express();

const inputs=[];
const workItems=[];

app.use(bodyParser.urlencoded({extended:true}));
app.use (express.static("public"));

app.set('view engine', 'ejs');

app.get("/", (req,res)=>{
 const day = date.day();
  res.render ('list', {listTitle:day , newItem: inputs});
});

app.post("/", (req,res)=>{

  if(req.body.list==="Work"){
    workItems.push(req.body.toDoItem);
    res.redirect("/work");

  }else{
    inputs.push(req.body.toDoItem);
    res.redirect("/");
  }

});


app.get("/work", (req,res)=>{
  res.render('list', {listTitle: "Work", newItem: workItems})
});

app.get("/about",(req, res)=>{
  res.render ('about')
})


app.listen(3000, ()=>{
  console.log("Server started on port 3000");
});
