exports.indexfile=(req,res)=>{

    res.render("index")
}

exports.datafile=(req,res)=>{
    res.render("data")
}

exports.footer=(req,res)=>{
    res.render("_footer")
}

exports.navbar=(req,res)=>{
    res.render("_navbar")
}

exports.settingsPanel=(req,res)=>{
    res.render("_settings-panel")
}


exports.sideBar=(req,res)=>{
    res.render("_sidebar")
}

exports.basicElements=(req,res)=>{
    res.render("basic_elements")
}

exports.basicTable=(req,res)=>{
    const axios= require("axios")
    axios.get("http://localhost:3000/api/post").then(function (request) {
        console.log(request)
        res.render("basic-table",{"passing":request.data})

    })

}

exports.buttons=(req,res)=>{
    res.render("buttons")
}

exports.chartJs=(req,res)=>{
    res.render("chartjs")
}

exports.documentation=(req,res)=>{
    res.render("documentation")
}


exports.dropdowns=(req,res)=>{
    res.render("dropdowns")
}

exports.error404=(req,res)=>{
    res.render("error-404")
}

exports.error500=(req,res)=>{
    res.render("error-500")
}


exports.login=(req,res)=>{
    res.render("login")
}

exports.mdi=(req,res)=>{
    res.render("mdi")
}

exports.register=(req,res)=>{
    res.render("register")
}


exports.thanksyou=(req,res)=>{
    res.render("thankyou")
}

exports.typography=(req,res)=>{
    res.render("typography")
}
