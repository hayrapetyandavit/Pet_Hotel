function dateValidation(checkInInput, checkOutInput, bookButton, message) {

    const isValid = () => {
        let amountBookDays = (Date.parse(checkOutInput.value) - Date.parse(checkInInput.value))/1000/3600;
        let currentDay = (Date.parse(checkInInput.value) - Date.parse(new Date()))/1000/3600;
    
        if (amountBookDays < 0 || amountBookDays > 4320 || currentDay < 0) {
            message.forEach(item => item.classList.add('show'));
            checkInInput.classList.add('invalid');
            checkInInput.classList.remove('valid');
            checkOutInput.classList.add('invalid');
            checkOutInput.classList.remove('valid');
            bookButton.disabled = true;
        } else {
            message.forEach(item => item.classList.remove('show'));
            checkInInput.classList.remove('invalid');
            checkInInput.classList.add('valid');
            checkOutInput.classList.remove('invalid');
            checkOutInput.classList.add('valid');
            bookButton.disabled = false;
        };
    };

    if (checkInInput.value && checkOutInput.value) {
        isValid();
    };

    checkOutInput.addEventListener('change', (e) => {
        if (e.target && checkInInput.value && checkOutInput.value) { isValid(); }
    });

    checkInInput.addEventListener('change', (e) => {
        if (e.target && checkInInput.value && checkOutInput.value) { isValid(); }
    });
};

export default dateValidation;