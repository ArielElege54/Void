 // for the animations
let aboutSlideStuff = document.querySelectorAll('.aboutItems')
let blogSlideStuff = document.querySelectorAll('.blogs')
let blogHeader = document.querySelector('.blog-header')
let heroAnimatedStuff = Array.from(document.querySelectorAll('.hero-stuff'))

let heroAnimation = (event) => {
     heroAnimatedStuff.forEach(stuff => {
          setTimeout(
               () => stuff.classList.add('hero-animate'), (heroAnimatedStuff.indexOf(stuff) + 1) * 1000
          )
     })
}

let aboutAnimation = (event) => {
     aboutSlideStuff.forEach(stuff => {
          if (stuff.getBoundingClientRect().top + (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
               stuff.classList.add("about-slide"); 
          }
     })
}

let blogAnimation = (event) => {
     blogSlideStuff.forEach(stuff => {
          if (stuff.getBoundingClientRect().top - (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
               stuff.classList.add("blog-slide"); 
          }
     })
     blogHeader.classList.add('blog-slide')
}

window.addEventListener('load', () => {
     aboutSlideStuff.forEach(stuff => stuff.classList.add('hide'))
     blogSlideStuff.forEach(stuff => stuff.classList.add('hide'))
     blogHeader.classList.add('hide')
})

window.addEventListener("load", heroAnimation);
window.addEventListener("scroll", aboutAnimation);
window.addEventListener("scroll", blogAnimation);
