// Your code here
let tasks = ["Eat", "Drink", "Sleep"];

let ul = document.querySelector("ul");
let userInput = document.querySelector("#addToDo");
let trash = document.querySelector("span");

function deleteTask() {
	let trash = document.querySelectorAll("span");
	trash.forEach(span => {
		span.addEventListener("click", e => span.parentNode.parentNode.removeChild(span.parentNode));
	});
}

userInput.addEventListener("keypress", e => {
	if (e.keyCode == 13 && e.target.value) {
		ul.innerHTML += `<li>
			<span>
				<i class="fa fa-trash"></i>
			</span>
			${e.target.value}
        </li>`;
		userInput.value = null;
		deleteTask();
	}
});
