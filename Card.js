//My Plan for Project
//Define the Card classes:
//Properties: suit, rank, value  Methods: constructor Define the Deck class:
//Properties: cards (an array of Card objects) Methods: constructor, shuffle, deal


//Define the Player class:
//Properties: name, hand (an array of Card objects), score Methods: constructor, playCard, incrementScore

//Game Logic:
//Initialize the deck and shuffle it.
//Deal 26 cards to each player.
//Iterate through the turns where each player plays a card.
//Compare the cards and award points.
//Display the final score and declare the winner.

// First i create classes for cards

// Class representing a single card
class Card {
    constructor(suit, rank, value) {
        this.suit = suit; // Suit of the card (Hearts, Diamonds, Clubs, Spades)
        this.rank = rank; // Rank of the card (2, 3, 4, ..., J, Q, K, A)
        this.value = value; // Value of the card used for comparison
    }
}

// Class representing a deck of cards
class Deck {
    constructor() {
        this.cards = []; // Array to hold all the cards in the deck
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']; // Array of suits
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A']; // Array of ranks
        const values = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14}; // Object mapping ranks to values

        // Loop through each suit and rank to create a full deck of cards
        for (let suit of suits) {
            for (let rank of ranks) {
                this.cards.push(new Card(suit, rank, values[rank])); // Add a new card to the deck
            }
        }
    }

           //Methods to shuffle and deal the half deck!

    // Method to shuffle the deck
    shuffle() {
        for (let i = this.cards.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1)); // Generate a random index
            [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]]; // Swap cards at index i and j
        }
    }

    // Method to deal half the deck
    deal() {
        return this.cards.splice(0, 26); // Remove and return the first 26 cards
    }
}

                //Player Classes!

// Class representing a player
class Player {
    constructor(name) {
        this.name = name; // Player's name
        this.hand = []; // Array to hold the player's hand of cards
        this.score = 0; // Player's score
    }               
                    //Methods for Players!

    // Method for the player to play a card
    playCard() {
        return this.hand.shift(); // Remove and return the first card in the player's hand
    }

    // Method to increment the player's score
    incrementScore() {
        this.score++; // Increase the score by 1
    }
}

                    // Game setup!

const deck = new Deck(); // Create a new deck
deck.shuffle(); // Shuffle the deck

const player1 = new Player('Player 1'); // Create Player 1
const player2 = new Player('Player 2'); // Create Player 2

player1.hand = deck.deal(); // Deal half the deck to Player 1
player2.hand = deck.deal(); // Deal the other half to Player 2

// Game play
for (let i = 0; i < 26; i++) {
    const card1 = player1.playCard(); // Player 1 plays a card
    const card2 = player2.playCard(); // Player 2 plays a card

    // Compare the values of the two cards
    if (card1.value > card2.value) {
        player1.incrementScore(); // Player 1 wins the round
    } else if (card1.value < card2.value) {
        player2.incrementScore(); // Player 2 wins the round
    }
}

                // Display the final score!

console.log(`${player1.name} Score: ${player1.score}`);
console.log(`${player2.name} Score: ${player2.score}`);

                // Recognize and display the winner! 

if (player1.score > player2.score) {
    console.log(`${player1.name} wins!`);
} else if (player1.score < player2.score) {
    console.log(`${player2.name} wins!`);
} else {
    console.log("It's a tie!");
}
