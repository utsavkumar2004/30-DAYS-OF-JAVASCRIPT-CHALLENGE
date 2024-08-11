const products = [
    { id: 1, name: "Product 1", price: "$19.99", description: "Description 1", imageUrl: "url-to-image-1.jpg" },
    { id: 2, name: "Product 2", price: "$29.99", description: "Description 2", imageUrl: "url-to-image-2.jpg" }
];

const productGrid = document.querySelector('.product-grid');
const cartItems = [];

products.forEach(product => {
    const card = document.createElement('div');
    card.classList.add('product-card');

    // Create elements for product details
    const img = document.createElement('img');
    img.src = product.imageUrl;
    img.alt = product.name;

    const name = document.createElement('h3');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = product.price;

    const desc = document.createElement('p');
    desc.textContent = product.description;

    // Create and append Add to Cart button
    const addToCartBtn = document.createElement('button');
    addToCartBtn.textContent = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => addToCart(product));

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(price);
    card.appendChild(desc);
    card.appendChild(addToCartBtn);

    productGrid.appendChild(card);
});

function addToCart(product) {
    cartItems.push(product);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('shopping-cart');
    cartContainer.innerHTML = ''; // Clear existing items

    cartItems.forEach((item, index) => {
        const cartItemDiv = document.createElement('div');
        
        // Quantity input field
        const qtyInput = document.createElement('input');
        qtyInput.type = 'number';
        qtyInput.value = 1;
        qtyInput.min = 1;
        qtyInput.dataset.index = index; // Store item index

        // Remove button
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.addEventListener('click', () => removeFromCart(index));

        cartItemDiv.textContent = `${item.name} - ${item.price} x `;
        cartItemDiv.appendChild(qtyInput);
        cartItemDiv.appendChild(removeBtn);
        cartContainer.appendChild(cartItemDiv);
    });
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateCartDisplay();
}

document.getElementById('checkout-form').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const formData = new FormData(event.target);
    const orderDetails = Object.fromEntries(formData.entries());
    alert(`Order confirmed!\nName: ${orderDetails.name}\nAddress: ${orderDetails.address}\nPayment: ${orderDetails.payment}`);
});
