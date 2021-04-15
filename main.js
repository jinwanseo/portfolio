'use strict'

//메뉴 바 스크롤
document.addEventListener('scroll',e=>{
    let navbar = document.querySelector('#navbar');
    if(navbar.getBoundingClientRect().height <= window.scrollY) navbar.classList.add('navbar--dark');
    else navbar.classList.remove('navbar--dark');
});

//메뉴바 클릭시 이동
document.querySelector('.navbar__menu').addEventListener('click',e=>{
    if(e.target.nodeName === 'LI'){
        document.querySelector(e.target.dataset.link).scrollIntoView({behavior : 'smooth'});
    }
});