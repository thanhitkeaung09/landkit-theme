
import '../scss/account.scss'
import * as bootstrap from 'bootstrap';
import 'slick-carousel/slick/slick.min'
import 'jquery/dist/jquery.min'
import ScrollReveal from "scrollreveal";

import 'waypoints/lib/noframework.waypoints.min'
import counterUp from "counterup2";

import imgUrl from '../images/img/account-bgOne.png'
import imgUrlOne from '../images/img/account-bgTwo.png'


// scrollreveal
var SlideUp = {
    distance: "90px",
    origin: "bottom",
    duration: 600,
    interval: 100,
    cleanup: true,
    easing: "ease-out",
    delay: 200,
}
ScrollReveal().reveal('.content',SlideUp);

// counter
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


// nav end

$(document).ready(function(){
    $('.your-class').slick();
});
