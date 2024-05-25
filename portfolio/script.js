// _____LIGHT DARK MODE TOGGLE________
const toggle = document.getElementById('mode-icon');
const body = document.querySelector('body');
const logo = document.getElementById('logo');

toggle.addEventListener('click', function(){
    body.classList.toggle('light-theme');
    if(body.classList.contains('light-theme')){
        toggle.src = "assets/sun.png"
        logo.src = "assets/pb2.png"
    }else{
        toggle.src = "assets/moon.png"
        logo.src = "assets/pb1.png"
    }
})

//__________Menu Bar____________

const menuBar = document.getElementById('menu-bar');
const navBar = document.querySelector('.navbar');

menuBar.addEventListener('click',()=>{
    navBar.classList.toggle('active');
    menuBar.classList.toggle('fa-xmark');
})
