const inputBox = document.getElementById("inputBox"); // Correct ID name
const listContainer = document.getElementById("list-container");

function addNew() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li); // Correct case of 'listContainer'
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e) { // Correct spelling of 'addEventListener'
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML); // Correct case of 'listContainer'
}

function showTask() {
    let data = localStorage.getItem("data");
    if (data) {
        listContainer.innerHTML = data;
    }
}
showTask();
