/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById("header");
  // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*=============== SERVICES MODAL ===============*/
// Get the modal
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalClose = document.querySelectorAll(".services__modal-close");

// When the user clicks on the button, open the modal
let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((mb, i) => {
  mb.addEventListener("click", () => {
    modal(i);
  });
});

modalClose.forEach((mc) => {
  mc.addEventListener("click", () => {
    modalViews.forEach((mv) => {
      mv.classList.remove("active-modal");
    });
  });
});

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixer = mixitup(".work__container", {
  selectors: {
    target: ".work__card",
  },
  animation: {
    duration: 300,
  },
});

/* Link active work */
const workLinks = document.querySelectorAll(".work__item");

function activeWork(workLink) {
  workLinks.forEach((wl) => {
    wl.classList.remove("active-work");
  });
  workLink.classList.add("active-work");
}

workLinks.forEach((wl) => {
  wl.addEventListener("click", () => {
    activeWork(wl);
  });
});

/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
  spaceBetween: 24,
  loop: true,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

/*=============== LIGHT DARK THEME ===============*/
const themeButton = document.getElementById("theme-button");
const lightTheme = "light-theme";
const iconTheme = "bx-sun";
const themeIcon = document.getElementById("theme-icon");

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// Function to set the logo image based on the theme
const setThemeIcon = (theme) => {
  const logoImg = document.getElementById('logo-img');
  const logoText = document.querySelector('.nav__logo-text');
  if (theme === "dark") {
    logoImg.src = "assets/images/black.png";
    logoText.style.color = "black";
  } else {
    logoImg.src = "assets/images/white.png";
    logoText.style.color = "white";
  }
};


// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(lightTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    lightTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
  setThemeIcon(selectedTheme);
}

// Initialize theme and logo on page load
const initialTheme = getCurrentTheme();
setThemeIcon(initialTheme);

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the light / icon theme
  document.body.classList.toggle(lightTheme);
  themeButton.classList.toggle(iconTheme);
// Get the new theme and set the icon accordingly
const newTheme = getCurrentTheme();
setThemeIcon(newTheme);

// Save the theme and the current icon that the user chose
localStorage.setItem("selected-theme", newTheme);
localStorage.setItem("selected-icon", getCurrentIcon());

});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 400,
  reset: true,
});

sr.reveal(`.nav__menu`, {
  delay: 100,
  scale: 0.1,
  origin: "bottom",
  distance: "300px",
});

sr.reveal(`.home__data`);
sr.reveal(`.home__handle`, {
  delay: 100,
});

sr.reveal(`.home__social, .home__scroll`, {
  delay: 100,
  origin: "bottom",
});

sr.reveal(`.about__img`, {
  delay: 100,
  origin: "left",
  scale: 0.9,
  distance: "30px",
});

sr.reveal(`.about__data, .about__description, .about__button-contact`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.skills__content`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.services__title, services__button`, {
  delay: 100,
  scale: 0.9,
  origin: "top",
  distance: "30px",
});

sr.reveal(`.work__card`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.testimonial__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

sr.reveal(`.contact__info, .contact__title-info`, {
  delay: 100,
  scale: 0.9,
  origin: "left",
  distance: "30px",
});

sr.reveal(`.contact__form, .contact__title-form`, {
  delay: 100,
  scale: 0.9,
  origin: "right",
  distance: "30px",
});

sr.reveal(`.footer, footer__container`, {
  delay: 100,
  scale: 0.9,
  origin: "bottom",
  distance: "30px",
});

/*=============== TYPEWRITER EFFECT ===============*/
class Typerwriter {
  constructor(el, options){
    this.el = el;
    this.words = [...this.el.dataset.typewriter.split(',')];
    this.speed = options?.speed || 100;
    this.delay = options?.delay || 1500;
    this.repeat = options?.repeat;
    this.initTyping();
  }

  wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  toggleTyping = () => this.el.classList.toggle('typing');

  async typewrite(word){
    await this.wait(this.delay);
    this.toggleTyping();
    for (const letter of word.split('')) {
      this.el.textContent += letter;
      await this.wait(this.speed)
    }
    this.toggleTyping();
    await this.wait(this.delay);
    this.toggleTyping();
    while (this.el.textContent.length !== 0){
      this.el.textContent = this.el.textContent.slice(0, -1);
      await this.wait(this.speed)
    }
    this.toggleTyping();
  }

  async initTyping() {
    for (const word of this.words){
      await this.typewrite(word);
    }
    if(this.repeat){
      await this.initTyping();
    } else {
      this.el.style.animation = 'none';
    }
  }
}

document.querySelectorAll('[data-typewriter]').forEach(el => {
  new Typerwriter(el, {
    repeat: true,
  })
});

// Function to toggle dark/light mode
function toggleDarkLightMode() {
  document.body.classList.toggle('dark-mode');
}

// Example: Listening to a button that toggles dark mode (if exists)
const modeToggleButton = document.getElementById('mode-toggle-button');
if (modeToggleButton) {
  modeToggleButton.addEventListener('click', toggleDarkLightMode);
}

// Function to open the modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = 'block';
  document.body.classList.add('modal-open'); // Prevent background scrolling
}

// Function to close the modal
function closeModal(modal) {
  modal.style.display = 'none';
  document.body.classList.remove('modal-open'); // Enable background scrolling
}

// Get all the demo buttons
const demoButtons = document.querySelectorAll('.work__button');

// Add event listeners to all demo buttons to open the corresponding modal
demoButtons.forEach(button => {
  button.addEventListener('click', function(event) {
      event.preventDefault();
      const modalId = this.getAttribute('data-modal');
      openModal(modalId);
  });
});

// Get all the close buttons
const closeButtons = document.querySelectorAll('.work__modal-close');

// Add event listeners to all close buttons to close the corresponding modal
closeButtons.forEach(button => {
  button.addEventListener('click', function() {
      const modal = this.closest('.work__modal');
      closeModal(modal);
  });
});

// Close modal when clicking outside of the modal content
window.addEventListener('click', function(event) {
  const modals = document.querySelectorAll('.work__modal');
  modals.forEach(modal => {
      if (event.target == modal) {
          closeModal(modal);
      }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const itemsPerPage = 8;
  const workItems = document.querySelectorAll(".work__card");
  const totalItems = workItems.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  let currentPage = 1;

  function showPage(page) {
      workItems.forEach((item, index) => {
          item.style.display = (index >= (page - 1) * itemsPerPage && index < page * itemsPerPage) ? "block" : "none";
      });
      document.getElementById("current-page").textContent = page;
      document.getElementById("total-pages").textContent = totalPages;
      document.getElementById("prev-page").disabled = page === 1;
      document.getElementById("next-page").disabled = page === totalPages;
  }

  document.getElementById("prev-page").addEventListener("click", function () {
      if (currentPage > 1) {
          currentPage--;
          showPage(currentPage);
      }
  });

  document.getElementById("next-page").addEventListener("click", function () {
      if (currentPage < totalPages) {
          currentPage++;
          showPage(currentPage);
      }
  });

  // Show the first page on load
  showPage(currentPage);
});
