async function LoadImages() {
	const container = document.getElementById('sipsnapimages');
	if (!container) return;

	try {
		const response = await fetch('./images.json');
		if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
		const images = await response.json();

		for (const imageName of images) {
			await new Promise((resolve) => {
				const img = document.createElement('img');
				img.src = `static/images/${imageName}`;
				img.alt = "";
				img.onload = () => {
					container.appendChild(img);
					resolve();
				};
				img.onerror = () => {
					console.error(`Failed to load image: ${imageName}`);
					resolve();
				};
			});
		}
	} catch (error) {
		console.error('Error loading images:', error);
	}
}

const promotionalTexts = [
	"Craving something delicious? Don't wait-satisfy your hunger with just a click! Order now and enjoy fresh, flavorful food delivered straight to your door",
	"Hungry for more? Explore our sweet treats and savory snacks. Every bite is a moment of pure bliss!",
	"Need a pick-me-up? Our coffee is brewed to perfection. Sip, relax, and let the warmth embrace you.",
	"Sharing is caring! Grab a combo and enjoy a delightful feast with your loved ones at Cozy Crumbs.",
	"Discover your new favorite flavor. From classic bakes to trending sips, there's always something special waiting for you."
];

let currentTextIndex = 0;

function CyclePromotionalText() {
	const textElement = document.getElementById('order-text');
	if (textElement) {
		currentTextIndex = (currentTextIndex + 1) % promotionalTexts.length;
		textElement.textContent = promotionalTexts[currentTextIndex];
	}
}

const menuItems = [
	"Cakes",
	"Cupcakes",
	"Desserts",
	"Drinks",
	"Beverages",
	"Pasta&Noodles",
	"Sandwiches&Wraps",
	"Salads&Bowls"
];

function LoadMenuItems() {
	const menuContainer = document.getElementById('items');
	if (menuContainer) {
		menuItems.forEach(item => {
			const button = document.createElement('button');
			button.textContent = item;
			menuContainer.appendChild(button);
		});
	}
}

document.addEventListener('DOMContentLoaded', () => {
	LoadImages();
	CyclePromotionalText();
	LoadMenuItems();
	setInterval(CyclePromotionalText, 300000);
});
