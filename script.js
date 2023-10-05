const img=document.querySelector('#container img');
const love=document.querySelector('#container i');

img.addEventListener('dblclick',()=>{
    love.style.transform='translate(-50%,-50%) scale(1)';
    love.style.color='red';

    setTimeout(()=>{
        love.style.opacity=0;
        love.style.color='#fff';
    },1000);

    setTimeout(()=>{
        love.style.transform='translate(-50%,-50%) scale(0)';
    },2000)
    love.style.opacity=1;
})
