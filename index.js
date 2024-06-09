const express=require("express")
const app=express();
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/karandatabaseNew",{}).then(()=>{
    console.log("Database Connected");
})

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static("public"))
app.set("view engine","ejs");
app.use("/",require("./server/routes/routes"));

app.listen(3000,()=>{
    console.log('working');
})