



const cart = {};
function addToCart(product) {
    if (cart[product.id]) {
        cart[product.id].quantity += 1;
    } else {
        cart[product.id] = { product, quantity: 1 };
    }
}
function viewCart() {
    // Loop through the cart and display each item and quantity
    for (const itemId in cart) {
        const { product, quantity } = cart[itemId];
        // Render product details, quantity, and price here
    }

    // Calculate and display the total price
}
function increaseQuantity(itemId) {
    cart[itemId].quantity += 1;
    // Update the displayed cart
    viewCart();
}

function decreaseQuantity(itemId) {
    if (cart[itemId].quantity > 1) {
        cart[itemId].quantity -= 1;
    } else {
        // Remove the item from the cart if the quantity is 1
        delete cart[itemId];
    }
    // Update the displayed cart
    viewCart();
}
function checkout() {
    const order = {
        items: Object.values(cart),
        // Add user's shipping and payment details here
    };

    // Send the order to the server for processing
    // Clear the cart
    cart = {};
    // Display a thank you message or redirect to a confirmation page
}
