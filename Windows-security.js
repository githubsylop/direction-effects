const grid = document.querySelector(".grid");
// const cards = document.querySelectorAll(".card");

// const gridSize = grid.getBoundingClientRect();

document.addEventListener("mousemove", (e) => {
  grid.style.setProperty("--x", e.x + "px");
  grid.style.setProperty("--y", e.y + "px");
});
//   let glowX = e.offsetX;
//   let glowY = e.offsetY;

//   let borderX = e.clientX - gridSize.left;
//   let borderY = e.clientY - gridSize.top;

//   grid.style.setProperty("--glow-x", glowX + "px");
//   grid.style.setProperty("--glow-y", glowY + "px");

//   grid.style.setProperty("--border-x", borderX + "px");
//   grid.style.setProperty("--border-y", borderY + "px");
// });

// function getOffsetX(el) {
//   return el.getBoundingClientRect().left + window.scrollX;
// }

// function getOffsetY(el) {
//   return el.getBoundingClientRect().top + window.scrollY;
// }
