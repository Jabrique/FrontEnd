// Import our custom CSS
import '../sass/main.scss';

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

document.addEventListener('scroll', (event) => {
    if (window.scrollY > 0) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
});