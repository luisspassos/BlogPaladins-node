const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/public"));

app.get("/", (req, res)=> {
    res.render("index");
})

app.listen(3000);
console.log("Running 🚀")