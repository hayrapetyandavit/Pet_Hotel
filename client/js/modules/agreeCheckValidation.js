function agreeCheckValidation(agreeCheck, bookButton) {
    
    if (!agreeCheck.checked) { bookButton.disabled = true; }
    
    agreeCheck.addEventListener('click', () => {
        if (agreeCheck.checked) {
            bookButton.disabled = false;
        } else {
            bookButton.disabled = true
        }
    });
};

export default agreeCheckValidation;