let backdrop = document.querySelector(".backdrop");
let mobileNav = document.querySelector(".mobile-nav");
let modal = document.querySelector(".modal");
let modalNoButton = document.querySelector(".modal__action--negative");
let selectPlanButtons = document.querySelectorAll(".plan button");
let toggleButton = document.querySelector(".toggle-button");

// Function to open mobile nav
toggleButton.addEventListener("click", function () {
  mobileNav.classList.add("open");
  backdrop.classList.add("open");
});

// Function to close mobile nav and modal on backdrop click
backdrop.addEventListener("click", function () {
  mobileNav.classList.remove("open");
  if (modal) {
    closeModal();
  }
  backdrop.classList.remove("open");
});

// Function to close modal
if (modalNoButton) {
  modalNoButton.addEventListener("click", closeModal);
}

// Event listeners for select plan buttons (if applicable)
for (let i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener("click", function () {
    modal.classList.add("open");
    backdrop.classList.add("open");
  });
}

function closeModal() {
  if (modal) {
    modal.classList.remove("open");
  }
  backdrop.classList.remove("open");
}
