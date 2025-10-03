// 1) Theme toggle persists to localStorage
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('themeToggle');
    const icon = document.getElementById('themeIcon');
    const logo = document.getElementById('brandLogo');

    function updateLogo(theme) {
        if (!logo) return;
        const light = logo.dataset.logoLight;
        const dark = logo.dataset.logoDark;
        logo.src = theme === 'dark' ? dark : light;
        logo.alt = `Paws & Pixels logo${theme === 'dark' ? ' (dark)' : ''}`;
    }

    function apply(mode) {
        const m = mode === 'dark' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-bs-theme', m);
        localStorage.setItem('theme', m);
        if (icon) icon.className = m === 'dark' ? 'bi bi-moon' : 'bi bi-sun';
        updateLogo(m);
    }

    apply(localStorage.getItem('theme') || 'light');
    btn?.addEventListener('click', () => {
        const next = (localStorage.getItem('theme') || 'light') === 'dark' ? 'light' : 'dark';
        apply(next);
    });
});




// 2) Bootstrap form validation for Contact page
//The form (() => {})(); is an Immediately Invoked Function Expression (IIFE) this runs once as soon as the script loads, works when <script> is inside the body tag if you include it in <head> then you need to wrap it with <DomContentLoaded>
(() => {
    const form = document.getElementById('contactForm');
    if (!form) return;
    //gets the elements from HTML
    const nameEl = form.querySelector('input[type="text"]');
    const emailEl = form.querySelector('input[type="email"]');
    const msgEl = form.querySelector('textarea');

    const validate = () => {
        // Clear any previous custom errors
        [nameEl, emailEl, msgEl].forEach(el => el.setCustomValidity(''));

        // Name: required
        if (!nameEl.value.trim()) {
            nameEl.setCustomValidity('Please enter your name.');
        }

        // Email: required + should be valid
        if (!emailEl.value.trim()) {
            emailEl.setCustomValidity('Please enter a valid email address.');
        } else {
            //RegEx: ensures there are one or more characters of which are not whitespace and @ then must have an @ sign followed by domain name with . followed by at least two characters which are not space and @ in Top Level Domain
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
            if (!emailPattern.test(emailEl.value.trim())) {
                emailEl.setCustomValidity('Please enter a valid email address.');
            }
        }

        // Message: min length > 5
        if (msgEl.value.trim().length < 6) {
            msgEl.setCustomValidity('Your message must be at least 6 characters.');
        }

        return form.checkValidity();
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (!validate()) {
            e.stopPropagation();
            form.classList.add('was-validated');
            form.reportValidity(); // shows native hints where supported
            return;
        }

        form.classList.add('was-validated');
        const name = nameEl.value.trim();
        alert(`Thanks${name ? `, ${name}` : ''}! Your message was submitted.`);
        form.reset();
        form.classList.remove('was-validated');
    });

    //As the fields are getting valid by satisfying the conditions, the error message gets removed.
    [nameEl, emailEl, msgEl].forEach(el => {
        el.addEventListener('input', () => {
            el.setCustomValidity('');
            validate();
        });
    });
})();
