import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import SplitType from "split-type"

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger)

let typeSplit

// Split the text up
function runSplit() {
  typeSplit = new SplitType(".split-word", {
    types: "lines, words",
  })
  document.querySelectorAll(".word").forEach((element) => {
    const lineMask = document.createElement("div")
    lineMask.classList.add("line-mask")
    element.append(lineMask)
  })
  createAnimation()
}

runSplit()

// Create staggered animation
function createAnimation() {
  let allMasks = []
  document.querySelectorAll(".word").forEach(function (e) {
    allMasks.push(e.querySelector(".line-mask"))
  })

  gsap.to(allMasks, {
    width: "0%",
    duration: 1,
    stagger: 1,
    scrollTrigger: {
      trigger: ".about-content",
      start: "-50% center",
      end: "bottom center",
      scrub: 1,
      // markers: {
      //   startColor: "maroon",
      //   endColor: "orange",
      // },
    },
  })
}
