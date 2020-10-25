
const red = document.getElementById('red');
const green = document.getElementById('green');
const blue = document.getElementById('blue');

const spanRed = document.getElementById('s-red');
const spanBlue = document.getElementById('s-blue'); 
const spanGreen = document.getElementById('s-green'); 

const rootStyel = document.documentElement.style;


//Funciones de cambio
const changeColorRed = e => {
    console.log(e.target.value);
    rootStyel.setProperty('--red', e.target.value);
    spanRed.innerHTML = e.target.value;
}
const changeColorGreen = e => {
    console.log(e.target.value);
    rootStyel.setProperty('--green', e.target.value);
    spanGreen.innerHTML = e.target.value;
}
const changeColorBlue = e => {
    console.log(e.target.value);
    rootStyel.setProperty('--blue', e.target.value);
    spanBlue.innerHTML = e.target.value;
}

red.addEventListener('change', e => {
    changeColorRed(e)
})
//En chrome este evento no se visualiza
red.addEventListener('mousemove', e => {
    changeColorRed(e)
})

//Green
green.addEventListener('change', e => {
    changeColorGreen(e)
})
//En chrome este evento no se visualiza
green.addEventListener('mousemove', e => {
    changeColorGreen(e)
})

//Blue
blue.addEventListener('change', e => {
    changeColorBlue(e)
})
//En chrome este evento no se visualiza
blue.addEventListener('mousemove', e => {
    changeColorBlue(e)
})