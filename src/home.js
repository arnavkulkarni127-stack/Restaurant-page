console.log("home.js loaded");
export default function homeLoader() {
    const content = document.getElementById("content");
    const heading = document.createElement("h1");
    const para = document.createElement("p");
    heading.textContent = "RESTAURANT";
    para.textContent = "description";
    content.appendChild(heading);
    content.appendChild(para);
}
const homeBtn = document.getElementById("homeBtn");
homeBtn.addEventListener("click", () => {
    content.textContent = "";
    homeLoader();
})