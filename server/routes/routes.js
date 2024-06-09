const express = require("express")
const routes=express.Router()
const servicesFileCalling=require("../services/services")
const controllerFileCalling=require("../controller/controller")

routes.get("/",servicesFileCalling.indexfile)
routes.get("/data",servicesFileCalling.datafile)
routes.post("/api/post",controllerFileCalling.create)


routes.get("/_footer",servicesFileCalling.footer)
routes.get("/_navbar",servicesFileCalling.navbar)
routes.get("/_settings-panel",servicesFileCalling.settingsPanel)
routes.get("/_sidebar",servicesFileCalling.sideBar)
routes.get("/basic_elements",servicesFileCalling.basicElements)

routes.get("/basic-table",servicesFileCalling.basicTable)
routes.get("/buttons",servicesFileCalling.buttons)
routes.get("/chartjs",servicesFileCalling.chartJs)
routes.get("/documentation",servicesFileCalling.documentation)
routes.get("/dropdowns",servicesFileCalling.dropdowns)

routes.get("/error-404",servicesFileCalling.error404)
routes.get("/error-500",servicesFileCalling.error500)
routes.get("/login",servicesFileCalling.login)
routes.get("/mdi",servicesFileCalling.mdi)
routes.get("/register",servicesFileCalling.register)

routes.get("/thankyou",servicesFileCalling.thanksyou)
routes.get("/typography",servicesFileCalling.typography)

routes.get("/api/post",controllerFileCalling.dataGettingFromDatabase)


module.exports=routes