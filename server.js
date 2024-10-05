const express = require("express");
const dotEnv = require("dotenv");

// create instance of express
const app = express();

// load env
dotEnv.config();

// routes
app.get("/", (req, res, next) => {
    //console.log("Hello from node");
    res.send("Hello from node111");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`app listening on ${PORT}`);
});
