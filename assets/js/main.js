
// SHOWMENU
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show_menu')
        })
    }
}

showMenu('nav_toggle', 'nav_menu')

// REMOVE MENU MOBILE
const navLink = document.querySelectorAll('.nav_link')

function linkAction() {
    const navMenu = document.getElementById('nav_menu')
    navMenu.classList.remove('show_menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

// ACTIVE MENU
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        }
        else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')

        }

    })
}

window.addEventListener('scroll', scrollActive)

// BG HEADER

function scrollHeader() {
    const header = document.getElementById('header')
    if (this.scrollY >= 200) {
        header.classList.add('scroll_header')
    } else {
        header.classList.remove('scroll_header')
    }
}
window.addEventListener('scroll', scrollHeader)

// SHOW SCROLL TOP

function scrollTop() {
    const scrollToTop = document.getElementById('scroll_top')
    if (this.scrollY >= 560) {
        scrollToTop.classList.add('show_scroll')
    } else {
        scrollToTop.classList.remove('show_scroll')
    }
}
window.addEventListener('scroll', scrollTop)


// mixitup filter 
var mixer = mixitup('.portfolio_container', {
    selectors: {
        target: '.portfolio_content'
    },
    animation: {
        duration: 400
    }
});
// link active port
const linkPortfolio = document.querySelectorAll(".portfolio_item")

function activePortfolio() {
    if (linkPortfolio) {
        linkPortfolio.forEach(l => l.classList.remove('active_portfolio'))
        this.classList.add('active_portfolio')

    }
}
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))


// swiper

const swiper = new Swiper('.testimonial_container', {
    spaceBetween: 16,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    }

});

// GSAP
gsap.from('.home_img', {opacity: 0, duration:2, delay:.5, x:60})
gsap.from('.home_data', {opacity: 0, duration:2, delay:.8, y:25})
gsap.from('.home_greeting, .home_name, .home_profession, .home_button', {opacity: 0, duration:2, delay:1, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav_logo, .nav_toggle', {opacity: 0, duration:2, delay:1.5, y:25, ease:'expo.out', stagger:.2})
gsap.from('.nav_item', {opacity: 0, duration:2, delay:1.8, y:25, ease:'expo.out', stagger:.2})
gsap.from('.home_social_icon', {opacity: 0, duration:2, delay:2.3, y:25, ease:'expo.out', stagger:.2})
