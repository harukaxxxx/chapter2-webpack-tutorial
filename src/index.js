var counter = 0;

window.onload = function() {
  document.getElementById('counter').innerText = counter;
  document.getElementById('btnAdd').addEventListener('click',function (e){
    counter++;
    document.getElementById('counter').innerText = counter;
  });
};