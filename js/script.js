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