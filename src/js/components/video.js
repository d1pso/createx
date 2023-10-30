const videoBtn = document.querySelector('.we-are__play-btn');
const videoBlock = document.querySelector('.we-are__video-block');
const video = document.querySelector('video');

if (video) {
      videoBtn.addEventListener('click', function() {
            video.play()
            video.controls = true;
            videoBlock.classList.add('we-are__video-block--hide')
            videoBtn.classList.add('we-are__play-btn--hide')
      });
      
      video.onpause = function() {
            video.controls = false;
            videoBlock.classList.remove('we-are__video-block--hide')
            videoBtn.classList.remove('we-are__play-btn--hide')
      };
      
      video.onplaying = function() {
            if (video.paused) {
                  video.controls = false;
                  videoBlock.classList.remove('we-are__video-block--hide')
                  videoBtn.classList.remove('we-are__play-btn--hide')
            }
      };
}
export default video;
