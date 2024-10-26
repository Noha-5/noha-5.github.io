import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

gsap.to(".dot", {
  scale: "38",
  repeat: 1,
  yoyo: true,
  scrollTrigger: {
    trigger: ".projects-container",
    start: "200px center",
    end: () => {
      return `+=${
        document
          .querySelector(".project-cards-container")
          .getBoundingClientRect().height + 500
      }`
    },
    scrub: 0.5,
    pin: ".dot",
    // markers: true,
    invalidateOnRefresh: true,
  },
})

// For Mobile to reset the end/height for dot shrink animation when end is reached
document
  .querySelector(".projects-container")
  .addEventListener("touchstart", () => {
    ScrollTrigger.refresh()
  })
