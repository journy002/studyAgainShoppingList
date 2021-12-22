const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__btn");

let id = 0;
function createItem(text) {
    const li = document.createElement("li");
    li.setAttribute("class", "item__row");
    li.setAttribute("data-id", id);
    li.innerHTML = `
    <div class="item">
        <span class="item__name">${text}</span>
        <button class="item__delete" data-id='${id}'>-</button>
    </div>
    <div class="divider"></div>
    `;

    id++;
    return li;
}

function onAdd() {
    const text = input.value;
    if (text === "") {
        input.focus();
        return;
    }
    const item = createItem(text);
    items.appendChild(item);

    input.value = "";
    input.focus();
}

addBtn.addEventListener("click", () => {
    onAdd();
});
