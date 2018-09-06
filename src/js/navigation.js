(function () {

    var navButton = document.querySelector(".button");
    var navUl = document.querySelector(".nav-ul");

    function toggleMobileView() {
        navUl.classList.toggle("hide-ul");
    }

    navButton.onclick = toggleMobileView;
}());