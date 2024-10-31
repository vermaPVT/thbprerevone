
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        if (!dropdown.parentElement.contains(event.target)) {
            dropdown.style.display = 'none';
        }
    });
});

const menuItems = document.querySelectorAll('.nav > li');
menuItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'block';
    });
    
    item.addEventListener('mouseleave', () => {
        const dropdown = item.querySelector('.dropdown');
        if (dropdown) dropdown.style.display = 'none';
    });
});



// Scroller


window.onscroll = function() {
    const button = document.querySelector('.topBtn');
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        button.style.display = "flex";
    } else {
        button.style.display = "none";
    }
};

document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({top: 0, behavior: 'smooth'});
};



// Section Seven

let currentIndex = 0;
const carousel = document.getElementById('carousel');
const cards = document.querySelectorAll('.card2');
const totalCards = cards.length;
const visibleCards = 2; // Updated to show 2 cards

function slideLeft() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalCards - visibleCards;
    updateCarousel();
}

function slideRight() {
    currentIndex = (currentIndex < totalCards - visibleCards) ? currentIndex + 1 : 0;
    updateCarousel();
}

function updateCarousel() {
    const translateX = -((100 / visibleCards) * currentIndex);
    carousel.style.transform = `translateX(${translateX}%)`;
}



const navbarBtn = document.querySelector(".barsbtn")
console.log("Why click not working" + navbarBtn)
navbarBtn.addEventListener('click', () => {
    console.log("Heyyyy....")
    document.querySelector(".navclose").classList.add("showNav")
    document.querySelector(".navbarBg").classList.add("showNav")
    document.querySelector(".navbarMob").classList.add("showNav")

})


const navbarClose = document.querySelector(".navclose")

navbarClose.addEventListener('click', () => {
    document.querySelector(".navclose").classList.remove("showNav")
    document.querySelector(".navbarBg").classList.remove("showNav")
    document.querySelector(".navbarMob").classList.remove("showNav")
})

// Section Eight

const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 3000, // Adjust auto-swipe speed (in milliseconds)
        disableOnInteraction: false,
    },
    pauseOnHover: true, // Stops on hover
});




let currentSlide = 1;

function showSlide(slideIndex) {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.indicator');

    slides.forEach((slide, index) => {
        slide.classList.remove('active');
        indicators[index].classList.remove('active');

        // Adjust the transform property for sliding effect
        if (index === slideIndex - 1) {
            slide.classList.add('active');
            slide.style.transform = 'translateX(0)';
        } else if (index < slideIndex - 1) {
            slide.style.transform = 'translateX(-100%)';
        } else {
            slide.style.transform = 'translateX(100%)';
        }
    });
    indicators[slideIndex - 1].classList.add('active');
    currentSlide = slideIndex; // Update the current slide
}


    // Auto slide every 5 seconds
    setInterval(() => {
        currentSlide = (currentSlide % 3) + 1;
        showSlide(currentSlide);
    }, 5000);
