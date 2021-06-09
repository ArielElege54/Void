let burger = document.getElementsByClassName("bnav-burger")[0],
     nav = document.getElementsByClassName("bnav")[0],
     navList = document.getElementsByClassName("bnav__list")[0],
     navListItems = document.querySelectorAll(".bnav__list-items"),
     navLinks = document.querySelectorAll(".bnav-links"),
     activeLink = document.getElementsByClassName("active")[0],
     clicked = false;

// for the header color shifting
let header = document.getElementsByTagName("header")[0],
     sHeader = document.getElementsByClassName("site-header__text")[0],
     story = document.querySelector("section div h1");

// for the scroll events
let body = document.body,
     docElem = document.documentElement,
     scrollPosition = Math.round(window.scrollY),
     docHeight = Math.max(
     body.scrollHeight, body.offsetHeight, docElem.clientHeight, docElem.scrollHeight, docElem.offsetHeight
 );

burger.addEventListener("click", toggleNav);
window.addEventListener("scroll", headerColorShifter);

function toggleNav () {
     if ( !clicked ) {
          burger.classList.add("bnav-burger-open");
          nav.classList.add("bnav-open");
          navList.classList.add("bnav-open__list");

          Array.from(navListItems).map(element => {
               element.classList.add("bnav-open__list-items");
          });
          Array.from(navLinks).map(element => {
               element.classList.add("bnav-open-links");
          });

          clicked = true;

     } else {
          burger.classList.remove("bnav-burger-open");
          nav.classList.remove("bnav-open");
          navList.classList.remove("bnav-open__list");

          Array.from(navListItems).map(element => {
               element.classList.remove("bnav-open__list-items");

          });
          Array.from(navLinks).map(element => {
               element.classList.remove("bnav-open-links");
          });
          
          clicked = false;

     }
}
function headerColorShifter () {
     scrollPosition = body.scrollTop || docElem.scrollTop;
          scrollPosition > 40 ?
               header.classList.add("darker"):
                    header.classList.remove("darker")
}