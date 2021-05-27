# Node API  
  
## Note  
  
1) Create index.js  
2) npm init -y => create a package json and writte yes to all  
3) npm i -s express nodemon => install express and nodemon (used to refresh after each save)  
4) modify package json / script / "start": "nodemon index.js"  
5) Call Express and app  
6) Listen port  
7) Create models / dbConfig.js  
8) Open mongodb compass Create a database  + create a table named: "posts"
9) go inside it and you can check that you can add data  
10) install mongoose with ```npm i mongoose``` (it allow to make link between our application and the database with methode)   
  

11) start to config the dbConfig file  
12) set the index.js with the new database  
13) create models exemple : postModel.js  
14) create a route folder if using MVC convention  
15) create the first route example: **postsController.js**  
16) use the route inside the index.js (require, use a middleware) 
  
17) We can use postman to test the posts body=>raw=>Text=>JSON  
18) Create a fake posts using the model  
  
## Cheat sheet  
  
- post => Post new obj inside database  
- get => Call info from data base  
- put => Modify/update info from the database  
- use =>   
  
## Way of working for post methode MVC  

1) require mongoose  
2) create model (how will be composed the data => author, date, message, ...)  
3) create the controler inside an other file (get, post, use) with express.router  **exemple** ```router.get("/", (req, res)=>{})```
4) add it to the main file with the path **exemple** ```(app.use("/posts", postsRoutes)```  
  
Remark : for the 3, there is a path with "/" which is equal to "/posts" because use it in the 4.  
  
## Make it accessible to make an API ##  
  
```const cors = require("cors");```  
```app.use(cors())```  
  
## Resume ##  
*index.js*  
- There is required tool  
- Open access if it's an API  
- data to json  
- middleware post, ...  
- listen port  
  
*dbConfig*  
mongoose connect  
  
*postsModel*  
model for the data  
  
*postsController*  
differents methods for post  

