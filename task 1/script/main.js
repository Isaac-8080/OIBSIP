// event listener which will trigger when user scrolls
window.addEventListener('scroll', () => {

  // selecting navbar by it's id
  let getNavbar = document.querySelector('#navbar');

  if (window.scrollY > 100) {

    getNavbar.classList.add('navbarScrollBg');

  } else {

    getNavbar.classList.remove('navbarScrollBg');
    
  }

  // tried hands on tenary operator
  // getNavbar = (window.scrollY > 100) ? getNavbar.classList.add('navbarScrollBg') : getNavbar.classList.remove('navbarScrollBg');

});


const getLang = document.querySelector('#lang');

getLang.addEventListener('click', () => {

  const getLangPopup = document.querySelector('#langPopup');
  
  if (getLangPopup.classList.contains('hidden')) {

    getLangPopup.classList.remove('hidden');

  }
  
});

const getLangPopupExit = document.getElementsByClassName('langPopupExit');

for (let i = 0; i < getLangPopupExit.length; i++) {

  const element = getLangPopupExit[i];
  
  element.addEventListener('click', () => {
  
    const getLangPopup = document.querySelector('#langPopup');
  
    getLangPopup.classList.add('hidden');    
  
  });

}