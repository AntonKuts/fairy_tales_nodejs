// info about user
// var user = navigator.userAgent;
// document.getElementsByClassName('out1')[0].innerHTML = user;

//big and small pic
var arr_fotos = ['fam.jpg', 'inov.jpg', 'teach.jpg', 'art.jpg', 'footboll.jpg', 'charity.jpg']
for (var i = 0; i < document.getElementsByClassName('box').length; i++) {
  document.getElementsByClassName('box')[i].src = 'images/' + arr_fotos[i];
  document.getElementsByClassName('boxForFoto')[i].src = 'images/' + arr_fotos[i];
  document.getElementsByClassName('boxForFoto')[i].style.border = '2px solid black';
}
for (var i = 0; i < document.getElementsByClassName('boxForFoto').length; i++) {
  document.getElementsByClassName('boxForFoto')[i].onclick = fStart;
}
function fStart() {
  active_foto = this.src;
  document.getElementById('mainImeg').src = active_foto;
  for (var i = 0; i < document.getElementsByClassName('boxForFoto').length; i++) {
    document.getElementsByClassName('boxForFoto')[i].style.border = '2px solid black';
    this.style.border = '2px solid #dd3cd6';
  }
}
