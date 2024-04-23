console.log("Jai ganesh");
// const one=document.getElementById('one')
// const two=document.getElementById('two')
// const three=document.getElementById('three')
// const four=document.getElementById('four')

// one.addEventListener('click',()=>{
//    if(one==='one'){
//     one.body.style.backgroundColor='blue';
//    }
// })
// console.log(one);

const btn=document.querySelectorAll('.button')
const body=document.querySelector('body');

// console.log(btn);
btn.forEach(function(e){
    console.log(e);
    e.addEventListener('click',(event)=>{
console.log(event);
console.log(event.target);
if(event.target.id==='one'){
    body.style.backgroundColor='blue'
}
if(event.target.id==='two'){
    body.style.backgroundColor='red'
}
if(event.target.id==='three'){
    body.style.backgroundColor='yellow'
}
if(event.target.id==='four'){
    body.style.backgroundColor='gray'
}
    })
})