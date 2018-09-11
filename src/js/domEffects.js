function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

var get = function(x){
    return document.getElementById(x);
};

var dom = {
    content: document.querySelectorAll(".online-book .content"),
    chapterH: document.querySelectorAll(".online-book .chapter-head"),
    infoH: document.querySelectorAll('.information-section h2'),
    bookmark: document.getElementById("bookmark"),
    contentList: document.querySelector('.content-list'),
    target: document.querySelectorAll('.page-content  .target'),
    anchor: document.querySelectorAll('.content-list .anchor'),
    onlineBook: document.querySelectorAll(".online-book"),
    innerListH: document.querySelectorAll(".inner-content-list h3")
};

var content = [...dom.content];
var chapterH = [... dom.chapterH];
var infoH = [... dom.infoH];
var headers = infoH.concat(chapterH);
var target= [... dom.target];
var anchor = [... dom.anchor];
var innerListH = [... dom.innerListH];
console.log(headers);



function toggleChapter(chapterIndex) {

    if(hasClass(content[chapterIndex], 'visible')){
        content[chapterIndex].setAttribute('class', 'content');
scrollSpy();
    } else {
        content[chapterIndex].setAttribute('class', 'visible');
        chapterH[chapterIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });

    }


}
scrollSpy();
    //content.forEach(e => e.setAttribute('class', 'visible'));




function hideAll() {
    content.forEach(e => {
        e.setAttribute('class', ' ');
        e.setAttribute('class', 'content');
    });
}




//content list toggle
function showContentList() {
    //window.scrollTo(0, document.querySelector(".active").offsetTop);
    dom.contentList.style.width = '20rem';
    dom.bookmark.style.display = 'none';
    scrollSpy();

};

function hideContentList() {
    dom.contentList.style.width = '0';
    dom.bookmark.style.display = 'block';
};

function getThere(elem) {
    if(!hasClass(elem.parentNode, 'visible')) {
        elem.parentNode.classList.toggle('visible');
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};

//connect anchors with target elements
function connectLinks() {
    function scroll(e) {
        if(hasClass(e.parentNode, 'content')){
            e.parentNode.setAttribute('class', 'visible');
        }
        scrollSpy();
        e.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    for(var i=0; i<anchor.length; i++) {
        anchor[i].addEventListener('click', scroll.bind(this, target[i]), false);
    }
};


function scrollSpy() {
    var targetOffset = [];
    var targetOffset2 = [];


    target.forEach(e => targetOffset.push(e.offsetTop));
    headers.forEach(e => targetOffset2.push(e.offsetTop));
    console.log(targetOffset);

    /*
        window.onscroll = function() {
            var scrollPosition = (document.documentElement.scrollTop + 250) || (document.body.scrollTop + 250);
            for(var i=0; i<targetOffset2.length; i++) {

                if(targetOffset2[i] < scrollPosition) {

                    document.querySelector('.content-list .active').setAttribute('class', ' ');
                    innerListH[i].setAttribute('class', 'active');

                }
            }
        };
    */

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

connectLinks();


