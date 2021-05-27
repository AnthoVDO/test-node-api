const express = require("express");
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController') //to access the post route
// const bodyParser = require("body-parser")//no used anymore, use express instead. It was used to "translate" data;
const mongoose = require("mongoose");
const cors = require("cors"); //used to make it accessible to create an API

mongoose.set("useFindAndModify", false)


const port = 3000

app.use(express.json());

app.use(cors()) //Allow used to fetch data

app.use("/posts", postsRoutes);

app.listen(port, ()=> {
    return console.log("Server started on port: "+port);
})