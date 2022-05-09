const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

for (let item of listItems) {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        setTimeout(() => {
            item.classList.add("hide");
        }, 0);
    })

    item.addEventListener("dragend", (e) => {

        setTimeout(() => {
            draggedItem.classList.remove("hide");
            draggedItem = null;
        }, 0)
    })

}

for (let list of lists) {

    list.addEventListener("dragover", (e) => {
        e.preventDefault();
    });

    list.addEventListener("dragenter", (e) => {
        e.preventDefault()
        list.classList.add("hover");
    });

    list.addEventListener("dragleave", () => {
        list.classList.remove("hover");
    })


    list.addEventListener("drop", (e) => {
        list.append(draggedItem);
        list.classList.remove("hover");
    });
}
