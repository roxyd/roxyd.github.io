var myImage = document.querySelector('img')

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'pix/roxy_photo2.jpeg') {
        myImage.setAttribute ('src', 'pix/roxy_photo.jpeg')
    } else {
      myImage.setAttribute ('src', 'pix/roxy_photo2.jpeg')
    }
}