// // Counter one start
// let counter = document.querySelector(".counter");
// // console.log(counter.dataset.number);
// let x = counter.dataset.number;
// let count = 0;


// function counterDown(){
//     count++;

//     counter.innerHTML = count;

//     if (count == x){
//         clearInterval(stop);
//     }
// }
// let stop = setInterval(function(){
//     counterDown();
// },8);
// // Counter one end


// // Counter two start
// let countertwo = document.querySelector(".countertwo");
// // console.log(counter.dataset.number);
// let y = countertwo.dataset.number;
// let counttwo = 0;


// function counterUp(){
//     counttwo++;

//     countertwo.innerHTML = counttwo;

//     if (counttwo == y){
//         clearInterval(stoptwo);
//     }
// }
// let stoptwo = setInterval(function(){
//     counterUp();
// },8);
// // Counter two end


// // Counter three start
// let counterthree = document.querySelector(".counterthree");
// // console.log(counter.dataset.number);
// let z = counterthree.dataset.number;
// let countthree = 0;


// function counterM(){
//     countthree++;

//     counterthree.innerHTML = countthree;

//     if (countthree == z){
//         clearInterval(stopthree);
//     }
// }
// let stopthree = setInterval(function(){
//     counterM();
// },8);
// // Counter three end



// Counter start
let counter = document.querySelectorAll(".counter");
let ary = Array.from(counter)

ary.map((item)=>{

let count = 0;

function counterDown(){
    count++;

    item.innerHTML = count;

    if (count == item.dataset.number){
        clearInterval(stop);
    }
}
let stop = setInterval(function(){
    counterDown();
},1000/item.dataset.number);
})
// Counter end


// Sticky header start
$(window).scroll(function(){
    let scrolling = $(this).scrollTop();

    if(scrolling > 200){
        $('.navbar').addClass('sticky_header');
    }
    else{
        $('.navbar').removeClass('sticky_header');
    }
})
// Sticky header end