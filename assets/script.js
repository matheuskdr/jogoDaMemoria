document.addEventListener('DOMContentLoaded', () => {

    const cards = [
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
        }
    ];

    cards.sort(() => 0.5 - Math.random());

    const board = document.querySelector('.board');
    const result = document.getElementById('result');

    let cardsChosen = [];
    let cardsChosenId = [];
    let cardWon = [];

    function creatBoard() {
        for (let i = 0; i < cards.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', './assets/img/verso.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            board.appendChild(card);
        }
    }
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cards[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cards[cardId].img);
    }
    creatBoard();
});