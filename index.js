const countAddBtn = document.getElementById("add")
const countSubtractBtn = document.getElementById("subtract")

let count = 0

const countHeader = document.getElementById("count")

countHeader.innerText = count

function subtract() {
    return count--
}

function add() {
    return count++
}

countAddBtn.addEventListener("click", () => {
    add()
    countHeader.innerText = count
})

countSubtractBtn.addEventListener("click", () => {
    subtract()
    countHeader.innerText = count
})
