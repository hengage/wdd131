// Review submission counter functionality
document.addEventListener('DOMContentLoaded', function() {
    const reviewCounter = document.getElementById('review-counter');
    if (reviewCounter) {
        let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        reviewCount++;
        
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display the count
        reviewCounter.textContent = reviewCount;
    }
});
