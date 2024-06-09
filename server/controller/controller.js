const modelFileCalling=require("../model/model")

exports.create=(req,res)=>{
    let saving=new modelFileCalling({
        firstname:req.body.firstname,
        email:req.body.email,
        password:req.body.password,
        gender:req.body.gender,
        mobilenumber:req.body.mobilenumber
    })
    saving.save().then((any)=>{
        res.redirect("/basic-table");
        console.log(any);
    })
}


exports.dataGettingFromDatabase=(req,res)=>{
    modelFileCalling.find().then((karan)=>{
        res.send(karan)
    })
}
