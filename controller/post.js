const firebase = require("../helper/firebase.js");
const db = firebase.database();
const ref = db.ref('/');

const firebase = require('../helper/firebase.js');
const db = firebase.database();
const ref = db.ref('/');


module.exports.postArticle = (req, res) => {

    let user = firebase.auth().currentUser;
    let title = req.body.title;
    let post = req.body.post;
    let userId = user.uid;
    let group = group;

    if (user) {
        ref.child('users/' + userId + '/fullName').once('value', (snapShot) => {

            let result = {};
            let data = {
                displayName: snapShot.val(),
                title:title,
                post: post,
            };

            let postsRef = ref.child('article' + '/' + userId);
            let postRef = postsRef.push();
            let postKey = postRef.key;

            result["post/" + group + "/" + postKey] = data;
            result["mypost/" + "/" + userId + "/" + postKey] = data;
            console.log(result);

            ref.update(result).catch((err) => {
                let errorCode = err.code;
                let errorMessage = err.message;
                console.log(errorMessage);
                return res.render('/article', { error: errorMessage })

            }).then(res.redirect("/dashboard"))


        }, (err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(errorMessage);
            return res.render('/dashboard', { error: errorMessage })
        });
    }
}