import "./about.css"
import { createElement, insertElements } from "../elements";
import restaurantPhoto from "../images/about.png"

let img_backgroundIllustration = null

let div_content = createElement("div.content.about-page-override")
let img_restaurantPhoto = createElement("img.restaurant-photo")
img_restaurantPhoto.src = restaurantPhoto

const titleText = "About Us"
const aboutText = "Sbavert's Spices serves New York with delicious Indian cuisine. Our specialty dishes have been well-crafted to create a delightful culinary experience. Enjoy the convenience of pickup and delivery when ordering through Beyond Menu"

let h1_aboutTitle = createElement("h1.about-title")
let p_aboutText = createElement("p.about-text")

h1_aboutTitle.append(titleText)
p_aboutText.append(aboutText)

insertElements(div_content, [h1_aboutTitle, p_aboutText, img_restaurantPhoto])

export default div_content
export { img_backgroundIllustration }