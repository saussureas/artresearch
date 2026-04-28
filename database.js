// files with page links
const logs = [
  { code: "TWFuaWxhIEZpbG0gQ2VudGVy", title: "Manila Film Center", page: "Manila_Film_Center.pdf" },
  { code: "QmlyaW5nYW4gQ2l0eQ==", title: "Biringan City", page: "Biringan_City.pdf" },
  { code: "V2hpdGUgTGFkeQ==", title: "White Lady", page: "White_Lady.pdf" },
  { code: "R3VpbWJhbCBWYW5pc2hpbmcgTWFuc2lvbg==", title: "Guimbal Vanishing Mansion", page: "Guimbal_Vanishing_Mansion.pdf" },
  { code: "VVAgRGlsaW1hbiBTcGlyaXRz", title: "UP Diliman Spirits", page: "UP_Diliman_Spirits.pdf" }
];

const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const resultsDiv = document.getElementById("results");

searchBtn.addEventListener("click", () => {
  const query = searchInput.value.trim();
  resultsDiv.innerHTML = "";

  if (!query) return;

  const found = logs.filter(log => log.code === query);

  if (found.length > 0) {
    found.forEach(log => {
      const logLink = document.createElement("div");
      logLink.className = "log-title";
      logLink.innerHTML = `<a href="${log.page}">${log.title}</a>`;
      resultsDiv.appendChild(logLink);
    });
  } else {
    const notFoundEl = document.createElement("div");
    notFoundEl.className = "typing";
    resultsDiv.appendChild(notFoundEl);
    typeText(notFoundEl, "ERROR: Log not found.");
  }
});

searchInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") searchBtn.click();
});

// Typing effect for error messages
function typeText(element, text, index = 0) {
  if (index < text.length) {
    element.innerHTML += text.charAt(index);
    setTimeout(() => typeText(element, text, index + 1), 20);
  }
}
