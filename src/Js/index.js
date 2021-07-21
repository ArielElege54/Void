let burger = document.querySelector(".bnav-burger") 
let nav = document.querySelector(".bnav")
let navLinks = Array.from(document.querySelectorAll(".bnav-links"))

let docElem = document.documentElement

let contactInput = Array.from(document.querySelectorAll('.contact-form input'))

toggleNav = (event) => {
	event.preventDefault()
	if ( !nav.classList.contains('bnav-open') ) {
		burger.innerText = 'X'
		burger.classList.add("bnav-burger-open");
		nav.classList.add("bnav-open");

		navLinks.forEach(link => {
			link.classList.add('hide-link')
			link.tabIndex = '0'
			setTimeout(
				() => link.classList.add('bnav-links-open'),
				(navLinks.indexOf(link) + 1) * 100
				)
			})
		} else {
			burger.innerText = 'Menu'
			burger.classList.remove("bnav-burger-open");
			nav.classList.remove("bnav-open");
			navLinks.forEach(link => {
				link.tabIndex = '-1'
				link.classList.remove('bnav-links-open')
			})
		}
	}

removeNav = () => {
	if ( nav.classList.contains('bnav-open') ) {
		burger.innerText = 'Menu'
		burger.classList.remove("bnav-burger-open")
		nav.classList.remove("bnav-open")
		navLinks.forEach(link => {
			link.tabIndex = '-1'
			link.classList.remove('bnav-links-open')
		})
	}
}

window.addEventListener("load", () => {
   // document.querySelector(".loader").classList.add("hide")
	// navLinks.forEach(link => {
	// 	if (link.getBoundingClientRect().left > docElem.scrollWidth) {
	// 		link.tabIndex = '-1'
	// 	}
	// })
	// Array.from(document.querySelectorAll('.hero-stuff')).forEach(stuff => {
	// 		stuff.classList.add('hero-animate')
	// })
});

window.addEventListener("scroll", () => {
   let header = document.querySelector("header")
	if (docElem.scrollTop > 50) {
		header.classList.add("shorter")
	} else {
		header.classList.remove("shorter")
	}

	let footerTag = document.querySelector('footer')
	if (footerTag.getBoundingClientRect().top < docElem.clientHeight / 1.5) {
		footerTag.classList.add("footer-show");
 	}

	document.querySelectorAll('.aboutItems').forEach(stuff => {
		if (stuff.getBoundingClientRect().top + (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
			stuff.classList.add("about-slide"); 
		}
	})

	document.querySelectorAll('.blogs').forEach(stuff => {
		if (stuff.getBoundingClientRect().top - (docElem.clientHeight / 10) < docElem.clientHeight - stuff.offsetHeight) {
	 	  stuff.classList.add("blog-slide"); 
		}
 	})
 	document.querySelector('.blog-header').classList.add('blog-slide')
});
burger.addEventListener("click", toggleNav);
document.querySelector("main").addEventListener("click", removeNav);
document.querySelector("footer").addEventListener("click", removeNav);

window.addEventListener("resize", () => {
	navLinks.forEach(link => {
		if (link.getBoundingClientRect().left > docElem.scrollWidth) {
			link.tabIndex = '-1'
		} else {
			link.tabIndex = '0'
		}
	})
})

contactInput.forEach(input => {
	input.addEventListener('change', () => (e) => {
	  input.value = e.target.value
	})
 }) 
