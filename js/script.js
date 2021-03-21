window.addEventListener('DOMContentLoaded', () => {
    const  wideContent = document.querySelector('.pr-content__more'),
    mainContent = document.querySelector('.promo__content'), 
    itemHide =  document.querySelector('.pr-content__items_hide'),
    menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');
    


    wideContent.addEventListener('click', () => {
        wideContent.classList.toggle('pr-content__more_active');
        mainContent.classList.toggle('promo__content_active');
        itemHide.classList.toggle('pr-content__items_hide');
        
    });

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });


    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    })
})
