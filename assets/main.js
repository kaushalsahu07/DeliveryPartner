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