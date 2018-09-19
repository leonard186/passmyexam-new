//check if element has class --> returns true or false
function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

//shortcut function to get ID
var get = function(x) {
    return document.getElementById(x);
};

//dom elements
var dom = {
    content: document.querySelectorAll(".online-book .content"),
    chapterH: document.querySelectorAll(".online-book .chapter-head"),
    bookmark: get("bookmark"),
    contentList: document.querySelector('.content-list'),
    onlineBook: document.querySelectorAll(".online-book"),
    innerListH: document.querySelectorAll(".inner-content-list h3"),
    targetResources: document.querySelectorAll('.page-content  .target'),
    anchorResources: document.querySelectorAll('.content-list .anchor'),
    targetChapter5: document.querySelectorAll('.page-content  .target5'),
    anchorChapter5: document.querySelectorAll('.content-list .anchor5'),
    targetChapter4: document.querySelectorAll('.page-content  .target4'),
    anchorChapter4: document.querySelectorAll('.content-list .anchor4'),
    targetChapter3: document.querySelectorAll('.page-content  .target3'),
    anchorChapter3: document.querySelectorAll('.content-list .anchor3'),
    targetChapter2: document.querySelectorAll('.page-content  .target2'),
    anchorChapter2: document.querySelectorAll('.content-list .anchor2'),
    targetChapter1: document.querySelectorAll('.page-content  .target1'),
    anchorChapter1: document.querySelectorAll('.content-list .anchor1'),
    up: document.querySelector('.up'),
    down: document.querySelector('.down'),
    arrow: document.querySelectorAll('.jump-arrow'),
    paginationUp: get('pagination-top')
};

//transform html collections into arrays
var content = [...dom.content];
var chapterH = [...dom.chapterH];
var targetResources = [...dom.targetResources];
var anchorResources = [...dom.anchorResources];
var targetChapter5 = [...dom.targetChapter5];
var anchorChapter5 = [...dom.anchorChapter5];
var targetChapter4 = [...dom.targetChapter4];
var anchorChapter4 = [...dom.anchorChapter4];
var targetChapter3 = [...dom.targetChapter3];
var anchorChapter3 = [...dom.anchorChapter3];
var targetChapter2 = [...dom.targetChapter2];
var anchorChapter2 = [...dom.anchorChapter2];
var targetChapter1 = [...dom.targetChapter1];
var anchorChapter1 = [...dom.anchorChapter1];
var arrow = [...dom.arrow];


//open / close chapter content
function toggleChapter(chapterIndex) {
    if (hasClass(content[chapterIndex], 'visible')) {
        content[chapterIndex].setAttribute('class', 'content');
    } else {
        content[chapterIndex].setAttribute('class', 'visible');
        chapterH[chapterIndex].scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}


//make element appear with delay
function showElem(elem) {

    setInterval(appear, 2000, elem);

    function appear(elem) {
        if (Array.isArray(elem)) {
            elem.forEach(e => {
                e.style.opacity = '1';
            });
        } else {
            elem.style.opacity = '1';
        }
        clearInterval(appear);
    }
}

////////content list toggle//////////
function showContentList() {
    dom.contentList.style.width = '20rem';
    dom.bookmark.style.display = 'none';
    arrow[0].style.display = 'none';
    arrow[1].style.display = 'none';

    if (window.location.pathname.includes('chapter1')) {
        scrollSpy(targetChapter1, anchorChapter1);
        get('a-1-0').scrollIntoView();
        return;
    }
    if (window.location.pathname.includes('chapter2')) {
        scrollSpy(targetChapter2, anchorChapter2);
        get('a-2-0').scrollIntoView();
        return;
    }


    if (window.location.pathname.includes('chapter3')) {
        scrollSpy(targetChapter3, anchorChapter3);
        get('a-3-0').scrollIntoView();
        return;
    }

    if (window.location.pathname.includes('chapter4')) {
        scrollSpy(targetChapter4, anchorChapter4);
        get('a-4-0').scrollIntoView();
        return;
    }

    if (window.location.pathname.includes('chapter5')) {
        scrollSpy(targetChapter5, anchorChapter5);
        get('a-5-0').scrollIntoView();
        return;
    }

};

function hideContentList() {
    dom.contentList.style.width = '0';
    dom.bookmark.style.display = 'block';
    arrow[0].style.display = 'block';
    arrow[1].style.display = 'block';
};

//connect anchors with target elements
function connectLinks(anchor, target) {
    function scroll(e) {
        if (hasClass(e.parentNode, 'content')) {
            e.parentNode.setAttribute('class', 'visible');
        }
        e.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
    for (var i = 0; i < anchor.length; i++) {
        anchor[i].addEventListener('click', scroll.bind(this, target[i]), false);
    }
};


//animated scroll to the top
function gotToTop() {
    var gotToTop = window.setInterval(function() {
        var pos = window.pageYOffset;
        if (pos > 0) {
            window.scrollTo(0, pos - 120); // how far to scroll on each step
        } else {
            window.clearInterval(gotToTop);
        }
    }, 3); //how fast it should scroll

    return gotToTop;
}

//animated scroll to bottom
function goToBottom() {
    var goToBottom = window.setInterval(function() {
        var bottom = document.body.scrollHeight;
        var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
        var pos = window.pageYOffset + h;

        if (pos < bottom) {
            window.scrollTo(0, pos + 60);
        } else {
            window.clearInterval(goToBottom);
        }

    }, 6);

    return goToBottom;
}


function scrollSpy(targetElement, anchorElement) {
    var targetOffset = [];

    targetElement.forEach(e => targetOffset.push(e.offsetTop));

    function showPosition() {
        var scrollPosition = (document.documentElement.scrollTop + 250) || (document.body.scrollTop + 250);
        for (var i = 0; i < targetOffset.length; i++) {
            if (targetOffset[i] < scrollPosition) {
                document.querySelector('.content-list-sections .active-large').setAttribute('class', ' ');
                anchorElement[i].setAttribute('class', 'active-large');
            }
        }
    }
    showPosition();
    window.addEventListener('scroll', showPosition);
    window.addEventListener('scroll', showPosition);
}


//execute animation for bookmark
var on = false;
setInterval(function() {
    dom.bookmark.setAttribute('data-animation', (on) ? 'tease' : '');
    on = !on;
}, 7000);


//execution sequence
get('top').addEventListener('click', gotToTop);

dom.paginationUp ? dom.paginationUp.addEventListener('click', gotToTop) : null;
connectLinks(anchorResources, targetResources);
connectLinks(anchorChapter5, targetChapter5);
connectLinks(anchorChapter4, targetChapter4);
connectLinks(anchorChapter3, targetChapter3);
connectLinks(anchorChapter2, targetChapter2);
connectLinks(anchorChapter1, targetChapter1);
dom.up.addEventListener('click', gotToTop);
dom.down.addEventListener('click', goToBottom);