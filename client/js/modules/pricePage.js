function pricePage() {
    document.querySelector('.content__text').innerText = localStorage.getItem('message');
    document.querySelector('.content-close').addEventListener('click', () => {
        window.location.href = '/';
    });
};

pricePage();