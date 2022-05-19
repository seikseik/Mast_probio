import Marquee3k from 'marquee3000';
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

Marquee3k.init()



var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



const batteri = gsap.utils.toArray(".star");

ScrollTrigger.batch(batteri, {
  onEnter: elements => {
    gsap.fromTo(elements, {
      rotate: 20,
      scale: 0.4,
      transformOrigin:"50% 50%"         // make transform origin be center for x and y axis
      }, {
        rotate: 0,
        scale: 1,
        opacity: 1,
        stagger: 0.009,
        duration: 0.8,
        delay: 0.4,
        ease: "ease"
    });
  },
  once: true
});




// // fade up
const fadeUp = gsap.utils.toArray("[fade]");
fadeUp.forEach((el, i) => {
  const anim = gsap.fromTo(el, {autoAlpha: 0, y:0}, {duration: 1.5, autoAlpha: 1});
  ScrollTrigger.create({
    trigger: el,
    animation: anim,
    toggleActions: 'play none none none',
    once: true,
  });
});


let h = document.querySelector(".hero_section").offsetHeight;
let arrow = document.querySelector(".scroll");
arrow.addEventListener("click", function(){
  gsap.to(window, {duration: 1, scrollTo: h});
});
