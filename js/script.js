window.addEventListener('DOMContentLoaded', () => {
    const  wideContent = document.querySelector('.pr-content__more'),
    mainContent = document.querySelector('.promo__content'), 
    itemHide =  document.querySelector('.pr-content__items_hide');
    


    wideContent.addEventListener('click', () => {
        wideContent.classList.toggle('pr-content__more_active');
        mainContent.classList.toggle('promo__content_active');
        itemHide.classList.toggle('pr-content__items_hide');
        
    });
 
})







