//nagivation menu toggle
(function() {

    var navButton = document.querySelector(".button");
    var navUl = document.querySelector(".nav-ul");

    function toggleMobileView() {
        navUl.classList.toggle("hide-ul");
    }

    navButton.onclick = toggleMobileView;
}());

//dom elements and global variables
var prevScrollpos = window.pageYOffset;
var mobile = window.matchMedia("(max-width: 720px)");
var bookmark = document.getElementById('bookmark');
var topArrow = document.querySelector('.up');
var downArrow = document.querySelector('.down');

//action to take when window is scrolled
window.onscroll = function() {
    //show / hide navigation arrows and bookmard
    if (bookmark || topArrow || downArrow) {
        showArrows();
    }
    //show hide navbar for mobile view
    if (mobile.matches) {
        shrinkOnScrollMobile();
        //show hide navbar for desktop view
    } else {
        shrinkOnScrollDesktop();

    }
};

//show/hide navbar on mobile
function shrinkOnScrollMobile() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.logo-onshrink img').style.display = 'block';
        document.querySelector('.nav-wrap').style.display = 'flex';
        document.querySelector('.logo').style.display = 'none';

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById('navigation').style.top = '0';
            } else {
                document.getElementById('navigation').style.top = '-300px';
            }
            prevScrollpos = currentScrollPos;
        }
    } else {
        document.querySelector('.logo-onshrink img').style.display = 'none';
        document.querySelector('.logo').style.display = 'block';
    }
}
//show/hide navbar on desktop
function shrinkOnScrollDesktop() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.logo-onshrink img').style.display = 'block';
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.nav-wrap').style.display = 'flex';

        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                document.getElementById('navigation').style.top = '0';
            } else {
                document.getElementById('navigation').style.top = '-300px';
            }
            prevScrollpos = currentScrollPos;
        }
    } else {
        document.querySelector('.nav-wrap').style.display = 'none';
        document.querySelector('.logo-onshrink img').style.display = 'none';
        document.querySelector('.logo').style.display = 'block';
    }
}
//show/hide navigation arrows and bookmark
function showArrows() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            bookmark.style.opacity = '1';
            topArrow.style.opacity = '1';
            downArrow.style.opacity = '1';
        } else {
            bookmark.style.opacity = '0';
            topArrow.style.opacity = '0';
            downArrow.style.opacity = '0';
        }
    }
}