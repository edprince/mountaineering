window.onload = function() {
  var images = [
    'banner1.jpg',
    'banner2.jpg',
    'banner3.jpg'
  ];
  var x = 0;
  var banner = document.getElementById('banner');
  window.setInterval(function() { 
    if (x == (images.length - 1)) {
      x = 0;
    }
    console.log(images[x]);
    $('banner').css('background-image', 'url("images/light-bl.svg"), url("images/light-br.svg"), url("images/overlay.png"), url("../images/' + images[x] + '.jpg")');
    x += 1;

  }, 5000);
}
