// Tab switching functionality
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav a');
    const tabContents = document.querySelectorAll('.tab-content');
    
    // Function to show a specific tab
    function showTab(targetId) {
        // Hide all tabs
        tabContents.forEach(content => {
            content.classList.remove('active');
        });
        
        // Remove active class from all nav links
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        // Show the target tab
        const targetTab = document.querySelector(targetId);
        if (targetTab) {
            targetTab.classList.add('active');
        }
        
        // Add active class to the clicked nav link
        const activeLink = document.querySelector(`nav a[href="${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
    
    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            showTab(targetId);
            
            // Update URL hash without scrolling
            history.pushState(null, null, targetId);
        });
    });
    
    // Handle browser back/forward buttons
    window.addEventListener('popstate', function() {
        const hash = window.location.hash || '#welcome';
        showTab(hash);
    });
    
    // Show the correct tab on page load based on URL hash
    const initialHash = window.location.hash || '#welcome';
    showTab(initialHash);
});

// Collapsible visualization sections
document.addEventListener('DOMContentLoaded', function() {
    const visualizationTitles = document.querySelectorAll('.visualization-title');
    
    visualizationTitles.forEach(title => {
        title.addEventListener('click', function() {
            const section = this.getAttribute('data-section');
            const content = document.querySelector(`.visualization-content[data-section="${section}"]`);
            
            // Toggle active state
            this.classList.toggle('active');
            content.classList.toggle('active');
        });
    });
});
