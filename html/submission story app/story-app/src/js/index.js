// Import our custom CSS
import '../sass/main.scss';

// Import components
import './components/index'

// Import javascript file as needed
import Dashboard from './pages/dashboard';
import Add from './pages/add'
import * as bootstrap from 'bootstrap';

document.addEventListener('scroll', (event) => {
    if (window.scrollY > 0) {
      document.querySelector('.navbar').classList.add('scrolled');
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
    }
});

const routes = {
  '/': Dashboard,
  '/books/add.html': Add,
}

const detectRoute = () => routes[window.location.pathname]

window.addEventListener('DOMContentLoaded', async()=>{
  const route = detectRoute()
  route.init()
})

window.addEventListener('load', ()=>{
  const spinner = document.querySelector('.spinner-wrapper')
  setTimeout(()=>{
    spinner.style.display='none';
  }, 1000)
})

