// Your code goes here
const hdr = document.querySelector('.main-navigation');
const dest = document.querySelector('.content-pick');
const img = document.querySelector('.intro');
const fBus = document.querySelector('h1');
const h4 = document.querySelector('.destination');
const h42 = document.querySelector('.destination:nth-of-type(2)');
const h43 = document.querySelector('.destination:nth-of-type(3)');
const iCont = document.querySelector('.inverse-content');
const contDest = document.querySelector('.content-destination');
const nav = document.querySelector('nav');
const ftrP = document.querySelector('.footer p');

hdr.addEventListener('mouseover', event => event.target.style.background = 'blue');
document.addEventListener('keydown', event =>  {
    if(event.key === 'Escape'){
        img.remove('img');
    }
});
iCont.addEventListener('wheel', event => {
    event.stopPropagation();
    let scale = 1;
    scale += event.deltaY * -0.01;
    event.target.style.transform = `scale(${scale})`;
});

contDest.addEventListener('dblclick', event => {
    event.preventDefault();
    event.target.style.color = 'red';
});
dest.addEventListener('click', event => event.target.style.background = 'black');
hdr.addEventListener('mouseout', event => event.target.style.background = 'white');
fBus.addEventListener('copy', event => event.target.style.color = 'red');
h4.addEventListener('mouseup', event => event.target.style.color = 'gold');
h42.addEventListener('mouseup', event => event.target.style.color = 'blue');
h43.addEventListener('mouseup', event => event.target.style.color = 'pink');
ftrP.addEventListener('auxclick', event => ftr.style.background = "pink");
nav.addEventListener('auxclick', event =>{ 
    event.preventDefault();
    console.log('this worked');
});
window.addEventListener("load", event => img.style.background = "yellow");
