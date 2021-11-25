const express = require("express");
const app = express();

const takePostTime = require("./takePostTime.js");

const { db } = require("./firebase.js");

const firebaseRef = ()=> db.collection("posts").orderBy("timestamp", "desc").get();

app.set("view engine", "ejs")
app.set('views', './src/views');

app.use(express.static("./src/assets"));

app.get("/", (req, res) => {

    firebaseRef().then(snapshot => {

        const posts = [];

        snapshot.forEach(post => {
            posts.push(post.data())
        })

        res.render("pages/index", { posts });
    })

})

firebaseRef().then(snapshot => {
    snapshot.forEach(post => {
          
        app.get(`/${post.data().ref}`, (req, res) => {

            firebaseRef().then

            const postObj = post.data()
            postObj.postTime = takePostTime(postObj.timestamp.seconds)

            res.render("pages/post", {post: postObj})
        })
    })
})

app.listen(8080);
console.log("Running 🚀")
