const firebase = require("../helper/firebase.js");
const auth = firebase.auth();
const db = firebase.database();
const ref = db.ref('/');

module.exports.signup = (req, res) => {
    let fullName = req.body.fullName;
    let email = req.body.email;
    let group = req.body.group;
    let password = req.body.password;

    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let userId = user.uid;
            let userRefs = ref.child("users/" + userId);
            userRefs.set({
                fullName: fullName,
                email: email,
                userId: userId
            });
            res.redirect('/dashboard');
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = err.message;
            return res.render('signup', { error: errorMessage })
        });
}

module.exports.signin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.redirect("dashboard");
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = err.message;
            return res.render('signup', { error: errorMessage });
        });
}

