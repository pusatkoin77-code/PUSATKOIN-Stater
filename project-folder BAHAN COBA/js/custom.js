// Custom JavaScript for Slides Framework

document.addEventListener('DOMContentLoaded', function() {
    // Initialize any custom functionality
    console.log('Slides framework with custom JS loaded');
    
    // Example: Add click event to all buttons
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Button clicked:', this.textContent);
        });
    });
    
    // Add custom class to body after load
    setTimeout(function() {
        document.body.classList.add('loaded');
    }, 500);
});