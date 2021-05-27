const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId; //take object id inside database

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

// update
router.put("/:id", (req, res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('ID unkown : ' + req.params.id)
    }else{
        const updateRecord = {
            author: req.body.author,
            message: req.body.message
        }

        PostsModel.findByIdAndUpdate( //Here; we need to check the mongo documentation.
            req.params.id,
            {$set: updateRecord},
            {new : true},
            (err, docs)=>{
                if(!err) res.send(docs)
                else console.log("update error : "+ err)
            }
        )
    }
})

router.delete("/:id", (req, res)=>{
    if(!ObjectID.isValid(req.params.id)){
        return res.status(400).send('ID unknow : '+req.params.id)
    } else {
        PostsModel.findByIdAndRemove(
            req.params.id,
            (err, docs)=>{
                if(!err) res.send(docs);
                else console.log('Error : '+err);
            }
        )
    }
})

module.exports = router ; //Accessible everywhere inside the project