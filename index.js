// 1. MOBILE MENU TOGGLE
function toggleMenu() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

// 2. PRODUCT DATA
const products = [
    { 
        id: 1, 
        name: "Midnight Dark Roast", 
        desc: "A bold, intense roast with deep chocolate undertones.",
        image: "https://i.pinimg.com/736x/4c/28/e2/4c28e2420bf38c50120dba0cbaf42e8d.jpg" 
    },
    { 
        id: 2, 
        name: "Velvet Espresso", 
        desc: "Smooth and creamy, perfect for your daily latte.",
        image: "https://i.pinimg.com/736x/6a/86/c3/6a86c387495a30851e5843a582c7b6f2.jpg" 
    },
    { 
        id: 3, 
        name: "Ethiopian Yirgacheffe", 
        desc: "Bright, floral notes with a clean, citrus finish.",
        image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=800&q=80" 
    }
];

// 3. RENDER PRODUCTS
function renderProducts() {
    const grid = document.getElementById('product-grid');
    if (!grid) return;

    grid.innerHTML = products.map(p => `
        <div class="product-card">
            <img src="${p.image}" alt="${p.name}">
            <h3>${p.name}</h3>
            <p>${p.desc}</p>
        </div>
    `).join('');
}

// INITIALIZE
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
});
