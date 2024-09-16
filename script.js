const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    let size = prompt("Enter the size of the grid:", 16);
    if (size > 100) size = prompt("Max size is 100", 100);
    const row = document.querySelectorAll(".row");
    row.forEach(elem => elem.remove());
    createGrid(size);
});

const container = document.querySelector(".container");

function createGrid(size) {
    for (let i = 0; i < size; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let j = 0; j < size; j++) {
            const sqr = document.createElement("div");
            sqr.classList.add("sqr");
            sqr.addEventListener("mouseenter", (event) => {
                mouseEnter(event.target);
            });
            sqr.addEventListener("mouseleave", (event) => {
                mouseLeave(event.target);
            });
            row.appendChild(sqr);
        }
    }
}

createGrid(16);

// for (let i = 0; i < 16; i++) {
//     const row = document.createElement("div");
//     row.classList.add("row");
//     container.appendChild(row);
//     for (let j = 0; j < 16; j++) {
//         const sqr = document.createElement("div");
//         sqr.classList.add("sqr");
//         // sqr.innerHTML = (i + 1) + "x" + (j + 1);
//         sqr.addEventListener("mouseenter", (event) => {
//             mouseEnter(event.target);
//         });
//         sqr.addEventListener("mouseleave", (event) => {
//             mouseLeave(event.target);
//         });
//         row.appendChild(sqr);
//     }
// }

function mouseEnter(e) {
    e.classList.add("light");
}

function mouseLeave(e) {
    e.classList.remove("light");
}