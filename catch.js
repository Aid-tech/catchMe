const game = document.querySelector('.game');
let appear = false;
let valueScore = 0;

for(let i = 0; i < 6; i++){
    let hole = document.createElement('div');
    hole.classList.add('hole');
    game.appendChild(hole);
    let mole = document.createElement('div');
    mole.classList.add('mole');
    hole.appendChild(mole);
}

const holes = document.querySelectorAll('.hole');
function getRandomMole() {
    const timeDisappear = Math.round(Math.random() * (1000 - 200) + 200);
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    hole.classList.add('up');
    setTimeout(() => {
        hole.classList.remove('up');
        if (!appear) {
            getRandomMole();
        }
    }, timeDisappear);
}

const start = document.querySelector('.startGame');
const scores = document.querySelector('.score');
start.addEventListener('click', ()=>{
    scores.textContent = 0;
    appear = false;
    valueScore = 0;
    getRandomMole();
    setTimeout(() => {
        appear = true;
    }, 20000);
});



const moles = document.querySelectorAll('.mole');
moles.forEach(mole => mole.addEventListener('click', e => {
    if (!e.isTrusted) {
        return;
    }
    setTimeout(()=>{
        document.body.classList.toggle('flash');
    }, 200);
    document.body.classList.toggle('flash');
    valueScore++;
    mole.parentNode.classList.remove('up');
    scores.textContent = valueScore;
}));