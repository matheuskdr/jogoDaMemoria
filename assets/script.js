const values = [
    {
        name: 'bad-gnome',
        img: './assets/img/bad-gnome.png'
    },
    {
        name: 'beast-eye',
        img: './assets/img/beast-eye.png'
    },
    {
        name: 'female-vampire',
        img: './assets/img/female-vampire.png'
    },
    {
        name: 'fomorian',
        img: './assets/img/fomorian.png'
    },
    {
        name: 'unicorn',
        img: './assets/img/unicorn.png'
    },
    {
        name: 'witch-face',
        img: './assets/img/witch-face.png'
    },
    {
        name: 'witch-flight',
        img: './assets/img/witch-flight.png'
    },
    {
        name: 'daemon-skull',
        img: './assets/img/daemon-skull.png'
    }
];

const cards = [...values, ...values];

cards.sort(() => Math.random() - 0.5);

const board = document.querySelector('.board');
const scoreArea = document.getElementById('score');

let firstCard = null;
let secondCards = null;
let block = false;
let score = 0;

function createCardElement() {

    cards.forEach(cardInfo => {
        const card = document.createElement('img');

        card.setAttribute('src', './assets/img/verso.png');
        card.dataset.name = cardInfo.name;
        card.dataset.img = cardInfo.img

        board.appendChild(card);

        card.addEventListener('click', () => flipCard(card)); 
    });
}

function flipCard(card) {
    if (block || card.classList.contains('fliped') || card.classList.contains('certa')) {
        return;
    }

    card.setAttribute('src', card.dataset.img);
    card.classList.add('fliped');

    if (!firstCard) {
        firstCard = card;
    } else {
        secondCards = card;
        checkPar();
    }
}

function checkPar() {
    if (firstCard.dataset.name === secondCards.dataset.name) {
        firstCard.classList.add('certa');
        secondCards.classList.add('certa');

        updateScore();
        resetPlay();
    } else {
        block = true;
        setTimeout(() => {
            firstCard.classList.remove('fliped');
            secondCards.classList.remove('fliped');
            firstCard.setAttribute('src', './assets/img/verso.png');
            secondCards.setAttribute('src', './assets/img/verso.png');
            resetPlay();
        }, 1000);
    }
}

function updateScore() {
    score +=1;
    scoreArea.innerHTML = `${score}`
}

function resetPlay() {
    firstCard = null;
    secondCards = null;
    block = false;
}

function resetGame() {
    board.innerHTML = '';

    firstCard = null;
    secondCards = null;
    block = false;
    score = 0;

    scoreArea.innerHTML = `${score}`

    cards.sort(() => Math.random() - 0.5);

    createCardElement();
}

createCardElement();