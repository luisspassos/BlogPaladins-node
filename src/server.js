const express = require("express");
const app = express();

const { db } = require("./firebase.js");

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res)=> {
    res.render("pages/index", { db });
})

app.get("/post", (req, res)=> {
    res.render("pages/post", { db })
})

app.listen(8080);
console.log("Running 🚀")

