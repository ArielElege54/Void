let header = document.querySelector("header")

let burger = document.querySelector(".bnav-burger") 
let nav = document.querySelector(".bnav")
let navLinks = Array.from(document.querySelectorAll(".bnav-links"))

let mainTag = document.querySelector("main")
let footerTag = mainTag.nextElementSibling

let docElem = document.documentElement

let contactInput = Array.from(document.querySelectorAll('.contact-form input'))

let headerShortener = () => {
	if (docElem.scrollTop > 50) {
		header.classList.add("shorter")
	} else {
		header.classList.remove("shorter")
	} 
}

let toggleNav = (event) => {
	event.preventDefault()
	if ( !nav.classList.contains('bnav-open') ) {
		burger.innerText = 'X'
		burger.classList.add("bnav-burger-open");
		nav.classList.add("bnav-open");

		navLinks.forEach(link => {
			link.classList.add('hide-link')
			setTimeout(
				() => link.classList.add('bnav-links-open'),
				(navLinks.indexOf(link) + 1) * 300
			)
		})
	} else {
		burger.innerText = 'Menu'
		burger.classList.remove("bnav-burger-open");
		nav.classList.remove("bnav-open");
		navLinks.forEach(link => link.classList.remove('bnav-links-open'))
	}
}

let removeNav = () => {
	if ( nav.classList.contains('bnav-open') ) {
		burger.innerText = 'Menu'
		burger.classList.remove("bnav-burger-open")
		nav.classList.remove("bnav-open")
		navLinks.forEach(link => link.classList.remove('bnav-links-open'))
	}
}

let footerShow = () => {
	if (footerTag.getBoundingClientRect().top < docElem.clientHeight / 1.5) {
		footerTag.classList.add("footer-show");
 	}
}

window.addEventListener("scroll", headerShortener);
burger.addEventListener("click", toggleNav);
mainTag.addEventListener("click", removeNav);
footerTag.addEventListener("click", removeNav);
window.addEventListener("load", () => footerTag.classList.add('hide'))
window.addEventListener("scroll", footerShow);

window.addEventListener("resize", )

contactInput.forEach(input => {
	let inputIndex = contactInput.indexOf(input)
	input.addEventListener('change', () => (e) => {
	  input.value = e.target.value
	})
 })