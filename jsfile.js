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

var user = firebase.auth().currentUser;
var out = document.getElementById("welcome");
var out2 = document.getElementById("summary");
var dbRef = firebase.database().ref().child("users/"+ window.localStorage.getItem('userid')+"/"
    +"name");
dbRef.on("value",
    function(snapshot){
        if (localStorage.getItem('userid') == null || localStorage.getItem('userid') == 'null' ){
            out.innerHTML = "Welcome, "+ 'Bob Ross';
            return
        }
        out.innerHTML = "Welcome, "+ snapshot.val();
    });

dbRef.on("value",
    function(snapshot){
        if (localStorage.getItem('userid') == null || localStorage.getItem('userid') == 'null' ){
            out2.innerHTML = "Here's your summary, " + 'Bob Ross';
            return
        }
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



