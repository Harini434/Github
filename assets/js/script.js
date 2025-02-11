// sidebar toggle variables
const menuToggler = document.querySelector('.menu-toggler');
const sideBar = document.querySelector('.side-bar');

// page navigation variables
const navItemLinks = document.querySelectorAll('.nav li a')
const pages = document.querySelectorAll('.page');

// toggling sidebar in mobile
menuToggler.addEventListener('click', function(){
  sideBar.classList.toggle('active');
});

1
// page navigation functionality

for (let i = 0; i < navItemLinks.length; i++) {
  // added onclick event in nav links
  navItemLinks[i].addEventListener('click', function(){

    // collected nav links innertext
    const itemLinkText = this.textContent.toLowerCase();

    // defined page and add active class 
    for (let i = 0; i < pages.length; i++) {

      // defining page condition
      if (pages[i].classList.contains(itemLinkText)) {
        // add active class on current page
        pages[i].classList.add('active');
        // add active class on clicked nav link
        navItemLinks[i].classList.add('active');
      } else {
        // remove active class from other pages
        pages[i].classList.remove('active');
        // remove active class from other nav links
        navItemLinks[i].classList.remove('active');
      }

    }

  });
}

