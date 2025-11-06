document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  const menuItems = document.querySelectorAll('.nav-menu a');

  // Toggle menu function
  function toggleMenu() {
    menuButton.classList.toggle('open');
    navMenu.classList.toggle('show');
  }

  // Close menu when clicking on a menu item (for mobile)
  function handleMenuItemClick() {
    if (window.innerWidth <= 768) {
      menuButton.classList.remove('open');
      navMenu.classList.remove('show');
    }
  }

  // Handle window resize
  function handleResize() {
    if (window.innerWidth > 768) {
      // Reset menu state on desktop
      menuButton.classList.remove('open');
      navMenu.classList.remove('show');
    }
  }

  // Add event listeners
  if (menuButton) {
    menuButton.addEventListener('click', toggleMenu);
  }

  menuItems.forEach(item => {
    item.addEventListener('click', handleMenuItemClick);
  });

  // Initialize menu state
  handleResize();
  window.addEventListener('resize', handleResize);
});