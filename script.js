const images = document.querySelectorAll('.img-min');
let count = 0; 

const next = document.querySelector('.next');
next.onclick = nextFunction;

const prev = document.querySelector('.prev');
prev.onclick = prevFunction;


function nextFunction() {
    if (count + 1 < images.length){
        count++
    } else {
        count = 0
    }
    let k = document.querySelectorAll('.active-img')
    for ( let item of k){
        item.classList.remove("active-img");
    }

    images[count].classList.add('active-img');
    document.querySelector(".max img").src =  images[count].src; 
}

function prevFunction() {

    let k = document.querySelectorAll('.active-img')
    for ( let item of k){
        item.classList.remove("active-img");
    }

    if (count - 1 >= 0){
        count--
    } else {
        count = images.length-1
    }
    images[count].classList.add('active-img');
    document.querySelector(".max img").src =  images[count].src;

}

function resetFunction(e) {
    if (images[count].classList.contains('active-img')) { 
        images[count].classList.remove('active-img')
        count = 0
    } 

    images[count].classList.add('active-img');
    document.querySelector(".max img").src =  images[count].src;

}
// ваше событие здесь!!!

document.querySelector('.prev').onclick = prevFunction;
document.querySelector('.next').onclick = nextFunction;
document.querySelector('.reset').onclick = resetFunction;
