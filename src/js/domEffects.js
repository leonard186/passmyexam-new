function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

var get = function(x){
    return document.getElementById(x);
};

var dom = {
    content: document.querySelectorAll(".online-book .content"),
    chapterH: document.querySelectorAll(".online-book .chapter-head"),
    bookmark: document.getElementById('bookmark'),
    contentList: document.querySelector('.content-list'),
    ch1H: document.getElementById('chapter1-head'),
    ch1C: document.getElementById('chapter1-content'),
    ch1A: document.getElementById('chapter1-anchor'),
    ch2H: document.getElementById('chapter2-head'),
    ch2C: document.getElementById('chapter2-content'),
    ch3H: document.getElementById('chapter3-head'),
    ch3C: document.getElementById('chapter3-content'),
    ch4H: document.getElementById('chapter4-head'),
    ch4C: document.getElementById('chapter4-content'),
    ch5H: document.getElementById('chapter5-head'),
    ch5C: document.getElementById('chapter5-content'),
    a00: get('a-0-0'),
    a01: get('a-0-1'),
    a02: get('a-0-2'),
    a03: get('a-0-3'),
    a10: get('a-1-0'),
    a11: get('a-1-1'),
    a12: get('a-1-2'),
    a13: get('a-1-3'),
    a20: get('a-2-0'),
    a21: get('a-2-1'),
    a30: get('a-3-0'),
    a31: get('a-3-1'),
    a32: get('a-3-2'),
    a33: get('a-3-3'),
    a34: get('a-3-4'),
    a35: get('a-3-5'),
    a36: get('a-3-6'),
    a40: get('a-4-0'),
    a41: get('a-4-1'),
    a42: get('a-4-2'),
    a43: get('a-4-3'),
    a44: get('a-4-4'),
    a45: get('a-4-5'),
    a46: get('a-4-6'),
    a47: get('a-4-7'),
    a50: get('a-4-0'),
    a51: get('a-4-1'),
    a52: get('a-4-2'),
    a53: get('a-4-3'),
    a54: get('a-4-4'),
    a55: get('a-4-5'),
    a56: get('a-4-6'),
    a57: get('a-4-7'),
    a58: get('a-4-4'),
    a59: get('a-4-5'),
    a510: get('a-4-6'),
    a511: get('a-4-7'),
    a510: get('a-4-3'),



};

var content = [...dom.content];
var chapterH = [... dom.chapterH];


function toggleChapter(chapterIndex) {
    if(hasClass(content[chapterIndex], 'visible')){
        content[chapterIndex].classList.toggle('visible');
    } else {
        content[chapterIndex].classList.toggle('visible');
        chapterH[chapterIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
}

//content list toggle
function showContentList() {
    dom.contentList.style.width = '20rem';
    dom.bookmark.style.display = 'none';
}

function hideContentList() {
    dom.contentList.style.width = '0';
    dom.bookmark.style.display = 'block';
}

var domElem = {
    get: function(x){
        return document.getElementById(x);
    },


    test: document.getElementById('test'),
    btn: document.getElementById('btn')

};

function toggleVisibility() {

};

function getThere(elem) {
    if(!hasClass(elem.parentNode, 'visible')) {
        elem.parentNode.classList.toggle('visible');
        elem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
};


dom.ch1A.addEventListener('click', function() {
    getThere(document.getElementById('1-3'));
});

