import './styles/main.css';

const menu = document.querySelector('.header__menu')
const drawer = document.querySelector('#drawer')

menu.addEventListener('click', ()=>{
    drawer.classList.toggle('open')
})