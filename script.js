document.addEventListener("DOMContentLoaded", () => {
  const consentPopup = document.getElementById("consent-popup");
  const acceptBtn = document.getElementById("accept-btn");

  // Check localStorage
  const consentGiven = localStorage.getItem("cookieConsent");

  if (!consentGiven) {
    consentPopup.style.display = "flex";
  }

  acceptBtn.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "true");
    consentPopup.style.display = "none";
  });
});
