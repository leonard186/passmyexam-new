(function () {

    var navButton = document.querySelector(".button");
    var navUl = document.querySelector(".nav-ul");

    function toggleMobileView() {
        navUl.classList.toggle("hide-ul");
    }

    navButton.onclick = toggleMobileView;
}());

var prevScrollpos = window.pageYOffset;
var mobile = window.matchMedia("(max-width: 720px)");
var bookmark = document.getElementById('bookmark');


window.onscroll = function() {
    if(bookmark) {
        showBookmark();
    }

    if(mobile.matches) {
        shrinkOnScrollMobile();
        return
    } else {
        shrinkOnScrollDesktop();
        return
    }
};


function shrinkOnScrollMobile() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.logo-onshrink img').style.display = 'block';
        document.querySelector('.nav-wrap').style.display = 'flex';
        document.querySelector('.logo').style.display = 'none';

        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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

function shrinkOnScrollDesktop() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('.logo-onshrink img').style.display = 'block';
        document.querySelector('.logo').style.display = 'none';
        document.querySelector('.nav-wrap').style.display = 'flex';

        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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

function showBookmark() {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
    document.getElementById('bookmark').style.left = '0';
    } else {
        document.getElementById('bookmark').style.left = '-5rem';
    }
}
