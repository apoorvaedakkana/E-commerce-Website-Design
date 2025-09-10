// Centralized product data
const PRODUCTS = [
    { id: 1, name: 'Wireless Mouse', price: 25.00, category: 'Electronics', description: 'Ergonomic wireless mouse with long battery life.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/mouse.jpg' },
    { id: 2, name: 'Mechanical Keyboard', price: 75.00, category: 'Electronics', description: 'High-performance mechanical keyboard with RGB lighting.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/keyboard.jpg' },
    { id: 3, name: '4K Monitor', price: 350.00, category: 'Electronics', description: 'Ultra-HD monitor with vibrant colors.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/monitor.jpg' },
    { id: 4, name: 'Webcam', price: 60.00, category: 'Electronics', description: 'Full HD webcam with built-in microphone.', ratings: '⭐⭐⭐☆☆', imageUrl: 'assets/images/webcam.jpg' },
    { id: 5, name: 'Gaming Headset', price: 95.00, category: 'Electronics', description: 'Immersive gaming headset with 7.1 surround sound.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/gaming_headset.jpg' },
    { id: 6, name: 'Smartwatch', price: 150.00, category: 'Electronics', description: 'Fitness tracker and notification hub.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/smartwatch.jpg' },
    { id: 7, name: 'Portable Speaker', price: 40.00, category: 'Electronics', description: 'Compact and powerful Bluetooth speaker.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/portable spekaer.jpg' },
    { id: 8, name: 'External Hard Drive', price: 80.00, category: 'Electronics', description: '1TB external hard drive for all your storage needs.', ratings: '⭐⭐⭐☆☆', imageUrl: 'assets/images/hard drive.jpg' },
    { id: 9, name: 'Drawing Tablet', price: 120.00, category: 'Electronics', description: 'Professional drawing tablet with pressure sensitivity.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/drawing tablet.jpg' },
    { id: 10, name: 'Smart Home Hub', price: 100.00, category: 'Electronics', description: 'Control all your smart devices from one central hub.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/smarthomehub.jpg' },
    { id: 11, name: 'Leather Jacket', price: 120.00, category: 'Fashion', description: 'Stylish and durable leather jacket for all seasons.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/leatherjacket.jpg' },
    { id: 12, name: 'Slim Fit Jeans', price: 65.00, category: 'Fashion', description: 'Comfortable and fashionable slim fit jeans.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/slimfit.jpg' },
    { id: 13, name: 'Casual Sneakers', price: 50.00, category: 'Fashion', description: 'Everyday sneakers that go with any outfit.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/casualshoes.jpg' },
    { id: 14, name: 'Polo Shirt', price: 30.00, category: 'Fashion', description: 'Classic polo shirt made from breathable cotton.', ratings: '⭐⭐⭐☆☆', imageUrl: 'assets/images/poloshirt.jpg' },
    { id: 15, name: 'Winter Scarf', price: 20.00, category: 'Fashion', description: 'Soft wool scarf to keep you warm and stylish.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/winter scarf.jpg' },
    { id: 16, name: 'Hoodie', price: 45.00, category: 'Fashion', description: 'Comfortable fleece hoodie for a relaxed look.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/hoodie.jpg' },
    { id: 17, name: 'Running Shorts', price: 25.00, category: 'Fashion', description: 'Lightweight shorts for your workout sessions.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/running shorts.jpg' },
    { id: 18, name: 'Dress Shirt', price: 55.00, category: 'Fashion', description: 'Elegant dress shirt for formal occasions.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/dress shirt.jpg' },
    { id: 19, name: 'Sun Hat', price: 15.00, category: 'Fashion', description: 'Wide-brimmed sun hat for protection and style.', ratings: '⭐⭐⭐☆☆', imageUrl: 'assets/images/sunhat.jpg' },
    { id: 20, name: 'Tote Bag', price: 35.00, category: 'Fashion', description: 'Spacious and stylish tote bag for daily use.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/tote bag.jpg' },
    { id: 21, name: 'Vacuum Cleaner', price: 200.00, category: 'Home Appliances', description: 'Powerful vacuum cleaner with cyclonic technology.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/vaccum cleaner.jpg' },
    { id: 22, name: 'Air Fryer', price: 90.00, category: 'Home Appliances', description: 'Cook your favorite meals with less oil.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/air fryer.jpg' },
    { id: 23, name: 'Espresso Machine', price: 250.00, category: 'Home Appliances', description: 'Make barista-quality coffee at home.', ratings: '⭐⭐⭐⭐⭐', imageUrl: 'assets/images/coffeemaker.jpg' },
    { id: 24, name: 'Robot Vacuum', price: 300.00, category: 'Home Appliances', description: 'Automated vacuum cleaner for effortless cleaning.', ratings: '⭐⭐⭐⭐☆', imageUrl: 'assets/images/robot vaccum.jpg' },
   
];

// Cart functionality
const cart = {
    items: JSON.parse(localStorage.getItem('cartItems')) || {},
    save() {
        localStorage.setItem('cartItems', JSON.stringify(this.items));
    },
    add(productId, quantity = 1) {
        if (this.items[productId]) {
            this.items[productId].quantity += quantity;
        } else {
            const product = PRODUCTS.find(p => p.id == productId);
            if (product) {
                this.items[productId] = { ...product, quantity: quantity };
            }
        }
        this.save();
        
        const messageElement = document.getElementById(`add-to-cart-message-${productId}`);
        if (messageElement) {
            messageElement.textContent = 'Added to Cart!';
            messageElement.classList.add('visible');

            setTimeout(() => {
                messageElement.classList.remove('visible');
                messageElement.textContent = '';
            }, 2000);
        }
        
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    },
    remove(productId) {
        delete this.items[productId];
        this.save();
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    },
    updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            this.remove(productId);
        } else {
            this.items[productId].quantity = quantity;
            this.save();
        }
        window.dispatchEvent(new CustomEvent('cartUpdated'));
    },
    getTotal() {
        return Object.values(this.items).reduce((total, item) => total + (item.price * item.quantity), 0);
    },
    getItemCount() {
        return Object.values(this.items).reduce((total, item) => total + item.quantity, 0);
    }
};

// **Helper Functions to sync state across pages**

function updateCartCount() {
    const cartCountElement = document.getElementById('cart-item-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.getItemCount();
    }
}

function updateProductQuantities() {
    document.querySelectorAll('.quantity-display').forEach(span => {
        const productId = span.id.replace('quantity-display-', '');
        const currentQuantity = cart.items[productId] ? cart.items[productId].quantity : 0;
        span.textContent = currentQuantity;
    });
}

// **Frontend Interactions for the Checkout Page**
function renderCartItems() {
    const cartContainer = document.getElementById('cart-items-container');
    const cartTotalElement = document.getElementById('cart-total');
    const finalTotalElement = document.getElementById('final-total');

    if (!cartContainer || !cartTotalElement || !finalTotalElement) return;

    cartContainer.innerHTML = '';
    const cartItems = Object.values(cart.items);
    if (cartItems.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        cartTotalElement.textContent = '$0.00';
        finalTotalElement.textContent = '$0.00';
        return;
    }

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.dataset.productId = item.id;

        const totalItemPrice = (item.price * item.quantity).toFixed(2);

        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}" class="cart-item-image">
            <div class="item-details">
                <h3 class="item-name">${item.name}</h3>
                <p class="item-price">$<span>${item.price.toFixed(2)}</span></p>
                <p class="item-description">${item.description}</p>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn decrease-btn" data-id="${item.id}">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="quantity-btn increase-btn" data-id="${item.id}">+</button>
            </div>
            <p class="item-total">$<span>${totalItemPrice}</span></p>
        `;
        cartContainer.appendChild(itemElement);
    });

    updateCartTotal();
}

function updateCartTotal() {
    const cartTotalElement = document.getElementById('cart-total');
    const finalTotalElement = document.getElementById('final-total');
    const total = cart.getTotal();
    const formattedTotal = total.toFixed(2);
    
    if (cartTotalElement) {
        cartTotalElement.textContent = `$${formattedTotal}`;
    }
    if (finalTotalElement) {
        finalTotalElement.textContent = `$${formattedTotal}`;
    }
}

function attachCheckoutEventListeners() {
    const cartContainer = document.getElementById('cart-items-container');
    if (!cartContainer) return;

    cartContainer.addEventListener('click', (event) => {
        const target = event.target;
        const productId = target.dataset.id;

        if (target.classList.contains('increase-btn')) {
            cart.updateQuantity(productId, cart.items[productId].quantity + 1);
            renderCartItems();
        } else if (target.classList.contains('decrease-btn')) {
            cart.updateQuantity(productId, cart.items[productId].quantity - 1);
            renderCartItems();
        }
    });

    cartContainer.addEventListener('change', (event) => {
        const target = event.target;
        if (target.classList.contains('quantity-input')) {
            const productId = target.dataset.id;
            const newQuantity = parseInt(target.value);
            if (!isNaN(newQuantity) && newQuantity >= 1) {
                cart.updateQuantity(productId, newQuantity);
            } else {
                target.value = cart.items[productId].quantity;
            }
            renderCartItems();
        }
    });

    // Handle form submission for the new shipping information form
    const shippingForm = document.getElementById('shipping-form');
    if (shippingForm) {
        shippingForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            // Here you could process the form data if needed
            // For this implementation, we will just clear the cart and redirect
            cart.items = {};
            cart.save();
            
            // Redirect to the order confirmation page
            window.location.href = 'order_confirmation.html';
        });
    }
}

// Global event listener for `+` and `-` buttons on product pages
document.addEventListener('click', (event) => {
    const target = event.target;
    
    if (target.classList.contains('increase-btn') || target.classList.contains('decrease-btn')) {
        const productId = target.dataset.id;
        if (!productId) return; 

        let currentQuantity = cart.items[productId] ? cart.items[productId].quantity : 0;

        if (target.classList.contains('increase-btn')) {
            cart.updateQuantity(productId, currentQuantity + 1);
        } else if (target.classList.contains('decrease-btn')) {
            cart.updateQuantity(productId, currentQuantity - 1);
        }
    }
});


// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    updateProductQuantities();
    
    const isCheckoutPage = document.getElementById('cart-items-container');
    if (isCheckoutPage) {
        renderCartItems();
        attachCheckoutEventListeners();
    }
});

// Listener for cart updates to refresh all relevant elements across all pages
window.addEventListener('cartUpdated', () => {
    updateCartCount();
    updateProductQuantities();
    
    const isCheckoutPage = document.getElementById('cart-items-container');
    if (isCheckoutPage) {
        renderCartItems();
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slider .slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
        });
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    // Automatically change the slide every 2000 milliseconds (2 seconds)
    setInterval(nextSlide, 2000);
});