var coll = document.getElementsByClassName("collapse");
var i;
// column collapse function if user wants to expand buttons "about us" and "concept", + "contribute"
for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
            content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
}

var user = firebase.auth().currentUser;
var out = document.getElementById("welcome");
var out2 = document.getElementById("summary");
var dbRef = firebase.database().ref().child("users/"+ window.localStorage.getItem('userid')+"/"
    +"name");
dbRef.on("value",
    function(snapshot){
        if (localStorage.getItem('userid') == null || localStorage.getItem('userid') == 'null' ){
            // if user is null or "null", dont show anything on the page
            return
        }else {
            out.innerHTML = "Welcome, " + snapshot.val();
        }
    });

dbRef.on("value",
    function(snapshot){
        if (localStorage.getItem('userid') == null || localStorage.getItem('userid') == 'null' ){
            // if user is null or "null", no replacing of innerHTML
            return
        }else {
            out2.innerHTML = "Here is your summary, " + snapshot.val();
        }
    });

// function to get value for user input that are grouped in classes
function getValue(class_elements){
    for(let i = 0; i < class_elements.length; i++) {
        if (class_elements[i].checked){
            return class_elements[i].value
        }
    }
}


var firebase = app_firebase;
firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        window.localStorage.setItem('userid',String(user.uid));
        console.log(String(user.uid));
        let element = document.getElementById('sign-user'); // remove login button if user is logged in
        element.parentNode.removeChild(element);
        // if user is signed in, replace login button with sign-out button
        let signout_button = document.createElement('button');
        let text = document.createTextNode('Sign out');
        signout_button.appendChild(text);
        signout_button.setAttribute('id', 'btnLogout');
        signout_button.setAttribute('class','nav_button');
        document.getElementById('nav-ul').appendChild(signout_button);

        var btnLogout = document.getElementById('btnLogout');

        btnLogout.addEventListener("click", function (e) {
            var promise = firebase.auth().signOut();
            promise.then(function () {
                window.localStorage.setItem('userid',null); //remove userid if user logout
                window.location.href = 'index.html';
            });
        });

    } else {
        // No user is signed in.
        window.localStorage.setItem('userid', null);
        // console.log(String(user.uid))
    }
});



