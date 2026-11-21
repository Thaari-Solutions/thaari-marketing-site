// Reusable UI Builders
const UI = {
  sectionHeader: ({ badge = "", title = "", subtitle = "", isLive = false }) => `
    <div class="section-header">
      ${badge ? `<span class="badge ${isLive ? 'badge-live' : ''}">${badge}</span>` : ''}
      <h2 class="heading-lg">${title}</h2>
      ${subtitle ? `<p class="text-lead">${subtitle}</p>` : ''}
    </div>
  `,

  featureCard: ({ iconSvg = "", title = "", description = "" }) => `
    <div class="card">
      <div class="icon-box">${iconSvg}</div>
      <h3 class="heading-md" style="margin-bottom: 0.65rem;">${title}</h3>
      <p>${description}</p>
    </div>
  `
};

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("mobile-open");
    });
  }

  // Highlight Active Navigation Tab
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  // Bind Links and Contact Details from constants.js
  if (typeof SITE_CONFIG !== "undefined") {
    document.querySelectorAll("[data-social]").forEach(el => {
      const key = el.getAttribute("data-social");
      if (SITE_CONFIG.links && SITE_CONFIG.links[key]) {
        el.setAttribute("href", SITE_CONFIG.links[key]);
      }
    });

    const emailText = document.getElementById("footerEmailText");
    const phoneText = document.getElementById("footerPhoneText");
    const locationText = document.getElementById("footerLocationText");

    if (emailText) emailText.textContent = SITE_CONFIG.email;
    if (phoneText) phoneText.textContent = "WhatsApp: " + SITE_CONFIG.phoneDisplay;
    if (locationText) locationText.textContent = SITE_CONFIG.location;
  }
});