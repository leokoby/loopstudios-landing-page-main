const btnMenu = document.querySelector('.btn-menu')
const menu = document.querySelector('.menu-container')

btnMenu.addEventListener('click', menuMobile)

function menuMobile(){
    menu.classList.toggle('openMenu')
}