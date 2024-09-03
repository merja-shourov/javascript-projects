const btn = document.getElementById("btn");
const input = document.getElementById("my-input");
const list = document.getElementById("my-list");



btn.addEventListener("click", ()=>{
    let item = input.value;
    let newList = document.createElement("li");
    newList.innerText = item;
    list.appendChild(newList);
    input.value = "";
})