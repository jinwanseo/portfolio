'use strict'

//Menubar 
//메뉴 바 스크롤
document.addEventListener('scroll',e=>{
    let navbar = document.querySelector('#navbar');
    if(window.scrollY >= 400)
        document.querySelector('.arrow-up').classList.add('visible');
    else 
        document.querySelector('.arrow-up').classList.remove('visible');
        
    if(navbar.getBoundingClientRect().height <= window.scrollY) navbar.classList.add('navbar--dark');
    else navbar.classList.remove('navbar--dark');
});

//메뉴바 클릭시 이동
document.querySelector('.navbar__menu').addEventListener('click',e=>{
    if(e.target.nodeName === 'LI'){
        document.querySelector('.menu__item.active').classList.remove('active');
        scrollLink(e.target.dataset.link);
        e.target.classList.add('active');
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

//Scroll Button
//상단으로 스크롤링
document.querySelector('.arrow-up').addEventListener('click',e=>{
    scrollLink('#home');
});

//Work
document.querySelector('.work__categories').addEventListener('click',e=>{
    document.querySelector('.work__projects').classList.remove('active');
    let filter = e.target.dataset.filter !== undefined ? e.target.dataset.filter : e.target.parentElement.dataset.filter;
    if(filter) {
        //버튼 활성화
        document.querySelector('.category__btn.active').classList.remove('active');
        let actElem = document.querySelector(`.category__btn[data-filter="${filter}"]`);
        actElem.classList.add('active');

        //프로젝트 활성화
        document.querySelectorAll(`.project`).forEach(elem => {
            elem.classList.remove('visible');
            if(elem.dataset.filter !== filter && filter !== 'all') 
                elem.classList.add('visible');
        });
        
    }
    setTimeout(() => {
    document.querySelector('.work__projects').classList.add('active');
    }, 100);
});

//scroll down func
const scrollLink = (selector)=>{
    document.querySelector(selector).scrollIntoView({behavior:'smooth'});
}
