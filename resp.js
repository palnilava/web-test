burg= document.querySelector('.burg')
navbar= document.querySelector('.navbar')
navlist= document.querySelector('.navlist')

burg.addEventListener('click',()=>{
    navlist.classList.toggle('vis');
    navbar.classList.toggle('nav-h');
})
