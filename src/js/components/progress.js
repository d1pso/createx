export default progressAnimation;
const circles = document.querySelectorAll('.block-facts__circle');

circles.forEach(function(el) {
      if (el.dataset.percentage == 'true') {
            let progress = el.querySelector('.progress')
            let count = el.querySelector('.block-facts__count')
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            let full = el.dataset.full;
            let value = el.dataset.value;
            let percentageProgress = Math.floor(value / full * 100)
            count.textContent = value;
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
      } else {
            let progress = el.querySelector('.progress')
            let count = el.querySelector('.block-facts__count')
            let percent = el.dataset.percent;
            let percentageProgress = Math.floor(percent)
            let radius = progress.getAttribute('r');
            let circleLength = 2 * Math.PI * radius;
            count.textContent = percent + '%';
            progress.setAttribute('stroke-dasharray', circleLength);
            progress.setAttribute('stroke-dashoffset', circleLength - circleLength * percentageProgress / 100);
      }
});
      