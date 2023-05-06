// 'strict mode';

const shareBtn1 = document.querySelector('#share1');
const shareBtn2 = document.querySelector('#share2');
const sharePopUp = document.querySelector('.social-media');
const overlay = document.querySelector('.overlay');
const contactClass = document.querySelector('.contact');
const mobileState = document.querySelector('.mobile-active-state');
const backIcon = document.querySelector('#back-icon');
const mediaQuerry = window.matchMedia('(max-width: 375px)');

function screenState(MQ) {
  if (MQ.matches) {
    shareBtn2.addEventListener('click', function () {
      contactClass.style.display = 'none';
      mobileState.style.display = 'flex';
      overlay.style.display = 'none';
      backIcon.addEventListener('click', function () {
        contactClass.style.display = 'flex';
        mobileState.style.display = 'none';
      });
    });
  } else {
    contactClass.style.display = 'inline-flex';
    mobileState.style.display = 'none';
    shareBtn1.addEventListener('click', function () {
      sharePopUp.style.opacity = 1;
      overlay.style.zIndex = 2;
      overlay.addEventListener('click', function () {
        console.log('kar nmikone');
        sharePopUp.style.opacity = 0;
        overlay.style.zIndex = -2;
      });
    });
  }
}

mediaQuerry.addEventListener('change', screenState);
screenState(mediaQuerry);
