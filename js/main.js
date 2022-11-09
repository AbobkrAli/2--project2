// cliking on the header menu


let burger = document.querySelector(".menu_icon");
let burger_spans = Array.from(document.querySelectorAll(".menu_span"));
let icons = document.querySelector(".icons");
let menu_collapse = function() {

}

burger.addEventListener('click', function() {
    icons.classList.toggle("menu_collapse");
    burger_spans[0].classList.toggle("span1d");
    burger_spans[1].classList.toggle("span2d");
    burger_spans[2].classList.toggle("span3d");
});


// end of header icon
// ====================================

//first  card flip

first_card = document.querySelector(".main_first_overlay");
first_main = document.querySelector(".big_overlay");
window.addEventListener('load', function() {
    first_card.classList.add("flip_card");
    // window.onscroll = () => {
    //     if (scrollY >= first_main.offsetTop) {
    //         first_card.classList.add("flip_card");
    //     }
    // }
})


/* second card flip */

let second_card = document.querySelector(".section1_card1");
let second_section = document.querySelector(".section1");


window.addEventListener('scroll', () => {
    if (scrollY >= second_section.offsetTop - 300) {
        second_card.classList.add("flip_card2");
    } else if (scrollY < second_section.offsetTop - 300) {
        second_card.classList.remove("flip_card2");

    }

    if (scrollY >= third_section.offsetTop - 300) {
        third_card.classList.add("flip_card3");
    } else if (scrollY < third_section.offsetTop - 300) {
        third_card.classList.remove("flip_card3");

    }
})



// third card flip

let third_card = document.querySelector(".section2-card1");
let third_section = document.querySelector(".section2");
window.onscroll = () => {
    if (scrollY >= third_section.offsetTop - 300) {
        third_card.classList.add("flip_card3");
    } else if (scrollY < third_section.offsetTop - 300) {
        third_card.classList.remove("flip_card3");

    }
}