document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.querySelector('.menu-icon');
  const navMenu = document.querySelector('.nav-menu');
  const menuItems = document.querySelectorAll('.nav-menu a');

  // Toggle menu function
  function toggleMenu() {
    const isOpen = menuButton.classList.contains('open');
    
    // Toggle the open class on the button
    if (isOpen) {
      menuButton.classList.remove('open');
      navMenu.classList.remove('show');
    } else {
      menuButton.classList.add('open');
      navMenu.classList.add('show');
    }
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
    menuButton.addEventListener('click', (e) => {
      e.preventDefault();
      toggleMenu();
    });
  }

  if (menuItems.length > 0) {
    menuItems.forEach(item => {
      item.addEventListener('click', handleMenuItemClick);
    });
  }

  // Initialize menu state
  handleResize();
  window.addEventListener('resize', handleResize);
});