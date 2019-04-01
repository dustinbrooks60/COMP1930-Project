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

var user = firebase.auth().currentUser;
var out = document.getElementById("welcome");
var dbRef = firebase.database().ref().child("users/"+"fgy5KssMNcVuqldo4P126EDEDdb2/"
    +"name");
dbRef.on("value",
    function(snapshot){
        out.innerHTML = "Welcome "+ snapshot.val();
    })





