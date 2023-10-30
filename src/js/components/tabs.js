export default tabs
const tabsButtons = document.querySelectorAll('[data-tab-btn]');
const tabsItems = document.querySelectorAll('[data-tab-content]');

tabsButtons.forEach(function(item) {
      item.addEventListener('click', function() {
            const path = this.dataset.path;
            console.log(path);
            
      
            tabsButtons.forEach(function(item) {
                  item.classList.remove('tabs-nav__btn--active')
            })
            
            tabsItems.forEach((item) => {
                  item.classList.remove('tabs-content__item--active')
            });
            document.querySelectorAll(`[data-target=${path}]`).forEach((item) => item.closest('[data-tab-content]').classList.add('tabs-content__item--active'))
            
            if (path == 'all') {
                  tabsItems.forEach((item) => {
                        item.classList.add('tabs-content__item--active')
                  });
            }

            
            
            item.classList.add('tabs-nav__btn--active')
      })
})


// TABS CATEGORIES 
const tabsCategoriesBtns = document.querySelectorAll('[data-tab-btn-categories]');
const tabsCatgoriesItems = document.querySelectorAll('[data-tab-content-categories]')

tabsCategoriesBtns.forEach(function(item) {
      item.addEventListener('click', function() {
            const path = this.dataset.path;

            tabsCategoriesBtns.forEach(function(item) {
                  item.classList.remove('categories__tabs-btn--active')
            })

            tabsCatgoriesItems.forEach(function(item) {
                  item.classList.remove('categories__tabs-content-item--active')
            })

            document.querySelectorAll(`[data-target=${path}]`).forEach((item) => item.closest('.categories__tabs-content-item').classList.add('categories__tabs-content-item--active'))

            if(path == 'all') {
                  tabsCatgoriesItems.forEach((item) => {
                        item.classList.add('categories__tabs-content-item--active')
                  })    
            }
            
            item.classList.add('categories__tabs-btn--active')
      }) 
})
