document.addEventListener("DOMContentLoaded", () => {
  const cartCountEl = document.querySelector(".cart-count");
  let cartCount = 0;

  // Create toast notification element and add CSS class
  const toastEl = document.createElement("div");
  toastEl.classList.add("toast-notification");
  document.body.appendChild(toastEl);

  // Function to show toast with message
  function showToast(message) {
    toastEl.textContent = message;
    toastEl.style.display = "block";

    setTimeout(() => {
      toastEl.style.display = "none";
    }, 3000); // Hide after 3 seconds
  }

  // Handle quantity buttons and add to cart
  document.querySelectorAll(".product-card").forEach((card) => {
    const qtyInput = card.querySelector("input[type='number']");
    const minusBtn = card.querySelectorAll(".qty-btn")[0];
    const plusBtn = card.querySelectorAll(".qty-btn")[1];

    minusBtn.addEventListener("click", () => {
      if (qtyInput.value > 1) {
        qtyInput.value = parseInt(qtyInput.value) - 1;
      }
    });

    plusBtn.addEventListener("click", () => {
      qtyInput.value = parseInt(qtyInput.value) + 1;
    });

    // Add to Cart
    const addToCartBtn = card.querySelector(".add-to-cart-btn");
    addToCartBtn.addEventListener("click", () => {
      const qty = parseInt(qtyInput.value);
      cartCount += qty;
      cartCountEl.textContent = cartCount;

      // Change button to show tick mark and "Added to Cart"
      addToCartBtn.innerHTML = "✔ Added to Cart";
      addToCartBtn.disabled = true;

      showToast(`${qty} item(s) added to cart.`);

      // Optionally open cart page in new tab
      // window.open("cart.html", "_blank");
    });
  });

  // Wishlist icon click
  document.querySelector(".fa-heart")?.addEventListener("click", () => {
    window.open("wishlist.html", "_blank");
  });

  // User/account icon click
  document.querySelector(".fa-user")?.addEventListener("click", () => {
    window.open("account.html", "_blank");
  });

  // Shopping cart icon click
  document.querySelector(".fa-shopping-cart")?.addEventListener("click", () => {
    window.open("cart.html", "_blank");
  });
});
