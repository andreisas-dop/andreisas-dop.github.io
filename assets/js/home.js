var images = [];
var img = 1;
var length;
var elem;

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

function changeImage() {
    var old = img
    while (old == img) {
        img = Math.floor( Math.random( ) * length );
    }
    var imgElem = document.createElement("img");
    imgElem.src = images[img];
    imgElem.classList.add('fade');
    elem.appendChild(imgElem);
}

window.onload = function() {
    getImages(window.innerWidth >= 768 ? 0 : 1);
    length = images.length;
    elem = document.getElementById('home-slide');
    img = Math.floor( Math.random( ) * length );

    var imgElem = document.createElement("img");
    imgElem.src = images[img];

    if (elem) {
        elem.appendChild(imgElem);
        window.setInterval(changeImage, 5000);
    }
}
