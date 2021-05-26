const mongoose = require("mongoose");

const PostsModel = mongoose.model( //PostsModel starting with a CAPITAL by convention
    "test-node-api", //database name
    {   //all inside the table
        author:{
            type: String,
            required: true
        },
        message:{
            type: String,
            required: true
        },
        data: {
            type: Date,
            default: Date.now
        }
    },
    "posts" //table selected

); 

module.exports = {PostsModel};

