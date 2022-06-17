let hamburger = document.querySelector("#hamburger");
let hamIcon = document.querySelector(".fa-bars");
let nav = document.querySelector("#nav");

hamburger.addEventListener("click",()=>{
    nav.classList.toggle("visible");
    hamIcon.classList.toggle("fa-times");

})