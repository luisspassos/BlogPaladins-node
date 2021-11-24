const express = require("express");
const app = express();

const { posts } = require("./firebase.js");

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res)=> {
    res.render("pages/index");
})

app.get("/post", (req, res)=> {
    res.render("pages/post", { posts })
})

app.listen(8080);
console.log("Running 🚀")

