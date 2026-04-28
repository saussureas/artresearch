// CONFIG
  const ACCESS_KEY = "A0927-Y2FudGVtcHJhdGU";
  const REDIRECT_URL = "portal.html"; // placeholder page

  // Get HTML elements
  const searchBtn = document.getElementById("searchBtn");
  const searchInput = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  // Typing effect
  function typeText(element, text, index = 0) {
    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      setTimeout(() => typeText(element, text, index + 1), 20);
    }
  }

  // Handle access check
  function handleLogin() {
    const inputKey = searchInput.value.trim();
    resultsDiv.innerHTML = "";

    if (!inputKey) return;

    if (inputKey === ACCESS_KEY) {
      const successEl = document.createElement("div");
      resultsDiv.appendChild(successEl);
      typeText(successEl, "ACCESS GRANTED. WELCOME AGENT 0927.");

      setTimeout(() => {
        window.location.href = REDIRECT_URL;
      }, 1200);

    } else {
      const errorEl = document.createElement("div");
      resultsDiv.appendChild(errorEl);
      typeText(errorEl, "ERROR: INVALID ACCESS KEY.");
    }
  }

  // Button click
  searchBtn.addEventListener("click", handleLogin);

  // Enter key
  searchInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") handleLogin();
  });