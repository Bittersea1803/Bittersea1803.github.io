// script.js

document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Prikaz feedbacka (dummy)
    const feedback = document.getElementById('feedback');
    feedback.style.display = 'block';
    
    // Sakrij feedback nakon 5 sekundi
    setTimeout(function() {
        feedback.style.display = 'none';
    }, 5000);
});
