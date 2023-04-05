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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const link = document.querySelectorAll('.menu__link');
//query the nav
const nav = document.querySelector('#navbar__list');
//query all the sections
const allSections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Begin Helper Functions
 * 
*/
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function addLink(navItem) {
    const a = document.createElement('a');
    a.href = `#${navItem.id}`;
    navItem.appendChild(a);
    a.textContent = navItem.id;
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

//---------------------- build the nav------------------
//-------loop through sections using ForEach----
allSections.forEach((section) => {
    //create li items for each section
    const current = document.createElement('li');
    //within foreach, query the sectionId to access the actual property
    const currentId = section.id;
    //set the id
    current.setAttribute("id", currentId);
    //Use Helper Method to add link to section
    addLink(current);
    //set the class
    current.setAttribute("class", "menu__link");
    //append current li element to nav
    nav.appendChild(current);

    ////add Onclick event listener
    current.addEventListener('click', function (event) {
        event.preventDefault();
        section.scrollIntoView({ behavior: "smooth" });
    });
});

    /**
     * End Main Functions
     * Begin Events
     *
    */

    // Build menu

    // Scroll to section on link click

    // Set sections as active

    //-------Highlight Active Section---------------
    //create scroll event listener on window object
    window.addEventListener('scroll', function () {
        //iterate over allSections variable to access each section
        allSections.forEach(function (section) {
            //retrieve the section's position on page
            const currentPos = section.getBoundingClientRect();
            //use position to check if section is visible within viewport
            const isVisible = currentPos.top > 0
                && currentPos.left > 0
                && currentPos.right <= window.innerWidth
                && currentPos.bottom <= window.innerHeight;
            //if so, add your-active-class to that section
            if (isVisible) {
                //use classList to add the class
                section.classList.add('your-active-class');
            }
            //else, remove active class from the section
            else {
                //use classList to remove the class
                section.classList.remove('your-active-class');
            }
        });

    });
