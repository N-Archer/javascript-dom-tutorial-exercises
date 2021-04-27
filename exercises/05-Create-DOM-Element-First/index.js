var elem = document.createElement("H1");
elem.innerHTML = "Hello World";
document.querySelector("#myDiv").appendChild(elem);

//Your code here
// Don'change the code above

// var paragraph = document.createElement("p");
// paragraph.style.background = "yellow";
// paragraph.innerHTML = "Hello New World";
document.querySelector("#myDiv").innerHTML += "<p>Hello New World</p>";
document.querySelector("#p").innerHTML.style.background = "yellow";
