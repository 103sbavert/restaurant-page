import "./styles.css"

let selectedNavItemIndex = 0
let navItemButtons = document.querySelectorAll(".nav-list > .nav-item > .nav-button")

function selectButton(event) {
    let list = event.target.closest(".nav-list").children
    let selected = event.target.closest(".nav-item")
    let currentSelectedIndex = Array.from(list).indexOf(selected)
    let prevSelected = list[selectedNavItemIndex]

    prevSelected.classList.remove("selected")
    selected.classList.add("selected")

    selectedNavItemIndex = currentSelectedIndex
}

for (let i = 0; i < navItemButtons.length; i++) {
    let button = navItemButtons[i]
    
    button.addEventListener("click", selectButton)

    console.log(button)
}