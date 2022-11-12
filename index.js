let slidePosition = 0;
const slide = document.getElementsByClassName('carousel_item');
const totalSlide = slide.length;

//console.log(totalSlide);
document.getElementById('carousel_button--next')
.addEventListener("click", function(){
    moveToNextSlide();
});
document.getElementById('carousel_button--prev')
.addEventListener("click", function(){
    moveToPrevSlide();
});

function updateSlide(){
    for (let slides of slide)
    {
        slides.classList.remove('carousel_item--visible');
        slides.classList.add('carousel_item--hidden');
    }
    slide[slidePosition].classList.add('carousel_item--visible');
}


function  moveToNextSlide(){
    if (slidePosition == totalSlide - 1)
    {
        slidePosition = 0;
    } else{
        slidePosition++;
    }

    updateSlide();
}

function moveToPrevSlide(){
    if (slidePosition == 0)
    {
        slidePosition = totalSlide - 1;
    } else{
        slidePosition--;
    }

    updateSlide();
}