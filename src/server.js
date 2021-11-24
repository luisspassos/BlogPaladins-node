const express = require("express");
const app = express();

const posts = [];

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res)=> {
    res.render("pages/index");
})

app.get("/post", (req, res)=> {
    res.render("pages/post")
})

app.listen(8080);
console.log(posts)
console.log("Running 🚀")

module.exports = posts;