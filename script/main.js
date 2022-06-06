// Form
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");
const submitBtn = document.querySelector("#submitbtn");
const formMessage = document.querySelector("#form-message");

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const sendEmail = async () => {
    submitBtn.innerHTML = "Sending...";
    try {
      const response = await fetch(
        `https://vanzylmedia.com/api/contact.php?name=${nameInput.value}&email=${emailInput.value}&phone=${phoneInput.value}&message=${messageInput.value}`,
        {
          method: "GET",
          headers: {},
        }
      );

      if (!response.ok) {
        console.log("Error");
      }

      const data = await response.json();

      submitBtn.innerHTML = "Send message";
      formMessage.innerHTML = data.message;
      formMessage.classList.add("show");
    } catch (error) {
      submitBtn.innerHTML = "Send message";
      formMessage.innerHTML =
        "Sending message failed.  Please try again later.";
      formMessage.classList.add("show");
    }
  };

  await sendEmail();
});

// Set current copyright year

const yearEl = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;
