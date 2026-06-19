function order(product, price) {
  alert(
    "You selected: " + product +
    "\nPrice: " + price +
    "\n\nClick OK and order on WhatsApp."
  );
}
// Welcome message
console.log("Welcome to Chelo Craft");

// Shop button action
const shopBtn = document.querySelector(".shop-btn");

if (shopBtn) {
  shopBtn.addEventListener("click", () => {
    alert("Welcome to Chelo Craft 👕✨");
  });
}
let cartCount = 0;

const cartDisplay = document.getElementById("cart-count");
const buyButtons = document.querySelectorAll(".buy-btn");

buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    cartCount++;
    cartDisplay.textContent = cartCount;

    alert("Item added to cart 🛒");
  });
});
buyButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Added to cart 🛒✨ Thank you for shopping with Chelo Craft!");
  });
});
const shopButton = document.querySelector(".shop-btn");

shopButton.addEventListener("click", () => {
  document.getElementById("products").scrollIntoView({
    behavior: "smooth"
  });
});