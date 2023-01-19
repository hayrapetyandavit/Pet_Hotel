function camera() {
    const monitor = document.querySelector('.image-block'),
          button = document.querySelector('.camera__button'),
          signInLink = document.querySelector('.sign-in-link'),
          iframe = document.querySelector('.stream');

    button.addEventListener('click', () => {
        iframe.style.height = `${monitor.offsetHeight - 35}px`;
        if (signInLink.style.display === 'block') {
            button.style.background = 'rgb(180, 10, 10';
            button.innerText = 'PLEASE SIGN IN FOR THIS PROPERTY';
            setTimeout(() => {
                button.style.background = '#12343b';
                button.innerText = 'I WANT TO SEE MY PET!';
            }, 2000);
        } else {
            monitor.classList.toggle('hidden');
            iframe.classList.toggle('hidden');
            button.innerText === 'I WANT TO SEE MY PET!' ? button.innerText='END THE STREAM!' : button.innerText='I WANT TO SEE MY PET!';
        }
    });
};

export default camera;