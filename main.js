const imageArray = [{
    id : 0,
    src: "images/pexels-andy-vu-3484061.jpg" 
},
{
    id : 1,
    src: "images/pexels-roberto-nickson-2775196.jpg" 
},
{
    id : 2,
    src: "images/pexels-lumn-167699.jpg" 
},
{
    id : 3,
    src: "images/pexels-pixabay-273935.jpg" 
}];
const images = document.querySelector('img');
const prevBtns = document.querySelector('.prev-btn');
const nextBtns = document.querySelector('.next-btn');


let slideNum = 0;
console.log(slideNum);

function nextBtn () {
    nextBtns.addEventListener('click',()=>{
        slideNum++;
        console.log(slideNum);
        if (slideNum >= 4) {
            slideNum = 0;
        }
        showCase(slideNum);
    })
}
nextBtn();

// function prevBtn (){
//     prevBtns.addEventListener('click',()=>{
//         slideNum--;
//         console.log(slideNum);
//     })
// }
// prevBtn();


function showCase(slideNum) {
    let imageSource = imageArray[slideNum]
    console.log(imageSource);
    images.src = imageSource.src;
}


// window.addEventListener('DOMContentLoaded',()=>{
//     images.src = imageSource.src[0];
// });




