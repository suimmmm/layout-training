//getElementById('main aside') 할때 aside는 id를 가지고 있어야하는 건가요?
const title = document.getElementById('aside');
title.addEventListener('mouseover', function(event) {
    title.style.backgroundColor = "rgb(" + Math.random()*255 + "," + Math.random()*255 + "," + Math.random()*255 + ")";
}); 