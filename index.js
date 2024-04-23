class Card {
    constructor(value, suit) {
      this.value = value;
      this.suit = suit;
    }
  }
  
  class Deck {
    constructor() {
      this.cards = [];
      const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
      const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
      
      for (const suit of suits) {
        for (const value of values) {
          this.cards.push(new Card(value, suit));
        }
      }
    }
  
    shuffle() {
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }
  
    deal() {
      return this.cards.pop();
    }
  }
  
  class Player {
    constructor(name) {
      this.name = name;
      this.hand = [];
      this.score = 0;
    }
  
    playCard() {
      return this.hand.pop();
    }
  
    addPoint() {
      this.score++;
    }
  }
  
  function initializeGame() {
    const deck = new Deck();
    deck.shuffle();
  
    const player1 = new Player('Player 1');
    const player2 = new Player('Player 2');
  
    for (let i = 0; i < 26; i++) {
      player1.hand.push(deck.deal());
      player2.hand.push(deck.deal());
    }
  
    playWar(player1, player2);
  }
  
  function playWar(player1, player2) {
    while (player1.hand.length > 0 && player2.hand.length > 0) {
      const card1 = player1.playCard();
      const card2 = player2.playCard();
  
      if (card1.value > card2.value) {
        player1.addPoint();
      } else if (card1.value < card2.value) {
        player2.addPoint();
      }
    }
  
    console.log(`${player1.name} score: ${player1.score}`);
    console.log(`${player2.name} score: ${player2.score}`);
  
    if (player1.score > player2.score) {
      console.log(`${player1.name} wins!`);
    } else if (player1.score < player2.score) {
      console.log(`${player2.name} wins!`);
    } else {
      console.log('It\'s a tie!');
    }
  }
  
  // Start the game
  initializeGame();