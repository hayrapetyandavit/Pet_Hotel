function selectValidation(selectType, selectFood, bookButton, message) {

    const isValid = (select) => {
        if (select.selectedIndex === 0) {
            message.forEach(item => item.classList.add('show'));
            select.classList.add('invalid');
            select.classList.remove('valid');
            bookButton.disabled = true;
        } else {
            message.forEach(item => item.classList.remove('show'))
            select.classList.remove('invalid');
            select.classList.add('valid');
            bookButton.disabled = false;
        };
    };

    if (selectType.value) { isValid(selectType) };

    selectType.addEventListener('change', () => {
        isValid(selectType);
    });
    selectFood.addEventListener('change', () => {
        isValid(selectFood);
    });
};

export default selectValidation;