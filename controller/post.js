

const firebase = require('../helper/firebase.js');
const db = firebase.database();
const ref = db.ref('/');


module.exports.postArticle = (req, res) => {

    let user = firebase.auth().currentUser;
    let title = req.body.title;
    let post = req.body.post;
    let userId = user.uid;

    if (user) {
        ref.child('users/' + userId + '/firstName').once('value', (snapShot) => {

            let result = {};
            let data = {
                firstName: snapShot.val(),
                title:title,
                post: post,
            };

            let postsRef = ref.child('article' + '/' + userId);
            let postRef = postsRef.push();
            let postKey = postRef.key;

            result["post/" + postKey] = data;
            console.log(result);

            ref.update(result).catch((err) => {
                let errorCode = err.code;
                let errorMessage = err.message;
                console.log(errorMessage);
                return res.render('/article', { error: errorMessage })

            }).then(res.redirect("/addpost"))


        }, (err) => {
            let errorCode = err.code;
            let errorMessage = err.message;
            console.log(errorMessage);
            return res.render('/dashboard', { error: errorMessage })
        });
    }
}