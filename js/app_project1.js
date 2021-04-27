// Keeps track of a winner
let winner = false;

// Get a reference to the cards div
const cards = document.querySelector('.cards');

// Render cards
cards.innerHTML = getCards();

// Get a reference to the cards buttons
const cardButtons = document.querySelectorAll('.card-btn');

// Get a reference to the chelsea votes span
const chelseaVotesEl = document.querySelector('.votes-number-chelsea');

// Get a reference to the madrid votes span
const madridVotesEl = document.querySelector('.votes-number-madrid');

// Set event listener for the vote buttons
cardButtons.forEach(cardButton => {
    cardButton.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-chelsea')) {
            addVote(0, 'chelsea', chelseaVotesEl)
        } else {
            addVote(1, 'madrid', madridVotesEl)
        }
    })
})