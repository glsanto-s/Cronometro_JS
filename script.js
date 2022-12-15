let milisegundos = 0;
let segundos = 0;
let minutos = 0;
let cronometro;




function start() {
    cronometro = setInterval(() => {
        timer()
    }, 10);
}

function timer() {
    milisegundos += 1;
    if (milisegundos == 100) {
        segundos++
        milisegundos = 0;
        if (segundos == 60) {
            minutos++
            segundos = 0;
        }
    }
    document.querySelector("#milisegundos").innerHTML = (milisegundos)
    document.querySelector("#segundos").innerHTML = (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector("#minutos").innerHTML = (minutos < 10 ? '0' + minutos : minutos) + ":"
}

function stop() {
    clearInterval(cronometro);
}

function reset() {
    milisegundos = 0;
    segundos = 0;
    minutos = 0;
    document.querySelector("#milisegundos").innerHTML = (milisegundos)
    document.querySelector("#segundos").innerHTML = (segundos < 10 ? '0' + segundos : segundos)
    document.querySelector("#minutos").innerHTML = (minutos < 10 ? '0' + minutos : minutos) + ":"
}