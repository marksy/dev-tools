let viewportX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
let viewportY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
let docY;
let div = document.createElement('div');

div.setAttribute('id', 'dev-tools');
document.body.appendChild(div);
div.classList.add('show');
div.onmouseover = function(){
  div.classList.toggle('switch');
};

window.addEventListener('resize', init);

function init() {
    viewportX = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    viewportY = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    div.innerHTML = '<span class="alt-color">width:</span>' + viewportX + 'px <span class="alt-color">height:</span>' + viewportY + 'px';
};

init();
