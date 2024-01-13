const container =document.getElementById('container')
const start =document.getElementById('start')
const stop  = document.getElementById('stop')

const randomColor =function(){
const hex='0123456789ABCDEF'
let color ='#';
for (let i = 0;i < 6;i++) {
color+= hex[Math.floor(Math.random()*16)] 
}
return color;
}

let  intervalId;
const changeColor =()=>{
intervalId= setInterval(handleStart,500)
function handleStart(){
const value= randomColor();
const input = document.getElementById('colorValue')
input.setAttribute("value",`${value}`)
container.style.backgroundColor= value;
} }

start.addEventListener('click',changeColor)
stop.addEventListener('click',()=>{
clearInterval(intervalId);
})
