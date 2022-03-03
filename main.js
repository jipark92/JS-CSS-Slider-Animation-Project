const imageArray = [
{
    id : 0,
    src: "images/pexels-andy-vu-3484061.jpg",
    class : "animation"
},
{
    id : 1,
    src: "images/pexels-roberto-nickson-2775196.jpg",
    class : "animation1"
},
{
    id : 2,
    src: "images/pexels-lumn-167699.jpg",
    class : "animation2"
},
{
    id : 3,
    src: "images/pexels-pixabay-273935.jpg",
    class : "animation3"
}];
const images = document.querySelector('img');
const prevBtns = document.querySelector('.prev-btn');
const nextBtns = document.querySelector('.next-btn');



let slideNum = 0;

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




function showCase(slideNum) {
    let imageSource = imageArray[slideNum]
    console.log(imageSource);
    images.src = imageSource.src;   
    images.classList = imageSource.class;
   
};

// WORK ON THIS LATER. FINISH "NEXT-BTN" FIRST THEN USE IT AS REFERENCE TO WORK ON PREV BUTTON EASIER.
// function prevBtn (){
//     prevBtns.addEventListener('click',()=>{
//         slideNum--;
//         console.log(slideNum);
//     })
// }
// prevBtn();


function loadFirstPic () {
    window.addEventListener('DOMContentLoaded',()=>{
        images.src = "images/pexels-andy-vu-3484061.jpg"
        images.classList.add('animation');
    })
}
loadFirstPic();