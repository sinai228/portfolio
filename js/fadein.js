window.onload = function () {
  const faders = document.querySelector(".fade-in");

  window.addEventListener('scroll', scrollEffect);

  function scrollEffect() {
    if (window.scrollY >= 500) {
      faders.style.opacity = "1";
      faders.style.transform = 'translateX(0px)';
      faders.style.transition = '1s ease-in-out';
    }
    else {
      faders.style.opacity = '0';
      faders.style.transform = 'translateX(-50px');
    }
  }
}