let product = document.querySelector("#product");
let add = document.querySelector("#add");
let list = document.querySelector("#list");

let editing = null;

add.addEventListener("click", function () {
    if (product.value.trim() === "") return;

    let li = document.createElement("li");

    li.innerHTML = `
        <span>${product.value}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    list.appendChild(li);
    product.value = "";
});

list.addEventListener("click", function (e) {
    let li = e.target.closest("li");
    if (!li) return;

    if (e.target.classList.contains("delete")) {
        li.remove();
    }

    if (e.target.classList.contains("edit")) {
        let span = li.querySelector("span");
        let input = document.createElement("input");

        input.value = span.textContent;
        span.replaceWith(input);

        editing = li;
        input.focus();
    }
});

document.addEventListener("click", function (e) {
    if (editing && !editing.contains(e.target)) {
        let input = editing.querySelector("input");

        if (input) {
            let span = document.createElement("span");
            span.textContent = input.value;
            input.replaceWith(span);
        }

        editing = null;
    }
}, true);