function nextButton() {
    const nextButton = document.querySelector('#home-book__form');

    const checkIn = document.querySelector('#home-check-in'),
        checkOut = document.querySelector('#home-check-out'),
        selectType = document.querySelector('#home-dropdown');

    nextButton.addEventListener('submit', (e) => {
        e.preventDefault();
        sessionStorage.setItem("checkIn", checkIn.value);
        sessionStorage.setItem("checkOut", checkOut.value);
        sessionStorage.setItem("selectType", selectType.value);

        window.location.href = "/forms/book.html";
    });
};

export default nextButton;