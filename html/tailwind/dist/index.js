// hamburger button
const hamburger = document.querySelector('#hamburger')
const navMenu = document.querySelector('#nav-menu')

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active')
    navMenu.classList.toggle('hidden')
})

//klik selain hamburger bikin hamburger ke close
window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target!= navMenu){
        hamburger.classList.remove('hamburger-active')
        navMenu.classList.add('hidden')
    }
})

// navbar scroll
window.onscroll = function() {
    const header = document.querySelector('header')
    const fixednav = header.offsetTop
    const toTop = document.querySelector('#to-top')

    if(window.pageYOffset > fixednav) {
        header.classList.add('navbar-fixed')
        toTop.classList.remove('hidden')
        toTop.classList.add('flex')
    }else{
        header.classList.remove('navbar-fixed')
        toTop.classList.add('hidden')
    }
}

//darkmode
const darkToggle = document.querySelector('#dark-toggle')
const html = document.querySelector('html')

darkToggle.addEventListener('click', function(){
    if(darkToggle.checked) {
        html.classList.add('dark')
        localStorage.theme ='dark'
    }else {
        html.classList.remove('dark')
        localStorage.theme='light'
    }
})

// posisi toggle sesuai mode
if(localStorage.theme==='dark'){
    darkToggle.checked = true
}else{
    darkToggle.checked = false
}
