import "./home.css"
import backgroundImage from "../images/home.png"
import { createElement, insertElements } from "../elements"

let div_content = createElement("div.content.home-page-override")
let img_backgroundIllustration = createElement("img.background-illustration.home-img-override")
img_backgroundIllustration.src = backgroundImage

const titleText = "The spot for authentic cuisine and great customer service"
const subtitleText = "Your favorite local restaurant is now available for pickup and delivery options with Beyond Menu"

let h1_homeTitle = createElement("h1.home-title")
let p_homeSubtitle = createElement("p.home-subtitle")
let div_homeActionButtons = createElement("div.home-action-buttons")

insertElements(div_content, [h1_homeTitle, p_homeSubtitle, div_homeActionButtons])

h1_homeTitle.append(titleText)
p_homeSubtitle.append(subtitleText)

let button_primaryActionButton = createElement("button.primary.action-button")
let button_secondaryActionButton = createElement("button.secondary.action-button")

button_primaryActionButton.append("FAQs")
button_secondaryActionButton.append("Careers")

insertElements(div_homeActionButtons, [button_primaryActionButton, button_secondaryActionButton])

export default div_content
export { img_backgroundIllustration }