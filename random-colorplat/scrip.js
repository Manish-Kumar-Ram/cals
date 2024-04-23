const uls=document.querySelector('ul');
const refres=document.querySelector('.refresh');

const maxplater=304;
const generateplate=()=>{
    uls.innerHTML='';
    for(let i=0; i<maxplater; i++){
        let randomhex=Math.floor(Math.random()*0xffffff).toString(16)
        randomhex=`#${randomhex.padStart(6,'0')}`;
        console.log(randomhex);

        const color=document.createElement('li')
        color.classList.add('color')
color.innerHTML=`<div class="box" style='background: ${randomhex}'></div>
<span class="hex-value">${randomhex}</span>`;
color.addEventListener('click',()=> copycolor(color,randomhex));
uls.append(color);


    }
    

}
generateplate()
const copycolor=(color,randomhex)=>{
    const colorvalue=color.querySelector('.hex-value');
    navigator.clipboard.writeText(randomhex).then(()=>{
        colorvalue.innerText='Copied';
        setTimeout(()=>colorvalue.innerText=randomhex,1000)
    });
}
refres.addEventListener('click',generateplate);
