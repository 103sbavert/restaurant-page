import "./styles.css"

import homePageContent from "./home"
import menuPageContent from "./menu"
import { img_backgroundIllustration as menuPage_backgroundIllustration } from "./menu"
import { img_backgroundIllustration as homePage_backgroundIllustration } from "./home"

class NavItemHolder {
    constructor(navItem, pageContent, backgroundIllustration) {
        this.navItem = navItem
        this.contentLayout = pageContent
        this.backgroundIllustration = backgroundIllustration
    }
}

let pageList = [
    new NavItemHolder(document.querySelector("li.nav-item:nth-child(1)"), homePageContent, homePage_backgroundIllustration),
    new NavItemHolder(document.querySelector("li.nav-item:nth-child(2)"), menuPageContent, menuPage_backgroundIllustration),
    new NavItemHolder(document.querySelector("li.nav-item:nth-child(3)"), null, null)
]

let selectedNavItem = 0
let button_navButtons = document.querySelectorAll("button.nav-button")

updateNav(pageList[0].navItem)
updateBackgroundImage(pageList[0].backgroundIllustration)
updateContentLayout(pageList[0].contentLayout)

function navButtonCallback(event) {
    let currIndex = Array.from(
        event.currentTarget.closest("ul.nav-list").children
    ).indexOf(
        event.currentTarget.closest("li.nav-item")
    )

    let currNavItem = pageList[currIndex]
    updateContentLayout(currNavItem.contentLayout)
    updateNav(currNavItem.navItem)
    updateBackgroundImage(currNavItem.backgroundIllustration)

    selectedNavItem = currIndex
}

button_navButtons.forEach(
    (button) => button.addEventListener("click", navButtonCallback)
)

function updateContentLayout(newContent) {
    let oldContentDiv = document.querySelector("div.content")

    if (newContent) {
        if (oldContentDiv) {
            oldContentDiv.replaceWith(newContent)
            return
        }
        document.querySelector("body").appendChild(newContent)
    }
}

function updateNav(navItem) {
    let oldSelected = document.querySelector("li.nav-item.selected")

    if (oldSelected)
        oldSelected.classList.remove("selected")

    if (navItem)
        navItem.classList.add("selected")
}

function updateBackgroundImage(bgImage) {
    let oldBg = document.querySelector("img.background-illustration")

    if (oldBg)
        oldBg.remove()

    if (bgImage) document.querySelector("body").appendChild(bgImage)
}