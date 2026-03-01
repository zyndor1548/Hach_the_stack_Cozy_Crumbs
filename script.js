document.getElementById('reservation-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const date = document.getElementById('res-date').value;
    const time = document.getElementById('res-time').value;
    const guests = document.getElementById('guests').value;

    // Standard confirmation message
    alert(`Thank you, ${name}! Your table for ${guests} on ${date} at ${time} has been requested.`);
    
    // Reset the form after submission
    this.reset();
});
const menuData = [
    { name: "Vancho Cake", category: "Cakes", price: "550", img: "1.jpg" },
    { name: "Matilda Choclate Cake", category: "Cakes", price: "440", img: "2.jpg" },
    { name: "Red velvet cheese cake", category: "Cakes", price: "600", img: "3.jpg" },
    { name: "Chocolate cupcake", category: "Cupcakes", price: "200", img: "4.jpg" },
    { name: "Choco pancake", category: "Dessert", price: "300", img: "5.jpg" },
    { name: "Choco Cookies", category: "Dessert", price: "250", img: "6.jpg" },
    { name: "Caramel Cappuchino", category: "Beverages", price: "200", img: "7.jpg" },
    { name: "Korean Ramen Noodles", category: "Pasta&Noodles", price: "300", img: "9.jpg" },
    { name: "Pasta", category: "Pasta&Noodles", price: "300", img: "10.jpg" },
    { name: "Greek salad", category: "Salads&Bowls", price: "300", img: "11.jpg" },
    { name: "Chicken Wrap", category: "Sandwiches&Wraps", price: "250", img: "12.jpg" },
    { name: "Club Sandwich", category: "Sandwiches&Wraps", price: "200", img: "13.jpg" },
    { name: "Red Velvet Cupcake", category: "Cupcakes", price: "200", img: "1.jpg" }
    
];

let cart = [];


function addToCart(name, price) {
    cart.push({ name: name, price: price });
    
    // Update the floating count on the UI
    document.getElementById('cart-count').textContent = cart.length;
    
    alert(`${name} added to your tray! 🧁`);
}




function openCart() {
    const modal = document.getElementById('cart-modal');
    const list = document.getElementById('cart-items-list');
    const totalEl = document.getElementById('cart-total-amount');
    
    // Clear the old list
    list.innerHTML = '';
    let total = 0;

    // Build the new list from the cart array
    cart.forEach((item, index) => {
        total += parseInt(item.price);
        list.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>₹${item.price}</span>
            </div>
        `;
    });

    totalEl.textContent = `₹${total}`;
    modal.style.display = 'flex';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function checkout() {
    if (cart.length === 0) return alert("Your tray is empty! 🌸");
    alert("Order successful! We're preparing your treats.");
    cart = []; // Reset tray
    document.getElementById('cart-count').textContent = '0';
    closeCart();
}
// 3. UI LOGIC (Runs once the page is ready)
document.addEventListener('DOMContentLoaded', () => {
    const menuItemsContainer = document.querySelector('.items'); // Where cards appear
    const categoryButtons = document.querySelectorAll('.items button');

    function filterMenu(category) {
        menuItemsContainer.innerHTML = ''; 

        const filtered = menuData.filter(item => item.category === category);

        filtered.forEach(item => {
            // The button here calls addToCart defined above
            const itemElement = `
                <div class="food-card">
                    <div class="card-img-wrapper">
                        <img src="${item.img}" alt="${item.name}" class="food-img">
                        <span class="category-badge">${item.category}</span>
                    </div>
                    <div class="card-content">
                        <h3>${item.name}</h3>
                        <div class="card-footer">
                            <span class="price">₹${item.price}</span>
                            <button class="order-btn" onclick="addToCart('${item.name}', '${item.price}')">Add +</button>
                        </div>
                    </div>
                </div>
            `;
            menuItemsContainer.innerHTML += itemElement;
            document.getElementById('cart-float').addEventListener('click', openCart);
        });
    }

    // Bind Category Buttons
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.textContent.trim();
            filterMenu(category);
        });
    });

    

    // Reservation Form Handler
    const reservationForm = document.getElementById('reservation-form');
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const resName = document.getElementById('name').value;
            alert(`Thank you, ${resName}! Your table request has been sent.`);
            this.reset();
        });
    }
});