import { ScrollTrigger } from "gsap/ScrollTrigger"

let cardCount = 3
const cards = document.querySelectorAll(".project-card")
const cardsContainer = document.querySelector(".project-cards-container")
const loadMoreBtn = document.querySelector(".load-more")
const seeLessBtn = document.querySelector(".see-less")

function displayBtn() {
  if (cards.length <= 3) {
    loadMoreBtn.style.display = "none"
    seeLessBtn.style.display = "none"
  } else if (cardCount >= cards.length) {
    loadMoreBtn.style.display = "none"
    seeLessBtn.style.display = "block"
  } else {
    loadMoreBtn.style.display = "block"
    seeLessBtn.style.display = "none"
  }
}
displayBtn()

loadMoreBtn.addEventListener("click", function () {
  // For reseting the end/height for dot shrink animation when more items are loaded
  ScrollTrigger.refresh(true)

  for (let i = cardCount; i < cardCount + 3 && i < cards.length; i++) {
    if (cards[i]) {
      cards[i].style.display = "flex"
    }
  }
  cardCount += 3

  displayBtn()
})

seeLessBtn.addEventListener("click", function () {
  ScrollTrigger.refresh(true)

  for (let i = cards.length - 1; i >= 3; i--) {
    if (cards[i]) {
      cards[i].style.display = "none"
    }
  }
  cardCount = 3
  cardsContainer.scrollIntoView({
    behavior: "smooth",
    block: "end",
  })

  displayBtn()
})
