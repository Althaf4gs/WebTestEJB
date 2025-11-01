//Scroll Section Active Link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
      });
    };
  });

  //Sticky Navbar
  let header = document.querySelector('header');

  header.classList.toggle('sticky', window.scrollY > 100);

  //Remove Icon Navbar when Scrolling
  menuIcon.classList.remove('bx-x');
  navbar.classList.remove('active');
};

//Toggle Icon Navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

//Scroll Reveal
ScrollReveal({ 
  reset: true,
  distance: '80px',
  duration: 1000,
  delay:100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-image, .services-container, .product-content, .contact-box', { origin: 'bottom' });

//Types JS (Macam2 Services)
const typed = new Typed('.multiple-text', {
  strings: ['Maintenance Welding Robot', 'Electrical and Mechanical', 'Machining', 'Fabrication', 'General Contractor and Supply', 'Rent CAR'],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  loop: true
});

//Widget Whatsapp
let isChatboxVisible = false;
const chatbox = document.querySelector(".wa-widget .wa-ChatBox");

function hideChatbox(){
  isChatboxVisible = false;
  chatbox.style.display = "none";
}

function toggleChatbox(){
  isChatboxVisible = !isChatboxVisible;
  chatbox.style.display = isChatboxVisible ? "block" : "none";
}

//Scripts for Product slider
var swiper = new Swiper(".mySwiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      loop: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
        slideShadows: true,
      },
      autoplay:{
        delay:1000,
        disableOnInteraction:false,
      }
    });

