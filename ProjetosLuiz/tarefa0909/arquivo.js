var display = document.querySelector('time');
var myStart = document.getElementById('start');
var myStop = document.getElementById('stop');
var myReset = document.getElementById('reset');

var segundos = 0;
var intervalo = null;

function atualizarDisplay() {
    var h = Math.floor(segundos / 3600);
    var m = Math.floor((segundos % 3600) / 60);
    var s = segundos % 60;
    display.textContent =
        String(h).padStart(2, '0') + ':' +
        String(m).padStart(2, '0') + ':' +
        String(s).padStart(2, '0');
}

myStart.addEventListener('click', function () {
    if (intervalo) return;
    intervalo = setInterval(function () {
        segundos++;
        atualizarDisplay();
    }, 1000);
});

myStop.addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null;
});

myReset.addEventListener('click', function () {
    clearInterval(intervalo);
    intervalo = null;
    segundos = 0;
    atualizarDisplay();
});
