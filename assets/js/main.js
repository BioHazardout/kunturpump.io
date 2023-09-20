// Swiper js
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    // grabCursor: true,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  
/*===== MOVER IMAGENES =====*/

document.addEventListener('mousemove', move);
function move(e){
    this.querySelectorAll('.move').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX*speed)/120
        const y = (window.innerHeight - e.pageY*speed)/120

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`
    })
}

/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById ("nav-toggle"),
    navClose = document.getElementById ("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click",()=>{
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName("skills__content"),
      skillsHeader = document.querySelectorAll(".skills__header")

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }
    if(itemClass === "skills__content skills__close"){
        this.parentNode.className = "skills__content skills__open"

    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener("click", toggleSkills)
})

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
        tabContents = document.querySelectorAll("[data-content]")

tabs.forEach(tab =>{
    tab.addEventListener("click", ()=>{
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove("methodology__active")
        })

        target.classList.add("methodology__active")

        tabs.forEach(tab =>{
            tab.classList.remove("methodology__active")
        })
        tab.classList.add("methodology__active")
    })
})





/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
  
    if(scrollY > 5){
      document.querySelector("header").classList.add("header-active");
    }else{
      document.querySelector("header").classList.remove("header-active");
    }
  })  


/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)



/*==================== SCROLL REVEAL ANIMATION ====================*/


ScrollReveal().reveal('.home__data,.home__img, .home__social, .footer__copy', { origin: 'top',distance: '40px',duration: 2500,reset: false }),
{
        interval: 100
    }

/*===== GSAP ANIMATION =====*/
// NAV
gsap.from('.nav__logo' , {opacity: 0, duration: .8, delay:1, y: 10, })
gsap.from('.nav__item', {opacity: 0, duration: .8, delay: 1, y: 30, stagger: 0.2,})

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    duration: 2500,
    delay: 250,
  })
  
  sr.reveal(`.section__title, .section__subtitle, .section__description, .home__scroll, .banner__img, 
  .footer__container, .footer-links, .footer__seven, .process__firma, .soluciones__title, .soluciones__img`, {interval:100,})

sr.reveal(`.benefies__data, .menu-items, .about__data, .skills__container, .methodology__container ,.features__container, .proyect, .services__container , .contact__container, .portfolio__container, .testimonial__container, .ventajas__container, .process__container` , {origin: 'bottom'})
sr.reveal(`.benefies__img, .time-table, .about__img, .advantages__description,.advantages__img, .advantages__subtitle, .advantages__info, .soluciones__data, .soluciones__box`, {origin: 'bottom'})


