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
    { name: "Vancho Cake", category: "Cakes", price: "₹550", img: "1.jpg" },
    { name: "Matilda Choclate Cake", category: "Cakes", price: "₹440", img: "2.jpg" },
    { name: "Red velvet cheese cake", category: "Cakes", price: "₹600", img: "3.jpg" },
    { name: "Chocolate cupcake", category: "Cupcakes", price: "₹200", img: "4.jpg" },
    { name: "Choco pancake", category: "Dessert", price: "₹300", img: "5.jpg" },
    { name: "Choco Cookies", category: "Dessert", price: "₹250", img: "6.jpg" },
    { name: "Caramel Cappuchino", category: "Beverages", price: "₹200", img: "7.jpg" },
    { name: "Korean Ramen Noodles", category: "Pasta&Noodles", price: "₹300", img: "9.jpg" },
    { name: "Pasta", category: "Pasta&Noodles", price: "₹300", img: "10.jpg" },
    { name: "Greek salad", category: "Salads&Bowls", price: "₹300", img: "11.jpg" },
    { name: "Chicken Wrap", category: "Sandwiches&Wraps", price: "₹250", img: "12.jpg" },
    { name: "Club Sandwich", category: "Sandwiches&Wraps", price: "₹200", img: "13.jpg" },
    { name: "Red Velvet Cupcake", category: "Cupcakes", price: "₹200", img: "14.jpg" },
    
];
function filterMenu(category) {
    const menuItemsContainer = document.querySelector('.items');
    menuItemsContainer.innerHTML = ''; 

    const filtered = menuData.filter(item => item.category === category);

    filtered.forEach(item => {
        const itemElement = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.name}" class="menu-img">
                <div class="menu-info">
                    <h3>${item.name}</h3>
                    <p class="price">${item.price}</p>
                    <button class="add-fav">❤️ Favorite</button>
                </div>
            </div>
        `;
        menuItemsContainer.innerHTML += itemElement;
    });
}
const categoryButtons = document.querySelectorAll('.items button');

categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent;
        filterMenu(category);
    });
});