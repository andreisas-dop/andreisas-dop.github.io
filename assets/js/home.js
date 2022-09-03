var images = [];
var img = 1;
var length;
var elem = document.getElementById('home-slide');

function getImages(mobile) {
  if (mobile) {
    for (var i = 1; i <= 33; i++) {
        images.push('/assets/img/home/S' + i + '.jpg');
    }
  }
  else {
    for (var i = 1; i <= 43; i++) {
        images.push('/assets/img/home/L' + i + '.jpg');
    }
  }
}

function changeImage()
{
    var old = img
    while (old == img) {
        img = Math.floor( Math.random( ) * length );
    }
    elem.style.backgroundImage="url(" + images[img] + ")";
}

window.onload = function() {
    getImages(window.innerWidth >= 768 ? 0 : 1);
    length = images.length;
    var elem = document.getElementById('home-slide');
    if (elem) {
        window.setInterval(changeImage, 5000);
    }
}
