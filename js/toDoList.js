var myList = document.querySelector("#myList");
var myButton = document.querySelector("#addTasks");

myButton.onclick = () => {
    let input = document.createElement("input");
    let li = document.createElement("li");
    let removeButton = document.createElement("button");

    removeButton.appendChild(document.createTextNode("X"));
    input.type = "'text'";
    li.append(input)
    li.appendChild(removeButton);

    myList.appendChild(li);
    removeButton.onclick = () => {
        myList.removeChild(li);
    }
}