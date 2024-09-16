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
                mouseEnter(event.target, getRandomColor());
            });
            sqr.addEventListener("mouseleave", (event) => {
                mouseLeave(event.target);
            });
            row.appendChild(sqr);
        }
    }
}

createGrid(16);

function getRandomColor() {
    let colors = [
        '#ff0000', // Red
        '#00ff00', // Lime
        '#0000ff', // Blue
        '#ffff00', // Yellow
        '#ff00ff', // Magenta
        '#00ffff', // Cyan
        '#000000', // Black
        '#ffffff', // White
        '#808080', // Gray
        '#800000', // Maroon
        '#808000', // Olive
        '#008000', // Green
        '#800080', // Purple
        '#008080', // Teal
        '#ff4500', // OrangeRed
        '#da70d6', // Orchid
        '#87ceeb', // SkyBlue
        '#4682b4', // SteelBlue
        '#d2691e', // Chocolate
        '#ff6347', // Tomato
        '#2e8b57', // SeaGreen
        '#6a5acd', // SlateBlue
        '#ffd700', // Gold
        '#ff1493', // DeepPink
        '#40e0d0'  // Turquoise
    ];
    
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
}

function mouseEnter(e, color) {
    let newOpacity = Math.min(parseFloat(window.getComputedStyle(e).opacity) + 0.1, 1);
    e.style.opacity = newOpacity;
    e.style.background = color;
    // e.classList.add("light");
}

function mouseLeave(e) {
    e.style.background = "grey";
    // e.classList.remove("light");
}