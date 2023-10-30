export default scroll;
const header = document.querySelector('.header');
const scrollBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', function() {
      if (window.scrollY > 366) {
            scrollBtn.classList.add('scroll-up--active')
      } else {
            scrollBtn.classList.remove('scroll-up--active')
      }
})

scrollBtn.addEventListener('click', function() {
      header.scrollIntoView(top, {
            behavior: "smooth",
      })
})

