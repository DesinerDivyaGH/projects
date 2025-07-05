let cart = [];

function addToCart(productName, productPrice) {
  // Add the product to the cart array
  cart.push({ name: productName, price: productPrice });

  // Update the cart button to reflect the number of items in the cart
  document.getElementById('cartButton').innerText = `Cart (${cart.length})`;
}

function openCart() {
  // Show the cart modal
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'flex';

  // Update the cart items in the modal
  const cartItems = document.getElementById('cartItems');
  cartItems.innerHTML = '';
  let total = 0;

  cart.forEach(item => {
    const li = document.createElement('li');
    li.innerText = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  // Update the total price
  document.getElementById('totalPrice').innerText = `Total: $${total.toFixed(2)}`;
}

function closeCart() {
  // Hide the cart modal
  const cartModal = document.getElementById('cartModal');
  cartModal.style.display = 'none';
}

function checkout() {
  // Display a simple checkout message
  alert('Thank you for your purchase!');
  cart = []; // Clear the cart after checkout
  document.getElementById('cartButton').innerText = 'Cart (0)';
  closeCart(); // Close the cart modal
}

// Show the cart when the cart button is clicked
document.getElementById('cartButton').addEventListener('click', openCart);
