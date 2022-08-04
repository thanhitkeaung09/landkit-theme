import '../scss/style.scss'
// import 'bootstrap/dist/js/bootstrap.bundle.min'

import * as bootstrap from 'bootstrap';

import ScrollReveal from "scrollreveal";
import Typed from "typed.js/src/typed";

import 'waypoints/lib/noframework.waypoints.min'
import counterUp from "counterup2";






let btn = document.getElementById("flexSwitchCheckDefault");
let value = document.getElementById("value");

function count(){
    let el = document.getElementById("value");
    counterUp( el, {
        duration: 1000,
        delay: 16,
        // action : 'stop'

    } )
}

btn.addEventListener("click",function (){
    if(btn.checked === true){
        value.innerText = 49;
        count();
        // value.classList.add('counter');
        // console.log("true")
    }
    else{
        value.innerText = 29;
        count();
        // console.log("false")
    }

    // console.log(btn.checked)
})


const el = document.querySelectorAll( '.counter' )
el.forEach(el=>{
    console.log(el)

    new Waypoint( {
        element: el,
        handler: function() {
            counterUp( el,{
                duration : 2000,
                delay : 16
            } ),
            this.destroy()
        },
        offset: 'bottom-in-view',
    } )

})



const carousel = new bootstrap.Carousel('#carouselExampleControls');
const carouselOne = new bootstrap.Carousel('#carouselExampleSlidesOnly');

document.getElementById("leftBtn").addEventListener("click",function (){
    carouselOne.prev();

})
document.getElementById("leftCarBtn").addEventListener("click",function (){
    carouselOne.prev();

})

document.getElementById("rightBtn").addEventListener("click",function (){
    carouselOne.next();
})
document.getElementById("rightCarBtn").addEventListener("click",function (){
    carouselOne.next();
})

var options = {
    strings: ["developers.","founders.", "designers."],
    typeSpeed: 40,
    // backDelay: 1000,
    backSpeed: 40,
    loop: true,
    // smartBackspace: false,
};

ScrollReveal().reveal('.content',SlideUp);

var typed = new Typed('.element', options);

var SlideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 600,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

var Slideleft = {
    distance: "90px",
    origin: "left",
    duration: 600,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}


var Slideright = {
    distance: "90px",
    origin: "right",
    duration: 600,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}

ScrollReveal().reveal('.content',SlideUp);

ScrollReveal().reveal('.image-left',Slideleft);

ScrollReveal().reveal('.text',Slideright);



// nav

// toggle nav open, close
const btnMobile = document.querySelector(".btn-mobile");
btnMobile.addEventListener("click", function () {
    this.classList.toggle("open");
    this.closest(".myNav").classList.toggle("nav-open");
});

const tabCompo = document.querySelector(".tab-wrapper");
const tabContainer = document.querySelectorAll(".tab-container");
const tabImg = document.querySelectorAll(".tab-image-container");
tabCompo.addEventListener("click", function (e) {
    const clicked = e.target.closest(".tab-container");
    if (!clicked) return;

    // remove active class
    [...tabContainer].map((cur) => cur.classList.remove("active-tab"));

    // add active class
    clicked.classList.add("active-tab");

    // deactivate all active tab
    [...tabImg].map((cur) => cur.classList.add("d-none"));

    // activate active tab img
    document
        .querySelector(`.tab-img-${clicked.dataset.tab}`)
        .classList.remove("d-none");
});


console.log("hello this is page section")