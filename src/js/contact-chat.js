import gsap from "gsap"
import { Timeline } from "gsap/gsap-core"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// messages reveal animation
function revealMessage(tl) {
  tl.from([".my-messages>li", ".visitor-messages>div"], {
    opacity: 0,
    y: -10,
    stagger: 0.3,
    ease: "elastic.out(1,0.3)",
  })
}

let mm = gsap.matchMedia()
// Desktop
mm.add("(min-width: 50rem)", () => {
  const tl = new Timeline({
    scrollTrigger: {
      trigger: ".chat-box",
      start: "top center",
    },
  })

  // chat window box scale animation
  tl.from(".chat-box", {
    x: -180,
    y: -80,
    scale: 0.3,
  })

  revealMessage(tl)
})

// Mobile
mm.add("(max-width: 49.9rem)", () => {
  const tl = new Timeline({
    scrollTrigger: {
      trigger: ".chat-box",
      start: "top center",
    },
  })

  revealMessage(tl)
})
