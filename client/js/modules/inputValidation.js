function inputValidation(inputs, buttons) {

    inputs.forEach(input => {
        input.addEventListener('input', () => {
            
            let message = input.nextElementSibling;
            let pattern;

            switch(input.name) {
                case 'name': pattern = /^[a-zA-Z]{3,30}$/; break;
                case 'petname': pattern = /^[a-zA-Z]{3,30}$/; break;
                case 'address': pattern = /^[a-zA-Z0-9 ]{8,50}$/; break;
                case 'email': pattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}/; break;
                case 'phone': pattern = /^[0-9]{2}[0-9]{3}[0-9]{3}$/; break;
                case 'password': pattern = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/; break;
            }
            function addValidClasses(input, message) {
                message.classList.remove('show');
                input.classList.remove('invalid');
                input.classList.add('valid');
                buttons.forEach(button => button.disabled = false);
            }
            function addInvalidClasses(input, message) {
                message.classList.add('show');
                input.classList.add('invalid');
                input.classList.remove('valid');
                buttons.forEach(button => button.disabled = true);
            }
            if (pattern.test(input.value) && input.value !== '') {
                addValidClasses(input, message);
            } else {
                addInvalidClasses(input, message);
            };
        });
    });
};

export default inputValidation;