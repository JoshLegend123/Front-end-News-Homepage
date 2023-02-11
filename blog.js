/*const menu = document.getElementById('menu');
const nav = document.getElementById('navbar');
if (menu) {
    menu.addEventListener('click', () => {
        nav.classList.add('active');
    })
}*/
var menu = document.getElementById('menu');
var nav = document.getElementById('navbar');
var closeBar = document.getElementById('close');
menu.onclick = function () {
    nav.style.right = '0px';
}
closeBar.onclick = function () {
    nav.style.right = '-300px';
}