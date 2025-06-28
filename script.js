   
        const themeToggle = document.getElementById('themeToggle');
        const html = document.documentElement;
        let dark = localStorage.getItem('theme') === 'dark';
        function setTheme(isDark) {
            html.setAttribute('data-theme', isDark ? 'dark' : '');
            themeToggle.innerHTML = isDark
                ? '<i class="fas fa-sun"></i>'
                : '<i class="fas fa-moon"></i>';
                localStorage.setItem('theme', isDark ? 'dark' : 'light');
            }
        setTheme(dark);
        themeToggle.onclick = () => {
            dark = !dark;
            setTheme(dark);
        };
        
     
        const typedText = document.getElementById('typed');
        const phrases = [
            "Front-End Developer.",
            "UI/UX Enthusiast.",
            "JavaScript Lover.",
            "React & Node.js Expert.",
            "Open Source Contributor."
        ];
        let phraseIndex = 0, charIndex = 0, typing = true;
        function typeLoop() {
            let current = phrases[phraseIndex];
            if (typing) {
                if (charIndex < current.length) {
                    typedText.textContent = current.slice(0, ++charIndex);
                    setTimeout(typeLoop, 70);
                } else {
                    typing = false;
                    setTimeout(typeLoop, 1200);
                }
            } else {
                if (charIndex > 0) {
                    typedText.textContent = current.slice(0, --charIndex);
                    setTimeout(typeLoop, 30);
                } else {
                    typing = true;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    setTimeout(typeLoop, 400);
                }
            }
        }
        typeLoop();

        const navLinks = document.querySelectorAll('nav a');
        function onScroll() {
            let scrollPos = window.scrollY + 80;
            navLinks.forEach(link => {
                let section = document.querySelector(link.getAttribute('href'));
                if (section && section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
                    link.classList.add('active');
                } else {
                    link.classList.remove('active');
                }
            });
        }
        window.addEventListener('scroll', onScroll);

        function revealCards() {
            const cards = document.querySelectorAll('.card');
            const trigger = window.innerHeight * 0.92;
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top < trigger) {
                    card.classList.add('visible');
                }
            });
        }
        window.addEventListener('scroll', revealCards);
        window.addEventListener('DOMContentLoaded', revealCards);
        
      
        document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const form = e.target;
            const messageDiv = document.getElementById('formMessage');
            messageDiv.textContent = 'Sending...';
           
            const serviceID = 'YOUR_SERVICE_ID';
            const templateID = 'YOUR_TEMPLATE_ID';
            const userID = 'YOUR_USER_ID';
           
            setTimeout(() => {
                messageDiv.textContent = 'Message sent! (Demo only)';
                form.reset();
            }, 1200);
        });
        
