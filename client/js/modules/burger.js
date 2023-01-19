function burger() {
    const burgerOpen = document.querySelector('.icon-menu'),
          burgerClose = document.querySelector('.close-icon-menu'),
          burgerMenu = document.querySelector('.menu__body'),
          menuLinks = document.querySelectorAll('.menu__link');

    const isBurgerOpen = () => {
        burgerMenu.style.left = "0%";
        burgerOpen.style.display = 'none';
        burgerClose.style.display = 'block';

    };

    const isBurgerClose = () => {
        burgerMenu.style.left = "-100%";
        burgerClose.style.display = 'none';
        burgerOpen.style.display = 'flex';
    };

    burgerOpen.addEventListener('click', () => {
        isBurgerOpen();
    });

    burgerClose.addEventListener('click', () => {
        isBurgerClose();
    });

    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth < 767.98) {
                isBurgerClose();
            };
        });
    });
};

export default burger;