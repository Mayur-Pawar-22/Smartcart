const cartItemsContainer = document.getElementById("cart-items");
const emptyMsg = document.getElementById("empty-msg");

let cart = JSON.parse(localStorage.getItem("cart")) || {};

function renderCart() {
  cartItemsContainer.innerHTML = '';
  let hasItems = false;

  Object.entries(cart).forEach(([name, qty]) => {
    hasItems = true;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <strong>${name}</strong>
      <span style="float:right;">Qty: ${qty}</span>
      <button class="remove-btn" onclick="removeItem('${name}')">X</button>
    `;

    cartItemsContainer.appendChild(div);
  });

  emptyMsg.style.display = hasItems ? "none" : "block";
}

function removeItem(name) {
  if (cart[name]) {
    cart[name]--;
    if (cart[name] === 0) delete cart[name];

    localStorage.setItem("cart", JSON.stringify(cart));

    let count = Object.values(cart).reduce((acc, val) => acc + val, 0);
    localStorage.setItem("cartCount", count);
    renderCart();
  }
}

renderCart();
