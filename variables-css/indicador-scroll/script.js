console.log(document.documentElement.scrollHeight);
console.log(document.documentElement.clientHeight);

const h1 = document.documentElement.scrollHeight;
const h2 = document.documentElement.clientHeight;

console.log(h1 - h2);

const scrollUnit = (h1 -h2) / 100;
const rootStyle = document.documentElement.style;

addEventListener('scroll' , () =>{
    rootStyle.setProperty('--width', Math.round(scrollY /scrollUnit)) 
})

