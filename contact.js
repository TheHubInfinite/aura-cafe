// --- DYNAMIC REVIEWS LOGIC ---
function loadReviews() {
    const storiesGrid = document.querySelector('.blog-grid'); // Ensure this class exists in your HTML
    const savedReviews = JSON.parse(localStorage.getItem('cafe_reviews')) || [];

    // This adds your custom reviews to the existing stories
    savedReviews.forEach(review => {
        const reviewHTML = `
            <div class="blog-card" style="border-left: 4px solid #967E76;">
                <p>"${review.text}"</p>
                <h4>— ${review.name}</h4>
            </div>
        `;
        // Insert at the top of the grid
        storiesGrid.insertAdjacentHTML('afterbegin', reviewHTML);
    });
}

// Call this function when the page loads
document.addEventListener('DOMContentLoaded', () => {
    // ... your existing init code (renderProducts, etc)
    loadReviews(); 
});