const btnMenu = document.querySelector('.btn-menu i')
const menu = document.querySelector('.menu-container')


btnMenu.addEventListener('click', menuMobile)


function menuMobile(){
    menu.classList.toggle('openMenu')
    btnMenu.classList.toggle('fa-times')
}

