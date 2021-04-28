let button = document.querySelector("#superDuperButton");
button.addEventListener("click", function() {
	//your code here

	let table = document.querySelector("#myList");
	let newLI = document.createElement("li");
	table.appendChild(newLI);
	newLI.innerHTML = "Fourth Element";
});
