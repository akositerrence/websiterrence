const home = 1;
const portfolio = 2;
const involvement = 3;
const education = 4;
const resources = 5;
const contact = 6;
let current;

window.onload = function () {
    setTimeout(function () {
        let slideIn = document.getElementsByClassName("home-screen-container")[0];
        slideIn.style.transition = "all 2s ease";
        slideIn.style.right = "0vw";
        slideIn.style.borderRadius = "0vw";
        setTimeout(function () {
            slideIn.style.transition = "all 1s ease";
        }, 1000);
    }, 500);
}

document.addEventListener('DOMContentLoaded', function () {
    function setCurrentPage() {
        const path = window.location.pathname;
        const page = path.split("/").pop();

        switch (page) {
            case 'index.html':
                current = home;
                break;
            case 'portfolio.html':
                current = portfolio;
                break;
            case 'involvement.html':
                current = involvement;
                break;
            case 'education.html':
                current = education;
                break;
            case 'resources.html':
                current = resources;
                break;
            case 'contact.html':
                current = contact;
                break;
            default:
                current = home;
        }
    }

    setCurrentPage();

    function openNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        let navBack = document.getElementsByClassName("nav-page")[0];
        if (page) {
            page.style.right = "40vw";
            page.style.borderRadius = "15vw";
            page.style.transform = "scale(0.95)";
            fadeOutBar.style.opacity = 0;
            navBack.style.opacity = 1;
        } else {
            console.error("element not found");
        }
    }

    function sendMessageToMain(message) {
        window.parent.postMessage(message, "*");
    }

    let menuIcon = document.querySelector(".menu-icon-b");
    if (menuIcon) {
        menuIcon.addEventListener("click", function (event) {
            sendMessageToMain("openNavPage");
        });
    } else {
        console.error("menu icon not found");
    }

    function closeNavPage() {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let fadeOutBar = document.querySelector(".home-top");
        let navBack = document.getElementsByClassName("nav-page")[0];
        if (page) {
            page.style.right = "0vw";
            page.style.borderRadius = "0vw";
            page.style.transform = "scale(1)";
            fadeOutBar.style.opacity = 1;
            navBack.style.opacity = 0;
        } else {
            console.error("element not found");
        }
    }

    function delayedExit(destination) {
        let page = document.getElementsByClassName("home-screen-container")[0];
        let navBack = document.getElementsByClassName("nav-page")[0];
        page.style.right = "100vw";
        page.style.borderRadius = "15vw";
        navBack.style.opacity = 0;

        setTimeout(function () {
            window.location.href = destination;
        }, 1000);
    }
    window.addEventListener("message", function (event) {
        if (event.data === "openNavPage") {
            openNavPage();
        } else if (event.data === "closeNavPage") {
            closeNavPage();
        }

        let navigationFrame = document.querySelector("iframe.nav-page");
        let navAccess = navigationFrame.contentDocument || navigationFrame.contentWindow.document;
        let returnButton = null;

        homeButton = navAccess.querySelector("#home-button");
        portfolioButton = navAccess.querySelector("#home-portfolio");
        involvementButton = navAccess.querySelector("#home-involvement");
        educationButton = navAccess.querySelector("#home-education");
        resourcesButton = navAccess.querySelector("#home-resources");
        contactButton = navAccess.querySelector("#home-contact");

        switch (current) {
            case home:
                returnButton = navAccess.querySelector("#home-button");
                current = home;
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html"); });
                involvementButton.addEventListener("click", function event() { delayedExit("/pages/involvement.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                resourcesButton.addEventListener("click", function event() { delayedExit("/pages/resources.html") });
                contactButton.addEventListener("click", function event() { delayedExit("/pages/contact.html") });
                break;
            case portfolio:
                returnButton = navAccess.querySelector("#home-portfolio");
                current = portfolio;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                involvementButton.addEventListener("click", function event() { delayedExit("/pages/involvement.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                resourcesButton.addEventListener("click", function event() { delayedExit("/pages/resources.html") });
                contactButton.addEventListener("click", function event() { delayedExit("/pages/contact.html") });
                break;
            case involvement:
                returnButton = navAccess.querySelector("#home-involvement");
                current = involvement;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                resourcesButton.addEventListener("click", function event() { delayedExit("/pages/resources.html") });
                contactButton.addEventListener("click", function event() { delayedExit("/pages/contact.html") });
                break;
            case education:
                returnButton = navAccess.querySelector("#home-education");
                current = education;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                involvementButton.addEventListener("click", function event() { delayedExit("/pages/involvement.html") });
                resourcesButton.addEventListener("click", function event() { delayedExit("/pages/resources.html") });
                contactButton.addEventListener("click", function event() { delayedExit("/pages/contact.html") });
                break;
            case resources:
                returnButton = navAccess.querySelector("#home-resources");
                current = resources;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                involvementButton.addEventListener("click", function event() { delayedExit("/pages/involvement.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                contactButton.addEventListener("click", function event() { delayedExit("/pages/contact.html") });
                break;
            case contact:
                returnButton = navAccess.querySelector("#home-contact");
                current = contact;
                homeButton.addEventListener("click", function event() { delayedExit("/index.html") });
                portfolioButton.addEventListener("click", function event() { delayedExit("/pages/portfolio.html") });
                involvementButton.addEventListener("click", function event() { delayedExit("/pages/involvement.html") });
                educationButton.addEventListener("click", function event() { delayedExit("/pages/education.html") });
                resourcesButton.addEventListener("click", function event() { delayedExit("/pages/resources.html") });
                break;
            default:
                returnButton = null;
        }

        if (returnButton) {
            returnButton.addEventListener("click", function (event) {
                sendMessageToMain("closeNavPage");
            });
        } else {
            console.error("button not found");
        }
    });
});