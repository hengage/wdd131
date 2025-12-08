/**
 * Loads and initializes the header component with logo and mobile navigation.
 * This function is designed to be used across multiple pages to maintain consistent header behavior.
 * 
 * @example
 * // Include in HTML:
 * <header></header>
 * <script src="scripts/shared.js"></script>
 * 
 * The header will be automatically populated with:
 * - Site logo
 * - Mobile-responsive navigation toggle
 */
function loadHeader() {
    const header = document.querySelector('header');
    header.innerHTML = `
        <a href="home.html" class="logo-link">
            <img src="images/henry-chizoba-logo.png" alt="Logo"
                width="100"
                height="100"
                loading="lazy">
        </a>

        <nav class="nav" styl="border: 2px solid blue">
            <button class="nav-toggle" aria-label="Toggle navigation"
            styl="border: 2px dotted black">
                <img src="images/navigation-bar.png" alt="Navigation Menu"
                    width="40"
                    height="50"
                    loading="lazy"
                    class="nav-icon">
                <img src="images/close.png" alt="Close Menu"
                    width="35"
                    height="35"
                    loading="lazy"
                    class="close-icon">
            </button>
            <ul class="nav-menu" styl="border: 2px solid gray">
                <li><a href="skills.html">Skills</a></li>
                <li><a href="projects.html">Projects</a></li>
                <li><a href="contact.html">Contact Me</a></li>
                <li><a href="https://flowcv.com/resume/epsr1qulpg" target="_blank" class="cta-button">View My CV</a></li>
            </ul>
            </nav>
    `;

    // Add click handler for mobile menu toggle
    const navToggle = header.querySelector('.nav-toggle');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            const nav = header.querySelector('.nav');
            nav.classList.toggle('active');
            // navToggle.classList.toggle('active');
        });
    }
}

/**
 * Loads and initializes the footer component with social links and copyright.
 * This shared component ensures consistent footer content across all pages.
 * 
 * @example
 * // Include in HTML:
 * <footer></footer>
 * <script src="scripts/shared.js"></script>
 * 
 * The footer includes:
 * - Social media links (GitHub, LinkedIn, Email)
 * - Dynamic copyright year
 */
function loadFooter() {
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `
        <div>
            <ul class="social-links">
                <li><a href="https://github.com/hengage" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><i class="fab fa-github"></i></a></li>
                <li><a href="https://linkedin.com/in/henrychizoba" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a></li>
                <li><a href="mailto:henrychizobaudeh@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email"><i class="fas fa-envelope"></i></a></li>
            </ul>
            <p> ${new Date().getFullYear()} Henry Chizoba Udeh</p>
            </div>
        `;
    }
}

/**
 * Initializes all shared components when the DOM is fully loaded.
 * This function is automatically called and handles the setup of:
 * - Header with mobile navigation
 * - Footer with dynamic content
 * 
 * @private
 */
function initComponents() {
    loadHeader();
    loadFooter();
}

// Automatically initialize components when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initComponents);
} else {
    initComponents();
}