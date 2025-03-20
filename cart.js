// Load cart data from localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to update cart counter
function updateCartCounter() {
    const cartCounter = document.getElementById("cart-counter");
    if (cartCounter) {
        cartCounter.innerText = cart.length;
    }
}

// Function to render cart items
function renderCartItems() {
    const cartItemsContainer = document.getElementById("cart-items");
    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = ""; // Clear existing items

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = "<p>Your cart is empty.</p>";
        return;
    }

    cart.forEach((item) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <p>${item.name}</p>
            <p>${item.price}</p>
        `;

        cartItemsContainer.appendChild(cartItem);
    });
}

// Function to add item to cart
function addToCart(event) {
    const product = event.target.closest(".product, .slide");
    if (!product) return;

    const name = product.querySelector("p:nth-child(2)")?.innerText || "Unknown Product";
    const price = product.querySelector("p:nth-child(3)")?.innerText || "$0";
    const image = product.querySelector("img")?.src || "";

    // Add item to cart array
    cart.push({ name, price, image });

    // Save cart to localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Update cart counter
    updateCartCounter();

    // Render cart items (if applicable)
    if (document.getElementById("cart-items")) {
        renderCartItems();
    }

    alert(`${name} has been added to your cart!`);
}

// Attach event listener to "Add to Cart" buttons
document.addEventListener("DOMContentLoaded", function () {
    // Attach event listeners for add-to-cart buttons
    document.querySelectorAll(".add-to-cart").forEach((btn) => {
        btn.addEventListener("click", addToCart);
    });

    // Update cart counter on page load
    updateCartCounter();

    // Render cart items on page load (if on cart.html)
    if (document.getElementById("cart-items")) {
        renderCartItems();
    }
});
