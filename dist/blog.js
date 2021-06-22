let blogSlideStuff = document.querySelectorAll('.blogs')
let blogHeader = document.querySelector('.blog-header')

let blogAnimation = (event) => {
   blogSlideStuff.forEach(stuff => {
        if (stuff.getBoundingClientRect().top - (docElem.clientHeight / 5) < docElem.clientHeight - stuff.offsetHeight) {
             stuff.classList.add("blog-slide"); 
        }
   })
}

window.addEventListener('load', () => {
   blogSlideStuff.forEach(stuff => {
      stuff.classList.add('hide')
      blogAnimation()
   })
})
window.addEventListener("scroll", blogAnimation);
