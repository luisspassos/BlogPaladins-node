const express = require("express");
const app = express();

const { db } = require("./firebase.js");

app.set("view engine", "ejs")
app.set('views', './src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res) => {

    db.collection("posts").orderBy("timestamp", "desc").get().then(snapshot => {

        const posts = [];

        snapshot.forEach(post => {
            posts.push(post.data())
        })

        res.render("pages/index", { posts });
    })

})

app.get("/post", (req, res) => {
    res.render("pages/post")
})

app.listen(8080);
console.log("Running 🚀")
