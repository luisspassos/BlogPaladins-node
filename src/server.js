const express = require("express");
const app = express();

app.set("view engine", "ejs")
app.set('views','./src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res)=> {
    res.render("pages/index");
})

app.listen(3002);
console.log("Running 🚀")