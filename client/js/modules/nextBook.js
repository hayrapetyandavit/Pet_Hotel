function nextBook() {
    if (sessionStorage.getItem('checkIn')) {
        const checkIn = document.querySelector('#book-check-in'),
              checkOut = document.querySelector('#book-check-out'),
              selectType = document.querySelector('#select-pet');

        checkIn.value = sessionStorage.getItem('checkIn');
        checkOut.value = sessionStorage.getItem('checkOut');
        selectType.value = sessionStorage.getItem('selectType');
    };
};

nextBook();