const firebase = require("../helper/firebase.js");
const auth = firebase.auth();
const db = firebase.database();
const ref = db.ref('/');

module.exports.signup = (req, res) => {
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let email = req.body.email;
    let group = req.body.group;
    let password = req.body.password;

    auth.createUserWithEmailAndPassword(email, password)
        .then((user) => {
            let userId = user.uid;
            let userRefs = ref.child("users/" + userId);
            userRefs.set({
                firstName:firstName,
                lastName:lastName,
                email: email,
                userId: userId
            });
            res.redirect('/addpost');
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            return res.render('signup', { error: errorMessage })
        });
}

module.exports.signin = (req, res) => {
    let email = req.body.email;
    let password = req.body.password;

    auth.signInWithEmailAndPassword(email, password)
        .then((user) => {
            res.redirect("addpost");
        }).catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            return res.render('index', { error: errorMessage });
        });
}

module.exports.signOut = (req, res) => {
    auth.signOut().then(() => {
        res.redirect('/');
    }, (error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorMessage);
    });
}