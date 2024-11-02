import { createElement, insertElements } from "./elements";
import mainDish from "./images/main-dish.png"
import food1 from "./images/food1.png"
import food2 from "./images/food2.png"
import food3 from "./images/food3.png"
import food4 from "./images/food4.png"
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
    let div_itemLabel = createElement("div.item-label")
    let div_itemName = createElement("div.item-name")
    let div_itemPrice = createElement("div.item-price")

    switch (i) {
        case 0:
            img_itemPicture.src = food1
            div_itemName.append("Paneer Chawal (Rice)")
            break
        case 1:
            img_itemPicture.src = food2
            div_itemName.append("Shahi Paneer")
            break
        case 2:
            img_itemPicture.src = mainDish
            div_itemName.append("Butter Chicken")
            break
        case 3:
            img_itemPicture.src = food3
            div_itemName.append("Chicken Biryani")
            break
        case 4:
            img_itemPicture.src = food4
            div_itemName.append("Samosas")
            break;
    }
    div_itemPrice.append("$4.00")

    insertElements(div_itemLabel, [div_itemName, div_itemPrice])

    insertElements(div_menuItems[i], [img_itemPicture, div_itemLabel])
}

insertElements(div_content, h1_menuTitle)
insertElements(div_content, div_menuItems)
insertElements(div_content, button_viewMenuButton)

export default div_content
export { img_backgroundIllustration }