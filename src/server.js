const express = require("express");
const app = express();

const takePostTime = require("./takePostTime.js");

const { db } = require("./firebase.js");

const firebaseRef = () => db.collection("posts").orderBy("timestamp", "desc").get();

app.set("view engine", "ejs")
app.set('views', './src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res) => {

    firebaseRef().then(snapshot => {

        const posts = [];

        snapshot.forEach(post => {
            posts.push(post.data())
        })

        posts.forEach(post => {
            post.postTime = takePostTime(post.timestamp.seconds)
        })

        res.render("pages/index", { posts });
    })

})

app.get("/post", (req, res) => {

    const ref = req.url.split("?")[1];
    firebaseRef().then(posts => {
        const postsArr = [];
        posts.forEach(post => {
            postsArr.push(post.data())
        })

        postsArr.forEach(post => {
            post.postTime = takePostTime(post.timestamp.seconds)
        })

        const postObj = postsArr.find(post => post.ref.includes(ref))
        res.render("pages/post", { post: postObj, posts: postsArr })

    })

})

app.get("*", (req, res)=> {
    res.status(404).redirect("/");
})

app.use((err, req, res, next)=> {
    res.status(err.status).redirect("/");
});

app.listen(8080);
console.log("Running 🚀")
