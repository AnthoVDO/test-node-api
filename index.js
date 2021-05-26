const express = require("express");
const app = express();
require('./models/dbConfig');
const postsRoutes = require('./routes/postsController') //to access the post route
// const bodyParser = require("body-parser")//no used anymore, use express instead. It was used to "translate" data;

const port = 3000

app.use(express.json());

app.use("/posts", postsRoutes);

app.listen(port, ()=> {
    return console.log("Server started on port: "+port);
})