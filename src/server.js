const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res)=> {
    res.render("pages/index");
})

app.get("/news", (req, res)=> {
    res.render("pages/post")
})

app.listen(8080);
console.log("Running 🚀")