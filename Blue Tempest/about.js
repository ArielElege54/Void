 // for the animations
let aImg = document.getElementsByClassName("author-img")[0],
     main = document.getElementsByClassName('about-headers')[0];

aImg.addEventListener("click", scrollToMain);

function scrollToMain () {
     main.scrollIntoView();
     docElem.scrollTop = docElem.scrollTop - header.clientHeight;
}