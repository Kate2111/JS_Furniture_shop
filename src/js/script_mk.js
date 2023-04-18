window.addEventListener('DOMContentLoaded', function() {
    const nextArrow = this.document.querySelector('.our-work__arrow-next');
    const prevArrow = this.document.querySelector('.our-work__arrow-prev');
    const ourWorks = this.document.querySelectorAll('.our-work__wrapper');
    
    nextArrow.addEventListener('click', nextSlide);
    /* prevArrow.addEventListener('click', prevSlide); */
    let counter = 0;
    function nextSlide() {
        
        for(let i = 0; i < ourWorks.length; i++) {
            if(ourWorks[counter].classList.contains('our-work__wrapper-active')) {
                ourWorks[counter].classList.remove('our-work__wrapper-active');
                counter++;
            } else {
                ourWorks[counter].classList.add('our-work__wrapper-active')
            }
          
        } 

    }

})