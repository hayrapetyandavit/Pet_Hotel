import anchor from "./modules/anchor.js";
import burger from "./modules/burger.js";
import camera from "./modules/camera.js";
import gallery from "./modules/gallery.js";
import header from "./modules/header.js";
import nextButton from "./modules/nextButton.js";
import readMore from "./modules/readMore.js";
import userPage from "./modules/userPage.js";
import upload from "./modules/upload.js";


window.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.move-up').classList.add('hidden');

    window.onscroll = () => { 
        anchor();
        header();
    };
    
    burger();
    camera();
    gallery();
    nextButton();
    readMore();
    userPage();
    upload();
});