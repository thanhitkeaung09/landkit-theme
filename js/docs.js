import '../scss/docs.scss'


import * as bootstrap from 'bootstrap';
import 'slick-carousel/slick/slick.min'
import 'jquery/dist/jquery.min'
import ScrollReveal from "scrollreveal";
import Filterizr from "filterizr";

let listOne = document.getElementById("listOne");
let listTwo = document.getElementById("listTwo");
let listThree = document.getElementById("listThree");
let listFour = document.getElementById("listFour");

listOne.addEventListener('click',function (){

    listOne.classList.add('bg-primary')
    listOne.classList.add('text-white')
    listTwo.classList.remove('bg-primary')
    listThree.classList.remove('bg-primary')
    listFour.classList.remove('bg-primary')
    listTwo.classList.remove('text-white')
    listThree.classList.remove('text-white')
    listFour.classList.remove('text-white')
    listTwo.classList.add('text-black')
    listThree.classList.add('text-black')
    listFour.classList.add('text-black')


})

listTwo.addEventListener('click',function (){
    listTwo.classList.remove('text-black')
    listOne.classList.remove('bg-primary')
    listOne.classList.remove('text-white')
    listOne.classList.add('text-black')
    listTwo.classList.add('bg-primary')
    listTwo.classList.add('text-white')
    listThree.classList.remove('bg-primary')
    listFour.classList.remove('bg-primary')
    listThree.classList.remove('text-white')
    listFour.classList.remove('text-white')
    listThree.classList.add('text-black')
    listFour.classList.add('text-black')

})

listThree.addEventListener('click',function (){
    listOne.classList.add('text-black')
    listThree.classList.remove('text-black')
    listOne.classList.remove('bg-primary')
    listOne.classList.remove('text-white')
    listTwo.classList.remove('bg-primary')
    listTwo.classList.remove('text-white')

    listThree.classList.add('bg-primary')
    listThree.classList.add('text-white')
    listFour.classList.remove('bg-primary')
    listFour.classList.remove('text-white')
    listTwo.classList.add('text-black')
    listFour.classList.add('text-black')

})

listFour.addEventListener('click',function (){
    listOne.classList.add('text-black')
    listFour.classList.remove('text-black')
    listOne.classList.remove('bg-primary')
    listOne.classList.remove('text-white')
    listTwo.classList.remove('bg-primary')
    listTwo.classList.remove('text-white')
    listThree.classList.remove('bg-primary')
    listThree.classList.remove('text-white')
    listFour.classList.add('bg-primary')
    listThree.classList.add('text-black')
    listTwo.classList.add('text-black')

})


const filterizr = new Filterizr('.filter-container');

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

ScrollReveal().reveal('.docs-content',SlideUp);
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


