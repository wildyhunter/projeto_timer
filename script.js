const timer = document.getElementById('timer');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const restart = document.getElementById('restart');

let interval = undefined;
let tmpini = null;

const contador = () => {
    const tmpAtual = Date.now();
    let cont = (tmpAtual - tmpini) / 1000;
    seg = Math.floor(cont);
    console.log(seg);
    timer.innerHTML = converter(seg);
};

const converter = (seg) => {
    const hora = Math.floor(seg / 3600);
    const rest = seg % 3600;
    const min = Math.floor(rest / 60);
    const s = Math.floor(seg % 60);
    const formt =
        (hora < 10 ? '0' + hora : hora) +
        ':' +
        (min < 10 ? '0' + min : min) +
        ':' +
        (s < 10 ? '0' + s : s);
    return formt;
};

//setInterval(contador, 1000)

start.addEventListener('click', () => {
    tmpini = Date.now();
    interval = setInterval(contador, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(interval);
});

restart.addEventListener('click', () => {
    clearInterval(interval);
    tmpini = null;
    timer.innerHTML = '00:00:00';
});