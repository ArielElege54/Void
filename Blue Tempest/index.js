 // for the animations
 let aImg = document.getElementsByClassName("author-img")[0],
     aName = document.getElementsByClassName("author-name")[0],
     aText = document.getElementsByClassName("author-text")[0],
     stories = document.getElementsByClassName("story-stories")[0];

// event listeners
window.addEventListener("scroll", aboutAnimation);
window.addEventListener("scroll", storiesAnimation);


function aboutAnimation (event) {
     if (aImg.getBoundingClientRect().top < docElem.clientHeight - aImg.offsetHeight) {
          aImg.classList.add("imgAni"); 
          aName.classList.add("nameAni");
          aText.classList.add("textAni");
     }
}

function storiesAnimation (event) {
     if (stories.getBoundingClientRect().top < docElem.clientHeight / 2) {
          stories.id = "storiesAni";
     }
}