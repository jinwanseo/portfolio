'use strict'

//Menubar 
//메뉴 바 스크롤
document.addEventListener('scroll',e=>{
    let navbar = document.querySelector('#navbar');
    if(navbar.getBoundingClientRect().height <= window.scrollY) navbar.classList.add('navbar--dark');
    else navbar.classList.remove('navbar--dark');
});

//메뉴바 클릭시 이동
document.querySelector('.navbar__menu').addEventListener('click',e=>{
    if(e.target.nodeName === 'LI'){
        scrollLink(e.target.dataset.link);
    }
});

//Home
//contactme 버튼 클릭시
document.querySelector('.home__contact').addEventListener('click',e=>{
    scrollLink('#contact');
});

//스크롤시 점점 옅게
window.addEventListener('scroll',e=>{
    let elem_height = document.querySelector('#home').getBoundingClientRect().height;
    let opacity_value = ((elem_height-window.scrollY)/elem_height);
    document.querySelector('.home__container').style.opacity = opacity_value;
});

//scroll down func
const scrollLink = (selector)=>{
    document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}