let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

let count = 0



function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr

}
function reset() {
    count = 0;
    countEl.textContent = count;
}
function deleteHistory() {
    saveEl.textContent = "Previous entries: "; 
}
let studentCount = 0;

function desk() {
    count += 3;  
    countEl.textContent = count;
}
