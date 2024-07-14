// nav
let navmenu = document.querySelector(".nav-menu");
let navmenuBtn = document.querySelector("#bars");

navmenuBtn.addEventListener("click", function(){
    if(navmenu.style.left == "-100%" || navmenuBtn.className == "fa-solid fa-bars-staggered"){
        navmenuBtn.className = "fa-solid fa-xmark" 
        navmenu.style.left = "0%"
        console.log("worked");
    }else{
        navmenuBtn.className = "fa-solid fa-bars-staggered"
        navmenu.style.left = "-100%"
    }
}) 
// scroll up
function scrollUp() {
	const scrollUp = document.getElementById("scroll-up");
	if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);