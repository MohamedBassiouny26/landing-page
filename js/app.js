/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */

/**
 * Define Global Variables
 * 
 */
const nav = document.getElementById("navbar__list");
const sections = document.querySelectorAll('section')
/**
 * End Global Variables
 * Start Helper Functions
 * 
 */

function createnav() {
    let navul = ``;
    sections.forEach(section => {

        const sectionheader = section.getElementsByTagName('h2')[0].innerText;
        const sectionid = section.id;
        navul += `<li><a class='menu__link ${sectionid}' onClick='offset(event)'  href='#${sectionid}'> ${sectionheader}<a/></li>`
    })
    nav.innerHTML = navul

}
const removeActive = (element) => {
    const elements = document.querySelectorAll(element);
    elements.forEach(element => {
        if (element.classList.contains('active_section')) {
            element.classList.remove('active_section')
        }
    })
}

function detrmineTopofElement(element) {
    const position = window.pageYOffset;
    const elemntOffset = element.offsetTop;
    let distance = elemntOffset - position;
    if (distance <= 70 && distance >= 0) {
        const aClasses = document.querySelectorAll(`.${element.id}`)[0].classList;
        const sectionClasses = document.querySelector(`#${element.id}`).classList;
        removeActive('a')
        removeActive('section')
        aClasses.add('active_section')
        sectionClasses.add('active_section')
    }
}

function offset(event) {
    event.preventDefault();
    const id = event.target.getAttribute('href')
    const offset = document.querySelector(id).offsetTop
    // window.scrollTo(0, offset)
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });

}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */

// build the nav
createnav();

// Add class 'active' to section when near top of viewport
window.addEventListener('scroll', () => {
    sections.forEach((section) => {
        detrmineTopofElement(section)
    });
}, )

// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 

// Scroll to section on link click

// Set sections as active