(function(){
// write into firebase when user logs in with name and email
    var firebase = app_firebase;

    // for the current user
    // create this user node in the datebase

    firebase.auth().onAuthStateChanged(function(user){
        firebase.database().ref("users/"+user.uid).update(
		{
        "name":user.displayName, 
         "email":user.email
        });
    });
})()
