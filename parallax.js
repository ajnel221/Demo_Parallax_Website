let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let moon_btc = document.getElementById('moon_btc');
let mountains_behind = document.getElementById('mountains_behind');
let ship = document.getElementById('ship');
let text = document.getElementById('text');
let btn = document.getElementById('btn');
let mountains_front = document.getElementById('mountains_front');
let header = document.getElementById('header');

window.addEventListener('scroll', function()
{
    let value = window.scrollY;
    stars.style.left = value * 0.25 + 'px';
    moon.style.top = value * 1 + 'px';
    moon_btc.style.top = value * 1 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    ship.style.marginTop = value * 1.5 + 'px';
    mountains_front.style.top = value * 0 + 'px';
    text.style.marginRight = value * 4 + 'px';
    btn.style.marginTop = value * 1.5 + 'px';
    header.style.top = value * 0.5 + 'px';
});