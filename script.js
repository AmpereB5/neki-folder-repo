let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let ol = document.querySelector("ol");

for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    if (a[i] % 2 == 0) {
        const li = document.createElement("li");
        li.textContent = a[i];
        ol.appendChild(li);
        console.log(a[i] + " is even");
    }
}

const url = "https://www.google.com";

function openLinkOnHover() {
    window.open(url, "_blank");
}

const hoverImage = document.getElementById("hoverImg");

hoverImage.addEventListener("mouseover", openLinkOnHover);
