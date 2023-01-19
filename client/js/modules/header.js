function header() {
    const header = document.querySelector('.header'),
          headerBtn = document.querySelector('.header__button'),
          headerBtnTablet = document.querySelector('.button__book'),
          links = document.querySelectorAll('.menu__link');

    const headerAnimation = () => {
        if (document.documentElement.scrollTop > 400) {
            headerBtn.style.display = 'flex';
            header.style.background = '#f8f9fa';
            links.forEach(link => link.style.color = '#000');
        } else {
            headerBtn.style.display = 'none';
            header.style.background = 'transparent';
            links.forEach(link => link.style.color = '#f8f9fa');
        };
    };

    const headerAnimationTablet = () => {
        if (document.documentElement.scrollTop > 50 ) {
            headerBtnTablet.style.display = 'flex';
            header.style.background = '#f8f9fa';
        } else {
            headerBtnTablet.style.display = 'none';
            header.style.background = 'transparent';
        };
    };

    if (window.innerWidth < 767.98) {
        headerAnimationTablet();
    } else {
        headerAnimation();
    };
};

export default header;