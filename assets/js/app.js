// DOMContentLoaded Event
window.addEventListener('DOMContentLoaded', initializeApp);

// InitializeApp
function initializeApp() {
    load();
    doEventBindings();
}

// Load Screen 
function load() {
    const loadScreen = document.querySelector('.load-screen');
    loadScreen.classList.add('active');
    setTimeout(() => {
        loadScreen.classList.remove('active');
    }, 1000);
    if (localStorage.getItem('darkmode') === null) {
        localStorage.setItem('darkmode', '');
    } else {
        if (localStorage.getItem('darkmode') == '') {
            document.body.classList.remove('darkmode');
        } else {
            document.body.classList.toggle('darkmode');
        }
    }
    document.querySelector('.darkmode-input').classList.toggle('checked', document.body.classList.contains('darkmode'));
    if (document.body.classList.contains('darkmode')) {
        document.querySelector('.img-logo').src = 'assets/images/logo-white.png';
    } else {
        document.querySelector('.img-logo').src = 'assets/images/logo.png';
    }
}

function autoFillText() {
    let heroText = document.querySelector('.hero .desc .text');
    let text = 'Will it all end in a world full of mystery and find true happiness';
    let index = 0;
    let frame = 57.5;
    setTimeout(() => {
        const interval = setInterval(() => {
            heroText.innerHTML = text.slice(0, index);
            index++;
            if (index == text.length + 1) {
                clearInterval(interval)
            }
        }, frame);
    }, 1250);
}

function onScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollToTop = document.querySelector('.scroll-to-top');
    navbar.classList.toggle('sticky', window.scrollY > 0);
    scrollToTop.classList.toggle('sticky', window.scrollY > 100);

}

function darkmodeToggle() {
    document.body.classList.toggle('darkmode');
    document.querySelector('.darkmode-input').classList.toggle('checked');
    if (document.body.classList.contains('darkmode')) {
        localStorage.setItem('darkmode', 'darkmode');
        document.querySelector('.img-logo').src = 'assets/images/logo-white.png';
    } else {
        localStorage.setItem('darkmode', '')
        document.querySelector('.img-logo').src = 'assets/images/logo.png';
    }
}

// All event function
function doEventBindings() {
    window.addEventListener('load', autoFillText);
    window.addEventListener('scroll', onScroll);
    document.querySelector('.darkmode-input').addEventListener('click', darkmodeToggle);
}