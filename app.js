const win = document.getElementById('win');


window.onload=function(){
   win.style.visibility = 'hidden';
}


setTimeout(function() {
  
   win.style.visibility = 'visible';
}, 60000);


