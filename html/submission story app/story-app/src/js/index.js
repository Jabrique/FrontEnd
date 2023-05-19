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
      document.querySelector('to-top-button').style.display='flex';
    } else {
      document.querySelector('.navbar').classList.remove('scrolled');
      document.querySelector('to-top-button').style.display='none';
    }
});

const routes = {
  '/': Dashboard,
  '/books/add.html': Add,
}

const initPages = () => {
  const header = document.querySelector('header');
  const main = document.querySelector('main');
  const footer = document.querySelector('footer');

  if (header && main && footer) {
    main.style.minHeight = `calc(100vh - ${header.clientHeight + footer.clientHeight}px)`;
  }
};

const detectRoute = () => routes[window.location.pathname]

window.addEventListener('DOMContentLoaded', async()=>{
  initPages()
  const route = detectRoute()
  route.init()
})

window.addEventListener('load', ()=>{
  const spinner = document.querySelector('.spinner-wrapper')
  setTimeout(()=>{
    spinner.style.display='none';
  }, 1000)
})

