
document.addEventListener('DOMContentLoaded', onLoad);

function onLoad(){
  const slides = document.getElementsByClassName("slide");
  let i = 0;
  slides[i].style.display = 'inline-block';
  var count = setInterval(() =>{
    slides[i].style.display = 'none';
    i++;
    if(i >= slides.length){
      i = 0;
    }
    slides[i].style.display = 'inline-block';
    console.log(i);
  }, 5000);

}
