// Hide elements with specific class names or IDs
function hideElements() {
    // Hide elements by class
    document.querySelectorAll('.example-class').forEach(el => el.style.display = 'none');

    // Hide elements by ID
    const exampleElement = document.getElementById('example-id');
    if (exampleElement) {
        exampleElement.style.display = 'none';
    }
}

// Run the hide function when the page loads
document.addEventListener('DOMContentLoaded', hideElements);
