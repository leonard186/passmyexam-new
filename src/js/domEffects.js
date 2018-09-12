function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

var get = function(x){
    return document.getElementById(x);
};

var dom = {
    content: document.querySelectorAll(".online-book .content"),
    chapterH: document.querySelectorAll(".online-book .chapter-head"),
    bookmark: document.getElementById("bookmark"),
    contentList: document.querySelector('.content-list'),
    target: document.querySelectorAll('.page-content  .target'),
    anchor: document.querySelectorAll('.content-list .anchor'),
    onlineBook: document.querySelectorAll(".online-book"),
    innerListH: document.querySelectorAll(".inner-content-list h3")
};

var content = [...dom.content];
var chapterH = [... dom.chapterH];
var target= [... dom.target];
var anchor = [... dom.anchor];



function toggleChapter(chapterIndex) {
    if(hasClass(content[chapterIndex], 'visible')){
        content[chapterIndex].setAttribute('class', 'content');
    } else {
        content[chapterIndex].setAttribute('class', 'visible');
        chapterH[chapterIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}




function hideAll() {
    content.forEach(e => {
        e.setAttribute('class', ' ');
        e.setAttribute('class', 'content');
    });
}




//content list toggle
function showContentList() {
    dom.contentList.style.width = '20rem';
    dom.bookmark.style.display = 'none';
};

function hideContentList() {
    dom.contentList.style.width = '0';
    dom.bookmark.style.display = 'block';
};

//connect anchors with target elements
function connectLinks() {
    function scroll(e) {
        if(hasClass(e.parentNode, 'content')){
            e.parentNode.setAttribute('class', 'visible');
        }
        e.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    for(var i=0; i<anchor.length; i++) {
        anchor[i].addEventListener('click', scroll.bind(this, target[i]), false);
    }
};


function scrollSpy() {
    var targetOffset = [];

    target.forEach(e => targetOffset.push(e.offsetTop));

    window.onscroll = function() {
        var scrollPosition = (document.documentElement.scrollTop + 250) || (document.body.scrollTop + 250);
        for(var i=0; i<targetOffset.length; i++) {
            if(targetOffset[i] < scrollPosition) {
                document.querySelector('.content-list .active').setAttribute('class', ' ');
                anchor[i].setAttribute('class', 'active');
            }
        }

    }
}

var bookmark = get('bookmark');
var on = false;

setInterval(function () {
    bookmark.setAttribute('data-animation', (on) ? 'semirotate' : '');
    on = !on;
}, 7000);

connectLinks();


