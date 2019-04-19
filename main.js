const slideList = [{
  text: 'Tanio'
},
{
  text: 'Bezboleśnie'
},
{
  text: 'Precyzyjnie'
}];

const time = 3000;
let active = 0;

const h1 = document.querySelector('header h1');

const changeSlide = () => {
  active++;
  if(active === slideList.length){
      active = 0;
  }
  h1.textContent = slideList[active].text;
}

let indexInterval = setInterval(changeSlide, time)