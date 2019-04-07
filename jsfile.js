var coll = document.getElementsByClassName("collapse");
var i;

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

// .catch(function(error) {
//     // Handle Errors here.
//     var errorCode = error.code;
//     var errorMessage = error.message;
// });
// var firebase = app_firebase;
var user = firebase.auth().currentUser;
var out = document.getElementById("welcome");
var out2 = document.getElementById("summary");
var dbRef = firebase.database().ref().child("users/"+ window.localStorage.getItem('userid')+"/"
    +"name");
dbRef.on("value",
    function(snapshot){
        if (localStorage.getItem('userid') == 'null'){
            return
        }
        out.innerHTML = "Welcome, "+ snapshot.val();
    });

dbRef.on("value",
    function(snapshot){
        out2.innerHTML = "Here's your summary, "+ snapshot.val();
    });

// function to get value for user input that are grouped
function getValue(class_elements){
    for(let i = 0; i < class_elements.length; i++) {
        if (class_elements[i].checked){
            return class_elements[i].value
        }
    }
}

// var coll = document.getElementsByClassName("collapsible");
// var i;
//
// for (i = 0; i < coll.length; i++) {
//     coll[i].addEventListener("click", function() {
//         this.classList.toggle("active");
//         var content = this.nextElementSibling;
//         if (content.style.display === "block") {
//             content.style.display = "none";
//         } else {
//             content.style.display = "block";
//         }
//     });
// }



