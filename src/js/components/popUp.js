export default popUp
const popUpBtns = document.querySelectorAll('[data-popUp-btn]');
const popUpBtnsClose = document.querySelectorAll('[data-popUp-btn-close]');
const popUps = document.querySelectorAll('[data-popUp]');

popUps.forEach(function(item) {
      item.addEventListener('click', function() {
            item.classList.remove('pop-up--active')
      })
})

popUpBtns.forEach(function(item) {
      item.addEventListener('click', function() {
            const path = this.dataset.popupBtn;
            const currentPopUp = document.querySelector('#' + path)
            
            currentPopUp.querySelector('.content-pop-up').addEventListener('click', function(e) {
                  e.stopPropagation()
            })
            
            currentPopUp.classList.add('pop-up--active');
            document.body.classList.add('no-scroll');
            document.querySelector('html').classList.add('no-scroll')
      })
})

popUpBtnsClose.forEach(function(item) {
      item.addEventListener('click', function() {
            const path = this.dataset.popupBtnClose;
            const currentPopUp = document.querySelector('#' + path)
            
            currentPopUp.classList.remove('pop-up--active');
            document.body.classList.remove('no-scroll');
            document.querySelector('html').classList.remove('no-scroll')
      })
})