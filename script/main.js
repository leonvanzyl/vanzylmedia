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
    submitBtn.setAttribute("disabled", true);
    const url = "https://vanzylmedia.com/api/contact.php";
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
          name: nameInput.value,
          email: emailInput.value,
          phone: phoneInput.value,
          message: messageInput.value,
        }),
      });

      if (!response.ok) {
        console.log("Error");
      }

      const data = await response.json();

      submitBtn.innerHTML = "Send message";
      formMessage.innerHTML = data.message;
    } catch (error) {
      submitBtn.innerHTML = "Send message";
      formMessage.innerHTML =
        "Sending message failed.  Please try again later.";
    }

    nameInput.value = "";
    emailInput.value = "";
    phoneInput.value = "";
    messageInput.value = "";

    const messageTimer = setTimeout(() => {
      formMessage.innerHTML = "";
      clearTimeout(messageTimer);
    }, 5000);

    submitBtn.removeAttribute("disabled");
  };

  await sendEmail();
});

// Set current copyright year

const yearEl = document.querySelector("#year");
const currentYear = new Date().getFullYear();
yearEl.innerHTML = currentYear;
