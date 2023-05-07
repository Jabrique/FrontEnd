// Import our custom CSS
import '../sass/main.scss';

// Import components
import './components/index'

// Import javascript file as needed
import * as bootstrap from 'bootstrap';

document.addEventListener('scroll', (event) => {
    if (window.scrollY > 0) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
});

const routes = {
  '/': Dasboard,
  '/books/add.html': Add,
}

const detectRoute = () => route[window.location.pathname]

window.addEventListener('DOMContentLoaded', async()=>{
  const route = detectRoute()
  route.init()
})