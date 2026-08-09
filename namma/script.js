let card = document.querySelector(".cardfollower")
let hero = document.querySelector(".hero")
let texts = document.querySelector(".texts h1")

document.addEventListener("mousemove", (e) => {
    card.style.top = e.clientY + "px"
    card.style.left = e.clientX + "px"
    card.style.transition = "linear 0.3s"
})

let menudiv = document.querySelector(".menu")
let click = document.querySelector("#menuClick")
let flag = 0

click.addEventListener("click", () => {
    if (!flag) {
        menudiv.style.top = "0%";
        menudiv.style.transition = "linear 0.5s";
        menudiv.style.rotate = "4deg";

        setTimeout(() => {
            texts.style.bottom = "40%";
            texts.style.opacity = 1;
            texts.style.transition = "all ease 0.5s";
        }, 500);

        flag = 1;
    } else {
        menudiv.style.top = "-115%";
        menudiv.style.transition = "linear 0.5s";

        flag = 0;
    }
});



let boxes = document.querySelectorAll(".box");
let rectangle = document.querySelector(".rectangle");
let h1 = document.querySelector(".rectangle h1");

boxes.forEach((box, index) => {
    box.addEventListener("mousemove", (e) => {

        if (index === 0) {
            h1.innerHTML = "Karthik";
        } else if (index === 1) {
            h1.innerHTML = "Durga Prasad";
        } else if (index === 2) {
            h1.innerHTML = "Dhurandher";
        } else {
            h1.innerHTML = "Sanjay Sahu";
        }

        rectangle.style.top = e.clientY + "px";
        rectangle.style.left = e.clientX + "px";
        rectangle.style.opacity = 1;
        rectangle.style.transition = "linear 0.2s";

    });

    box.addEventListener("mouseleave", () => {
        rectangle.style.opacity = 0;
    });

});
     

const playground = document.querySelector(".playground");
const preview = document.querySelector(".creative-studio img");

const images = [
    "https://plus.unsplash.com/premium_photo-1785080777822-8748169348a1?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1721762404964-fd2e16966456?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1754431033163-b04fc436f40f?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1777421025415-d5203e684dbf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://plus.unsplash.com/premium_photo-1664303457996-b9182eac103a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

let i = 0;
let timer;

playground.addEventListener("mouseenter", () => {
    preview.style.display = "block";

    timer = setInterval(() => {
        preview.src = images[i];
        i++;

        if(i === images.length){
            i = 0;
        }

    }, 1000);

});

playground.addEventListener("mouseleave", () => {
    clearInterval(timer);
    preview.style.display = "none";
    i = 0;
});