const burgerMenu = document.querySelector(".burger-menu");
const navItems = document.querySelector(".nav-items");
// const submitBtn = document.querySelector("#submitbtn");

burgerMenu.addEventListener("click", function () {
  navItems.classList.toggle("burger-menu-active");
});

// submitBtn.addEventListener("click", function () {
//   console.log("Test");
// });

// Form
const emailInput = document.querySelector("#email");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  console.log(emailInput.value);
  console.log(nameInput.value);
  console.log(phoneInput.value);
  console.log(messageInput.value);

  const sendEmail = async () => {
    const response = await fetch(
      `https://vanzylmedia.com/api/contact.php?name=${nameInput.value}`,
      {
        method: "GET",
        headers: {},
      }
    );

    if (!response.ok) {
      console.log("Error");
    }

    const data = await response.json();
    console.log("data", data);
  };

  await sendEmail();
});
