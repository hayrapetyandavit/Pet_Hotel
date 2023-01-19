function readMore() {
    const moreLinks = document.querySelectorAll('span[class*="more__link"]'); 

    moreLinks.forEach(link => {
        link.addEventListener('click', () => {
            const linkId = link.getAttribute('id'),
                  dots = document.getElementById(linkId + "-dots"),
                  more = document.getElementById(linkId + "-more");

            if (dots.style.display === "none") {
                dots.style.display = "inline";
                link.innerHTML = "Read more"; 
                more.style.display = "none";
            } else {
                dots.style.display = "none";
                link.innerHTML = "Read less"; 
                more.style.display = "inline";
            };
        });
    });
};

export default readMore;