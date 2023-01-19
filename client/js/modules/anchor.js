function anchor() {
    const anchors = document.querySelectorAll('a[href*="#"]'),
          upAnchor = document.querySelector('.move-up');    

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            
            const section = anchor.getAttribute('href');

            document.querySelector(section).scrollIntoView({
                behavior: "smooth",
                block: section === '#book-now' ? 'center' : 'start'
            });
        });
    });

    const upAnchorHide = () => {
        if (document.documentElement.scrollTop > 1000) {
            upAnchor.classList.remove('hidden');
        } else {
            upAnchor.classList.add('hidden');
        };
    };

    upAnchorHide();
};

export default anchor;