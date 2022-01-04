
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");

const img1 = document.querySelector(".img1");

btn1.addEventListener('click' , function(){
    img1.style.marginBottom =  '0';
    console.log("helo");
})

btn2.addEventListener('click' , function(){
    img1.style.marginBottom =  '-13%';
})

btn3.addEventListener('click' , function(){
    img1.style.marginBottom =  '-26%';
})

btn4.addEventListener('click' , function(){
    img1.style.marginBottom =  '-37.7%';
})