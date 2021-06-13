let burger = document.querySelector(".bnav-burger") 
let nav = document.querySelector(".bnav")
let navList = document.querySelector(".bnav__list")
let navListItems = Array.from(document.querySelectorAll(".bnav__list-items"))
let navLinks = Array.from(document.querySelectorAll(".bnav-links"))
let activeLink = document.querySelector(".active")
let mainTag = document.querySelector("main")
let footerTag = mainTag.nextElementSibling
// for the header color shifting
let header = document.querySelector("header")
let sHeader = document.querySelector(".site-header__text")
let story = document.querySelector("section div h1")
// for the scroll events
let body = document.body
let docElem = document.documentElement
let scrollPosition = Math.round(window.scrollY)
let docHeight = Math.max(
     body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight
);
let contactInput = Array.from(document.querySelectorAll('.contact-form input'))


let removeNav = () => {
	if ( nav.classList.contains('bnav-open') ) {
		burger.innerText = 'Menu'
		burger.classList.remove("bnav-burger-open")
		nav.classList.remove("bnav-open")
	}
}
let toggleNav = (event) => {
	event.preventDefault()
	if ( !nav.classList.contains('bnav-open') ) {
		burger.innerText = 'X'
		burger.classList.add("bnav-burger-open");
		nav.classList.add("bnav-open");
	} else {
		burger.innerText = 'Menu'
		burger.classList.remove("bnav-burger-open");
		nav.classList.remove("bnav-open");
	}
}

let headerColorShifter = () => {
	scrollPosition = body.scrollTop || docElem.scrollTop;
		scrollPosition > 50 ?
			header.classList.add("shorter"):
				header.classList.remove("shorter")
}

burger.addEventListener("click", toggleNav);
mainTag.addEventListener("click", removeNav);
footerTag.addEventListener("click", removeNav);
window.addEventListener("scroll", headerColorShifter);

contactInput.forEach(input => {
	input.addEventListener('focus', () => {
	  let focusBorder = setTimeout(() => input.classList.add('focus'), 700)
	  input.addEventListener('blur', () => {
		 input.classList.remove('focus')
		 clearTimeout(focusBorder)
	  })
	})
	input.addEventListener('change', () => (e) => {
	  input.value = e.target.value
	})
 })