// navigation 
function myMenuFunction() {
    console.log('Click')
    let menuBtn = document.getElementById('myNavMenu');
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

//Add shadow

window.onscroll = () => {
    headerShadow();
}

function headerShadow() {
    const navHeader = document.querySelector("#header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }

}


const typingEffect = new Typed('.typedText', {
    strings: ["Developer", "Designer","CSE Undergrade,",],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
})

const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


sr.reveal('.project-box', { interval: 200 })

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })


const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})
srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



const sections = document.querySelectorAll('.section');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


function dwn() {

    window.open("asset/Portfolio.pdf");

}


const insta = document.querySelector('.goi');
const link = document.querySelector('.gol');
const facebook = document.querySelector('.gof');
const git = document.querySelector('.gog');

insta.addEventListener('click', (e) => {
    location.href = 'https://www.instagram.com/_saz_id_/?utm_source=ig_web_button_share_sheet';

})
facebook.addEventListener('click', () => {
    location.href = 'https://www.facebook.com/s0129';
})
link.addEventListener('click', () => {
    location.href = 'https://bd.linkedin.com/in/sazid-ahamed-sifat-014b53296';

})
git.addEventListener('click', () => {
    location.href = 'https://github.com/sazid0411?tab=repositories';
})