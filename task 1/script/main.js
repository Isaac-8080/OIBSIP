// event listener which will trigger when user scrolls
window.addEventListener('scroll', () => {

  // selecting navbar by it's id
  let getNavbar = document.querySelector('#navbar');

  if (window.scrollY > 100) {
    getNavbar.classList.add('navbarScrollBg');
  } else {
    getNavbar.classList.remove('navbarScrollBg');
  }

});