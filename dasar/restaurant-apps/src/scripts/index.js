import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';

console.log('Hello Coders! :)');

// hamburger
const hamburger = document.querySelector('.hamburger')
const navList = document.querySelector('.nav-list')

hamburger.addEventListener('click', ()=>{
    hamburger.classList.toggle('clicked')
    navList.classList.toggle('active')
})

// navbar
const header = document.querySelector('header')

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
});