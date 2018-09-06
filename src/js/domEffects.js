function hasClass(element, className) {
    return element.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(element.className);
};

var dom = {
    content: document.querySelectorAll(".online-book .content"),
};

var content = [...dom.content];

console.log(content);

function toggleChapter(chapterIndex) {
    hasClass(content[chapterIndex], 'visible') ?
        content[chapterIndex].classList.toggle('visible') :
        content[chapterIndex].classList.toggle('visible');
}


