export default accordion;

const accordions = document.querySelectorAll('.accordion__item');

accordions.forEach(function(item) {
      item.addEventListener('click', function() {
            const control = this.querySelector('.accordion__control');
            const content = this.querySelector('.accordion__content');
            const icon = this.querySelector('.accordion__icon')

            icon.classList.toggle('accordion__icon--active')
            content.classList.toggle('accordion__content--active')

            if (content.classList.contains('accordion__content--active')) {
                  content.style.maxHeight = content.scrollHeight + 'px'
            } else {
                  content.style.maxHeight = null
            }
            
            
      })
})
