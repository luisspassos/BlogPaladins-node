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
        
        const postObj = postsArr.find(post => post.ref.includes(ref))
        postObj.postTime = takePostTime(postObj.timestamp.seconds)
        res.render("pages/post", { post: postObj }) 
    })

})

app.listen(8080);
console.log("Running 🚀")
