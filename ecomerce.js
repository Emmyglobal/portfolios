const cartItems = [];
const totalPriceElement = document.getElementById('total-price');
const cartList = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.getAttribute('data-name');
        const productPrice = parseFloat(product.getAttribute('data-price'));

        // Add to cart
        cartItems.push({ name: productName, price: productPrice });

        // Update cart display
        updateCart();
    });
});

function updateCart() {
    // Clear the current cart
    cartList.innerHTML = '';
    
    let total = 0;

    // Add items to the cart display
    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartList.appendChild(listItem);
        total += item.price;
    });

    totalPriceElement.textContent = total.toFixed(2);
}