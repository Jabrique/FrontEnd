const hamburger = document.querySelector('.hamburger')
const nav = document.querySelector('.header__navList')
const header = document.querySelector('header')

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 100){
        header.classList.add('sticky')
    }else{
        header.classList.remove('sticky')
    }
})
    
hamburger.addEventListener('click', ()=>{
    nav.classList.toggle('active')
    hamburger.classList.toggle('active')
})

