function userPage() {
    const signIn = document.querySelector('.sign-in-link'),
          signOut = document.querySelector('.sign-out-link');

    function stringToObject(cookieStr) {
        const obj = {};
        const arr = cookieStr.split('=');
        obj[`${arr[0]}`] = arr[1];

        return obj;
    };

    let cookieObj = stringToObject(document.cookie);

    if (cookieObj['signin']) {
        signOut.style.display = 'block';
        signIn.style.display = 'none';
    } else {
        signOut.style.display = 'none';
        signIn.style.display = 'block';
    };

    signOut.addEventListener('click', () => {
        document.cookie.split(";").forEach(function(c) { 
            document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
        });
    });
};

export default userPage;