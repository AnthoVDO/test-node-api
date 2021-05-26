const express = require("express");
const router = express.Router();

const {PostsModel} = require("../models/postsModel"); //to use the model posts

router.get("/", (req, res)=>{
    PostsModel.find((err, docs)=>{ //Look inside the database
        if(!err) res.send(docs);
        else console.log("error to get data :" + err)
    })
})

router.post("/", (req, res)=>{
    const newRecord = PostsModel({
        author: req.body.author,
        message: req.body.message
    })

    newRecord.save((err, docs)=>{
        if(!err) res.send(docs);
        else console.log('error creating new data : ' + err);
    })
})

module.exports = router ; //Accessible everywhere inside the project