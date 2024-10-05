const express = require("express");
const dotEnv = require("dotenv");
const cors = require("cors");

// create instance of express
const app = express();

// load env
dotEnv.config();

/* Middleware in Node and Express is a function that processes requests and responses
 between the client and server, allowing for tasks like modifying request objects,
  handling authentication, or logging. */

// type 1 : Application level middleware
const myMiddleware = (req, res, next) => {
    console.log(`My middlewae kicked in`);

    /*In Express middleware, next() is a function that passes control to the next middleware function in the stack.
       If next() is not called, the request will be left hanging, and the response will not be sent back to the client.
  
          In your code, calling next() after logging ensures that the request can continue to the next middleware 
          or route handler.
      */
    next();
};

// use middleware using app.use()
//app.use(myMiddleware);

// routes
// app.get("/", (req, res, next) => {
//     //console.log("Hello from node");
//     res.send("Hello from node111");
// });


// or you could use middleware in particular endpoint path




app.get("/", myMiddleware, (req, res, next) => {
    res.send("Hello from / call");
});


// type 4: built in middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// type 5 : third-party middleware
app.use(cors());


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
});

// Type 3:  error handling middleare
app.use((err, req, res, next) => {
    res.status(500).send({
        status: 500,
        message: err.message,
        body: {}
    });
});
