import { createElement, insertElement } from "./elements"

const titleText = "The spot for authentic cuisine and great customer service"
const subtitleText = "Your favorite local restaurant is now available for pickup and delivery options now with Beyond Menu"

let p_pageTitle = createElement("p.page-title")
let p_pageSubtitle = createElement("p.page-subtitle")
let div_pageActionButtons = createElement("div.page-action-buttons")

export default [p_pageTitle, p_pageSubtitle, div_pageActionButtons]

p_pageTitle.append(titleText)
p_pageSubtitle.append(subtitleText)

let button_primaryActionButton = createElement("button.primary.action-button")
let button_secondaryActionButton = createElement("button.secondary.action-button")

button_primaryActionButton.append("FAQs")
button_secondaryActionButton.append("Careers")

insertElement(div_pageActionButtons, button_primaryActionButton, button_secondaryActionButton)