    function ReadMore() {
        const hiddenCards = document.querySelector('.card-container.hidden');
        const button = document.getElementById('readMoreBtn');

        if (hiddenCards.classList.contains('show')) {
            hiddenCards.classList.remove('show');
            setTimeout(() => {
                hiddenCards.style.display = 'none';
            }, 500); 
            button.textContent = 'Read More';
            button.classList.remove('active');
        } else {
            hiddenCards.style.display = 'grid';
            setTimeout(() => {
                hiddenCards.classList.add('show');
            }, 10);
            button.textContent = 'Read Less';
            button.classList.add('active');
        }
    }
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.navbar ul');
        
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            hamburger.children[0].classList.toggle('rotate-45');
            hamburger.children[1].classList.toggle('opacity-0');
            hamburger.children[2].classList.toggle('rotate--45');
        });
        
        document.querySelectorAll('.navbar ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
        
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.menu-navigasi');
            if (window.scrollY > 50) {

                navbar.style.backgroundColor = 'rgba(31, 33, 82, 0.98)';
                navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
                navbar.style.boxShadow = 'none';
            }
        });

        