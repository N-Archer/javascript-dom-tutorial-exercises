let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let body = document.querySelector("body");
	let newChild = document.createElement("p");
	body.appendChild(newChild);
	newChild.innerHTML = "Hello World";
	newChild.style.backgroundColor = "yellow";
});
