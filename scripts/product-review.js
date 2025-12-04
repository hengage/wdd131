const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

function populateProductSelect() {
    const select = document.getElementById("product");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = capitalizeFirstLetter(product.name);
        select.appendChild(option);
    });
}

function selectRatingStar() {
    const select = document.getElementById("rating");
    products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.id;
        option.textContent = capitalizeFirstLetter(product.name);
        select.appendChild(option);
    });
}

// Initialize the page when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Populate product select dropdown on form page
    if (document.getElementById('product')) {
        populateProductSelect();
    }
    
    // Update review counter on review page
    const reviewCounter = document.getElementById('review-counter');
    if (reviewCounter) {
        // Get the current count from localStorage or initialize to 0
        let reviewCount = parseInt(localStorage.getItem('reviewCount')) || 0;
        
        // Increment the counter
        reviewCount++;
        
        // Save the updated count back to localStorage
        localStorage.setItem('reviewCount', reviewCount);
        
        // Display the count
        reviewCounter.textContent = reviewCount;
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}