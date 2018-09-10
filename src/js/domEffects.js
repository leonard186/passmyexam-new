function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

var dom = {
    content: document.querySelectorAll(".online-book .content"),
    chapterH: document.querySelectorAll(".online-book .chapter-head"),
};

var content = [...dom.content];
var chapterH = [... dom.chapterH];

console.log(content);

function toggleChapter(chapterIndex) {
    if(hasClass(content[chapterIndex], 'visible')){
        content[chapterIndex].classList.toggle('visible');
    } else {
        content[chapterIndex].classList.toggle('visible');
        chapterH[chapterIndex].scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
}

var domElem = {
    get: function(x){
        return document.getElementById(x);
    },

    ch1H: document.getElementById('chapter1-head'),
    ch1C: document.getElementById('chapter1-content'),
    ch2H: document.getElementById('chapter2-head'),
    ch2C: document.getElementById('chapter2-content'),
    ch3H: document.getElementById('chapter3-head'),
    ch3C: document.getElementById('chapter3-content'),
    ch4H: document.getElementById('chapter4-head'),
    ch4C: document.getElementById('chapter4-content'),
    ch5H: document.getElementById('chapter5-head'),
    ch5C: document.getElementById('chapter5-content'),
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

/*
domElem.btn.addEventListener('click', function() {
    getThere(domElem.test);
});
*/
