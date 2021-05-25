const express = require("express");
const app = express();

const port = 3000

app.listen(port, ()=> {
    return console.log("Server started on port: "+port);
})