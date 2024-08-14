import express from "express"
import { addFood,listFood,removeFood } from "../controllers/foodController.js"
import multer from "multer"
//Will use multer for building image storage system

const foodRouter = express.Router();

//Image storage Engine

const storage = multer.diskStorage({
    destination:"uploads",
    filename:(req,file,cb)=>{
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage:storage})
//This middleware will help to store images

foodRouter.post("/add",upload.single("image"),addFood)
foodRouter.get("/list",listFood)
foodRouter.post("/remove",removeFood)




export default foodRouter;