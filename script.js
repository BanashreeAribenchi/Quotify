const quoteTextElement = document.getElementById("quote-text");
const newQuoteButton = document.getElementById("new-quote-button");

let quotes = [];

function displayQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteTextElement.textContent = `“${quotes[randomIndex]}”`;
}

fetch("quotes.json")
  .then((response) => response.json())
  .then((data) => {
    quotes = data;
    displayQuote();
    newQuoteButton.addEventListener("click", displayQuote);
  })
  .catch((error) => {
    quoteTextElement.textContent = "Failed to load quotes.";
    console.error("Error loading quotes:", error);
  });
