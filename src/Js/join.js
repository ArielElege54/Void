let formContainer = document.querySelectorAll('.form-cont')
let switchButton = document.querySelectorAll('.switch-button')

switchButton.forEach(button => {
   button.addEventListener('click', (e) => {
      e.preventDefault()
      formContainer.forEach(form => form.classList.remove('destroy', 'rebuild'))
      switch (button) {
         case switchButton[0]:
            formContainer[1].classList.add('rebuild')
            formContainer[0].classList.add('destroy')
            break
         case switchButton[1]:
            formContainer[0].classList.add('rebuild')
            formContainer[1].classList.add('destroy')
            break
      }
   })
})
let header = document.querySelector("header")

let burger = document.querySelector(".bnav-burger") 
let nav = document.querySelector(".bnav")
let navLinks = Array.from(document.querySelectorAll(".bnav-links"))

let docElem = document.documentElement

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

let removeNav = () => {
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

let footerShow = () => {
	let footerTag = document.querySelector("footer")
	if (footerTag.getBoundingClientRect().top < docElem.clientHeight / 1.5) {
		footerTag.classList.add("footer-show");
 	}
}

window.addEventListener("scroll", () => { 
	headerShortener()
	footerShow()
});
burger.addEventListener("click", toggleNav);
document.querySelector("main").addEventListener("click", removeNav);
document.querySelector("footer").addEventListener("click", removeNav);

window.addEventListener("load", () => {
	document.querySelector(".loader").classList.add("hide")
	navLinks.forEach(link => {
		if (link.getBoundingClientRect().left > docElem.scrollWidth) {
			link.tabIndex = '-1'
		}
	})
})

window.addEventListener("resize", () => {
	navLinks.forEach(link => {
		if (link.getBoundingClientRect().left > docElem.scrollWidth) {
			link.tabIndex = '-1'
		} else {
			link.tabIndex = '0'
		}

	})
})

Array.from(document.querySelectorAll('.contact-form input')).forEach(input => {
	input.addEventListener('change', () => (e) => {
	  input.value = e.target.value
	})
 })