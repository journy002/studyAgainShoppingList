const items = document.querySelector(".items");
const input = document.querySelector(".footer__input");
const btn = document.querySelector(".footer__btn");

window.onload = function () {
    function onAdd() {
        const text = input.value;
        const itemList = createItem(text);
        items.appendChild(itemList);
        itemList.scrollIntoView();
        input.value = "";
        input.focus();
    }

    let id = 0;
    function createItem(text) {
        const item = document.createElement("li");
        item.setAttribute("class", "item__row");
        item.setAttribute("data-id", id);
        item.innerHTML = `
        <div class="item">
            <span class="item__name">${text}</span>
            <button class="item__delete">
                <span data-id=${id}>-</span>
            </button>
        </div>
        <div class="divider"></div>
        `;
        id++;
        return item;
    }

    btn.addEventListener("click", () => {
        onAdd();
    });

    input.addEventListener("keypress", () => {
        if (event.key === "Enter") {
            onAdd();
        }
    });

    items.addEventListener("click", (event) => {
        const e = event.target.dataset.id;
        if (e) {
            const toBeDelete = document.querySelector(
                `.item__row[data-id='${e}']`
            );
            toBeDelete.remove();
        }
    });
};
