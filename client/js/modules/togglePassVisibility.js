function togglePassVisibility() {
    const eyes = document.querySelectorAll(".fa-eye");

    eyes.forEach(eye => {
        eye.addEventListener("click", (e) => {
            if (e.target) {
                const passInput = document.querySelector(`#${eye.getAttribute("id").slice(4)}`);
                const inputType = passInput.getAttribute("type") === "password" ? "text" : "password";
                eye.classList.toggle("fa-eye-slash");
                passInput.setAttribute("type", inputType);
            };
        });
    });
};
togglePassVisibility();

export default togglePassVisibility;