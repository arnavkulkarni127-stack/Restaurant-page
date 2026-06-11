
export default function contactLoader() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    const para = document.createElement("p");
    heading.textContent = "CONTACT";
    para.textContent = "Phone, Email, Address ";
    content.appendChild(heading);
    content.appendChild(para);
}
const contact = document.getElementById("contactBtn");
contact.addEventListener("click", () => {
    content.textContent = "";
    contactLoader();
})