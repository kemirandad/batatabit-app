const table1 = document.getElementById("table1")
const table2 = document.getElementById("table2")
const rightArrow = document.getElementById("right_arrow")
const leftArrow = document.getElementById("left_arrow")

rightArrow.addEventListener("click", () => {
    table1.style.display = "none"
    table2.style.display = "block"
}) 

leftArrow.addEventListener("click", () => {
    table2.style.display = "none"
    table1.style.display = "block"
}) 