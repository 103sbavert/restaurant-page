import { createElement, insertElements } from "./elements";
import backgroundImage from "./images/menu.png"
import "./menu.css"

let div_content = createElement("div.content.menu-page-override")
let img_backgroundIllustration = null

let h1_menuTitle = createElement("h1.menu-title")
h1_menuTitle.append("Menu")

let button_viewMenuButton = createElement("button.action-button.secondary.view-menu-button")
button_viewMenuButton.append("View Menu")

let div_menuItems = [
    createElement("div.menu-item"),
    createElement("div.menu-item"),
    createElement("div.menu-item.primary"),
    createElement("div.menu-item"),
    createElement("div.menu-item")
]

for (let i = 0; i < div_menuItems.length; i++) {
    let img_itemPicture = createElement("img.item-picture")
    img_itemPicture.src = backgroundImage

    let div_itemLabel = createElement("div.item-label")

    let div_itemPrice = createElement("div.item-price")
    div_itemPrice.append("$0")
    let div_itemName = createElement("div.item-name")
    div_itemName.append("Food Name")

    insertElements(div_itemLabel, [div_itemName, div_itemPrice])

    insertElements(div_menuItems[i], [img_itemPicture, div_itemLabel])
}

insertElements(div_content, h1_menuTitle)
insertElements(div_content, div_menuItems)
insertElements(div_content, button_viewMenuButton)

export default div_content
export { img_backgroundIllustration }