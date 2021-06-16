 // for the animations
let aboutSlideStuff = document.querySelectorAll('.aboutItems')
let blogSlideStuff = document.querySelectorAll('.blogs')
// event listeners
aboutAnimation = (event) => {
     aboutSlideStuff.forEach(stuff => {
          if (stuff.getBoundingClientRect().top + (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
               stuff.classList.add("about-slide"); 
          }
     })
}
blogAnimation = (event) => {
     blogSlideStuff.forEach(stuff => {
          if (stuff.getBoundingClientRect().top - (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
               stuff.classList.add("blog-slide"); 
          }
     })
}

window.addEventListener('load', () => {
     aboutSlideStuff.forEach(stuff => stuff.classList.add('hide'))
     blogSlideStuff.forEach(stuff => stuff.classList.add('hide'))
})
window.addEventListener("scroll", aboutAnimation);
window.addEventListener("scroll", blogAnimation);
