const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('button[data-start]'),
    stopBtn: document.querySelector('button[data-stop]'),
};

refs.startBtn.addEventListener('click', starthangeBodyColor);
refs.stopBtn.addEventListener('click', stopedChangeBodyColor);
refs.stopBtn.setAttribute('disabled', 'disabled');
let timerId = null;

function starthangeBodyColor() {
    timerId = setInterval(() => { 
        refs.body.style.backgroundColor = getRandomHexColor();
        refs.startBtn.setAttribute('disabled', 'disabled');
        refs.stopBtn.removeAttribute('disabled', 'disabled');
    }, 1000);
    
}

function stopedChangeBodyColor() {
    clearInterval(timerId);
    refs.startBtn.removeAttribute('disabled', 'disabled');
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}