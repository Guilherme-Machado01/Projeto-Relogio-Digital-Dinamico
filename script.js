const horas = document.getElementById('spnHoras');
const minutos = document.getElementById('spnMinutos');
const segundos = document.getElementById('spnSegundos');

const relogio = setInterval(function time(){
    let dateToday = new Date();
    let hora = dateToday.getHours();
    let minnuto = dateToday.getMinutes();
    let segundo = dateToday.getSeconds();

    if(hora < 10) hora = '0' + hora; 

    if(minnuto < 10) hora = '0' + minnuto;

    if(segundo < 10) hora = '0' + segundo;

    horas.textContent = hora;
    minutos.textContent = minnuto;
    segundos.textContent = segundo;
})