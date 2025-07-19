let cartCount = 0;

document.querySelectorAll('.cart-btn').forEach(button => {
  button.addEventListener('click', () => {
    cartCount++;
    document.getElementById('cart-count').textContent = cartCount;
    alert("Added to cart!");
  });
});

document.querySelectorAll('.info-btn').forEach((button, index) => {
  button.addEventListener('click', () => {
    const info = button.nextElementSibling.nextElementSibling;
    info.style.display = info.style.display === "block" ? "none" : "block";
  });
});

function payNow() {
  alert("Redirecting to secure payment gateway...");
}
