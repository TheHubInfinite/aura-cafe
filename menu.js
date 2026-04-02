const menuItems = [
    { 
        id: 1, 
        name: "Midnight Espresso", 
        description: "A bold, dark roast with notes of rich molasses and cocoa.",
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=500" 
    },
    { 
        id: 2, 
        name: "Classic Cappuccino", 
        description: "Perfectly balanced espresso with silky steamed milk and dense foam.",
        image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=500" 
    },
    { 
        id: 3, 
        name: "Velvet Latte", 
        description: "Smooth espresso poured over creamy milk with a touch of vanilla.",
        image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500" 
    },
    { 
        id: 4, 
        name: "Caramel Macchiato", 
        description: "Freshly steamed milk with vanilla-flavored syrup marked with espresso.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500" 
    },
    { 
        id: 5, 
        name: "Iced Cold Brew", 
        description: "Slow-steeped for 20 hours for an ultra-smooth, full-bodied taste.",
        image: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500" 
    },
    { 
        id: 6, 
        name: "Butter Croissant", 
        description: "Flaky, golden-brown pastry made with 100% French butter.",
        image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=500" 
    }
];

function displayMenu() {
    const container = document.getElementById('menu-container');
    if(!container) return;
    
    container.innerHTML = menuItems.map(item => `
        <div class="product-card">
            <div class="img-container">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <h3>${item.name}</h3>
            <p class="product-desc">${item.description}</p>
        </div>
    `).join('');
}

// Initialize menu on load
document.addEventListener('DOMContentLoaded', displayMenu);
