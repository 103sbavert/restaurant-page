import "./styles.css"
import { toggleClass, loadPageContent } from "./elements"
import homePageContents from "./home"

let selectedNavItem = 0
document.querySelector(".nav-item.home").classList.add("selected")
loadPageContent(homePageContents)

function navButtonCallback(event) {
    let li_navItem = event.target.closest(".nav-item")
    let siblings = li_navItem.parentElement.children
    let currIndex = Array.from(siblings).indexOf(li_navItem)

    if (currIndex == selectedNavItem) {
        return
    }

    toggleClass(siblings[selectedNavItem], "selected")
    toggleClass(li_navItem, "selected")

    switch (currIndex) {
        case 0:
            loadPageContent(homePageContents)
    }

    selectedNavItem = currIndex
}

let button_navButtons = document.querySelectorAll("button.nav-button")

button_navButtons.forEach(
    (button) => button.addEventListener("click", navButtonCallback)
)