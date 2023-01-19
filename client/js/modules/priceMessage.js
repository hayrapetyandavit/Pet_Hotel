const checkIn = document.querySelector('#book-check-in'),
        checkOut = document.querySelector('#book-check-out'),
        type = document.querySelector('#select-pet'),
        name = document.querySelector('#name');

let message = '';

const createMessage = () => {
    let days = 0,
        price = 0;

    let valueBoolean = (checkIn.value && checkOut.value && type.value && name.value) ? true : false;
    
    if (valueBoolean) {
        days = (Date.parse(checkOut.value) - Date.parse(checkIn.value))/1000/3600/24;
        switch(type.value) {
            case 'Dog up to 10kg': price = days * 35; break;
            case 'Dog from 10kg to 20kg': price = days * 40; break;
            case 'Dog over 20kg': price = days * 50; break;
            case 'Cat': price = days * 30; break;
        };
        message = `Dear ${name.value}, payment for ${days} days stay is ${price}$. You must make cash payment before check in. Thank you for choosing us.`
    };
    return message;
};

function isEvent(input) {
    input.addEventListener('change', () => {
        createMessage();
        localStorage.setItem('message', message);
    })
}

isEvent(name);
isEvent(checkIn);
isEvent(checkOut);
isEvent(type);

export {message};