// const incre=document.querySelector('.increment')
// const counter=document.querySelector('.count')
// let count=0
// const decre=document.querySelector('.decrement')
// const reset=document.querySelector('.reset');
// const input=document.querySelector('input');
// let res=0
// function increment(){
//     incre.addEventListener('click',()=>{
//         count++
//         counter.innerHTML=count
//     })
// }
// increment()
// function decrement(){
//     decre.addEventListener('click',()=>{
//         if (count > 0) { // Check if count is greater than 0
//             count--;
//             counter.innerHTML = count;
//         } else {
//             count = 0; // Set count to 0 if it's already 0
//         }
//     })
// }

// function resetes(){
//     reset.addEventListener('click',()=>{
//         count = 0;
//         counter.innerHTML = count;
     
//     })
// }


// function inp(){
//     input.addEventListener('click',()=>{
//         count++;
//         counter.innerHTML = count;

//     })
// }
// inp()
// resetes()



// decrement()


const counter = document.querySelector('.count');
let count = 0;

document.querySelector('.increment').addEventListener('click', () => {
    counter.textContent = count++;
});

document.querySelector('.decrement').addEventListener('click', () => {
    counter.textContent = count > 0 ? count-- : 0;
});

document.querySelector('.reset').addEventListener('click', () => {
    count = 0;
    counter.textContent = count;
});

