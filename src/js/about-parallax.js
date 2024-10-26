import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Parallax window animation

gsap.to(".moon", {
  x: -80,
  y: -100,
  scrollTrigger: {
    trigger: ".about-parallax",
    start: "0% 50%",
    end: "250% top",
    scrub: 4,
    // markers: true,
  },
})
gsap.to(".bird", {
  x: 50,
  y: -100,
  scale: 0.6,
  scrollTrigger: {
    trigger: ".about-parallax",
    start: "0% 50%",
    end: "top top",
    scrub: 2,
    // markers: true,
  },
})
gsap.to(".cloud", {
  x: 80,
  scrollTrigger: {
    trigger: ".about-parallax",
    start: "0% 50%",
    end: "bottom top",
    scrub: 6,
    // markers: true,
  },
})
