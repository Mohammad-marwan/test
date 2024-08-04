const bars_navbar_div = document.querySelector(".bars_navbar_div");
const bars_navbar = document.querySelector(".bars_navbar");

bars_navbar.addEventListener("click",() => {

    bars_navbar_div.classList.remove("d_none");

});
const icon_close = document.querySelector(".icon_close");
icon_close.addEventListener("click", () =>{
    bars_navbar_div.classList.add("d_none");
    
})

