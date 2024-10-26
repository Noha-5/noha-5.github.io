import emailjs from "@emailjs/browser"
import gsap from "gsap"
import { Timeline } from "gsap/gsap-core"

const contactForm = document.getElementById("contact-form")
const sendBtn = document.querySelector(".send-btn")

// Send message form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault()

  // remove error message if present
  const errorBox = document.querySelector(".error-message")
  if (errorBox) {
    errorBox.remove()
  }

  // send button styles when sending message
  sendBtn.disabled = true
  sendBtn.textContent = "Please wait..."

  sendMessage()
})

async function sendMessage() {
  const serviceId = "service_vrncumr"
  const templateId = "template_6sagptl"

  try {
    const response = await emailjs.sendForm(
      serviceId,
      templateId,
      contactForm,
      {
        publicKey: "9gymyySBERYfmhrCl",
      }
    )

    // On success rmove form and display sent message and thank you message
    displayChat()

    // console.log("message sent", response, response.status, response.text)
  } catch (error) {
    // On error display error
    displayError()

    // console.log("Sending message failed:", error, error.message)
  }
}

// On success
function displayChat() {
  // Remove the contact form
  const scrollContainer = document.querySelector(".scroll-container")
  scrollContainer.removeChild(contactForm)

  // Create and Add visitor's message
  const sendor = document.createElement("ul")
  sendor.classList.add("my-messages", "yellow-right-aligned", "new-messages")
  const sendorMessage = scrollContainer.children[0].children[0].cloneNode(true)
  sendorMessage.children[0].src = "images/contact/visitor-profile.png"
  sendorMessage.children[1].textContent = contactForm.message.value
  sendor.append(sendorMessage)

  // Create and Add your reply message
  const myReply = document.createElement("ul")
  myReply.classList.add("my-messages", "new-messages")
  const myMessage = scrollContainer.children[0].children[0].cloneNode(true)
  myMessage.children[1].textContent = "Thank you for your message!"
  myReply.append(myMessage)

  // Add both messages to container
  scrollContainer.appendChild(sendor)
  scrollContainer.appendChild(myReply)

  // Running animation for adding messages
  const tl = new Timeline({
    scrollTrigger: {
      trigger: ".chat-box",
      start: "top center",
    },
  })

  tl.from(".new-messages>li", {
    opacity: 0,
    y: -10,
    stagger: 0.3,
    ease: "elastic.out(1,0.3)",
  })
}

// On error
function displayError() {
  const previousChats = document.querySelector(".scroll-container").children[0]
  // Create and display an error chat message
  const error = document.createElement("div")
  error.classList.add("error-message")
  error.textContent = "⛔ There was an error. Send an email or try again later."
  // Inserting error message after previous messages
  previousChats.insertAdjacentElement("afterend", error)

  // Running animation for adding error message
  gsap.from(".error-message", {
    scrollTrigger: {
      trigger: ".chat-box",
      start: "top center",
    },
    opacity: 0,
    repeat: 2,
    yoyo: true,
    duration: 0.25,
  })

  // Reset send button styles
  sendBtn.disabled = false
  sendBtn.textContent = "Send Message"
}
