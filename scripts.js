// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    
    form.addEventListener('submit', function(event) {
        const requiredFields = document.querySelectorAll('[data-required="true"]');
        let valid = true;

        // Clear previous validation feedback
        document.querySelectorAll('.is-invalid').forEach(el => el.classList.remove('is-invalid'));
        document.querySelectorAll('.invalid-feedback').forEach(el => el.style.display = 'none');

        requiredFields.forEach(field => {
            if (field.value === '' || field.value === null) {
                field.classList.add('is-invalid');
                const feedback = field.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.style.display = 'block';
                }
                valid = false;
            }
        });

        if (!valid) {
            event.preventDefault();
        }
    });

    const fields = document.querySelectorAll('input, select');
    fields.forEach(field => {
        field.addEventListener('input', function() {
            if (this.value !== '') {
                this.classList.remove('is-invalid');
                const feedback = this.nextElementSibling;
                if (feedback && feedback.classList.contains('invalid-feedback')) {
                    feedback.style.display = 'none';
                }
            }
        });
    });
});



