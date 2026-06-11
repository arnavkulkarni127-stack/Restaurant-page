
export default function menuLoader() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    const para = document.createElement("p");
    heading.textContent = "MENU";
    para.textContent = "Pizza, Burger, brownie ";
    content.appendChild(heading);
    content.appendChild(para);
}

const menuBtn = document.getElementById("menuBtn");
menuBtn.addEventListener("click", function () {
    content.textContent = "";
    menuLoader();
})