var coll = document.getElementsByClassName("collapse");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}


// Add active class to the current button (highlight it)
var group1 = document.getElementById("grpDIV1");
var btns = group1.getElementsByClassName("btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var group2 = document.getElementById("grpDIV2");
var btns2 = group2.getElementsByClassName("btn2");

for (let j = 0; j < btns2.length; j++) {
  btns2[j].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[1].className = current[1].className.replace(" active", "");
  this.className += " active";
  });
}


var group3 = document.getElementById("grpDIV3");
var btns3 = group3.getElementsByClassName("btn3");

for (let i = 0; i < btns3.length; i++) {
  btns3[i].addEventListener("click", function() {
  let current = document.getElementsByClassName("active");
  current[2].className = current[2].className.replace(" active", "");
  this.className += " active";
  });
}
