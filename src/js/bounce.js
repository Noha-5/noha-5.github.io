import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const animateText = document.querySelector(".skill-heading")
const text = "Skills"
const arr = text.split("")

generateText(arr)

function generateText(text) {
  text.forEach((data) => {
    const span = document.createElement("span")
    span.classList.add("char")
    span.textContent = data
    animateText.appendChild(span)
  })
}

gsap.registerPlugin(ScrollTrigger)
const bounce = gsap.timeline({
  scrollTrigger: {
    trigger: ".skills",
    start: "top 80%",
    // markers: true,
  },
})

bounce.from(".char", {
  opacity: 0,
  y: 100,
  stagger: 0.07,
  delay: 0.2,
  ease: "back.out",
  duration: 1,
})
