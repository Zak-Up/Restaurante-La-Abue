/*  -----======= ANIMATIONS ON SCROLL ======------ */
window.addEventListener("load", function(){
    AOS.init();
})

/* ----====== TOGGLE NAVBAR ======----- */
const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}

// --- Cerrar nav cuando se presione click en un nav item ---//
document.addEventListener("click", function(e) {
    if(e.target.closest(".nav-item")){
        toggleNav();
    }
});

/* -----====== STICKY HEADER ======----- */
window.addEventListener("scroll", function (){
    if(this.scrollY > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
});

/* -----====== MENÚ TABS ======------  */
const menuTabs = document.querySelector(".menu-tabs");
menuTabs.addEventListener("click", function(e){
    if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
        const target = e.target.getAttribute("data-target");
        //console.log(target);
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");

        AOS.init();//ANIMATION SCROLL
    }
});


