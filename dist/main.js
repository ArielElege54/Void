let burger = document.querySelector(".bnav-burger") 
let nav = document.querySelector(".bnav")
let navList = document.querySelector(".bnav__list")
let navListItems = Array.from(document.querySelectorAll(".bnav__list-items"))
let navLinks = Array.from(document.querySelectorAll(".bnav-links"))
let activeLink = document.querySelector(".active")

// for the header color shifting
let header = document.querySelector("header")
let sHeader = document.querySelector(".site-header__text")
let story = document.querySelector("section div h1");

// for the scroll events
let body = document.body
let docElem = document.documentElement
let scrollPosition = Math.round(window.scrollY)
let docHeight = Math.max(
     body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight
);


let toggleNav = (event) => {
	event.preventDefault()
	nav.classList.contains('bnav-open') ?
		burger.innerHTML = 'Menu':
			burger.innerText = 'X'
	burger.classList.toggle("bnav-burger-open");
	nav.classList.toggle("bnav-open");
}

let headerColorShifter = () => {
	scrollPosition = body.scrollTop || docElem.scrollTop;
		scrollPosition > 50 ?
			header.classList.add("shorter"):
				header.classList.remove("shorter")
}

burger.addEventListener("click", toggleNav);
window.addEventListener("scroll", headerColorShifter);