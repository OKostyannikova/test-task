; (function () {

  const navBtn = document.querySelector(".nav-toggle-btn");
  const pageNav = document.querySelector(".page-nav__list");

  navBtn.addEventListener("click", event => {
    if (navBtn.classList.contains("nav-toggle-btn--open")) {
      navBtn.classList.remove("nav-toggle-btn--open");
      navBtn.classList.add("nav-toggle-btn--close");
      pageNav.classList.add("page-nav__list--open");
    } else {
      navBtn.classList.add("nav-toggle-btn--open");
      navBtn.classList.remove("nav-toggle-btn--close");
      pageNav.classList.remove("page-nav__list--open");
    }
  })
})();