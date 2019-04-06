// (function () {
//
//     var firebase = app_firebase;
//
//     // for the current user
//     // create this user node in the datebase
//
//     firebase.auth().onAuthStateChanged(function (user) {
//         firebase.database().ref("users/" + user.uid).update(
//             {
//                 "ProducePlan": this_array[0],
//                 "ProduceType": this_array[1],
//                 "Quanitity": this_array[2]
//             });
//     });
// })();

// // Add active class to the current button (highlight it)
// var group1 = document.getElementById("grpDIV1");
// var btns = group1.getElementsByClassName("btn");
// var this_array = [];
//
// function appendArray(string_text, user_array) { // make sure append max is length 3
//     if (user_array.length < 3) {
//         user_array.push(string_text);
//     }
//     console.log(user_array);
// }
//
// for (let i = 0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//         current[0].className = current[0].className.replace(" active", "");
//         this.className += " active";
//         console.log(this.innerText);
//         appendArray(this.innerText, this_array);
//     });
// }
//
// var group2 = document.getElementById("grpDIV2");
// var btns2 = group2.getElementsByClassName("btn2");
//
// for (let j = 0; j < btns2.length; j++) {
//     btns2[j].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//         current[1].className = current[1].className.replace(" active", "");
//         this.className += " active";
//         console.log(this.innerText);
//         appendArray(this.innerText, this_array);
//     });
// }
//
//
// var group3 = document.getElementById("grpDIV3");
// var btns3 = group3.getElementsByClassName("btn3");
//
// for (let i = 0; i < btns3.length; i++) {
//     btns3[i].addEventListener("click", function () {
//         let current = document.getElementsByClassName("active");
//         current[2].className = current[2].className.replace(" active", "");
//         this.className += " active";
//         console.log(this.innerText);
//         appendArray(this.innerText, this_array);
//     });
//
// }

