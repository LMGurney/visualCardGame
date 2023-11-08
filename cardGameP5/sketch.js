
class Card{
  constructor(suit, value){
    this.suit = suit;
    this.value = value;
    this.points = this.calculatePts(value);

  }

  calculatePts(value){
    if(value === 'Q' || value === 'K' || value === 'J'){
      value=10;
    }else if(value === 'A'){
      value=1;
    }else{
      value = parseInt(value);
    }
    return value;
  }

  show(x,y){
    rectMode(CENTER);
    fill(255);
    rect(x, y+10, 90, 120);
    fill(0);
    textSize(24);
    textAlign(CENTER, CENTER);
    text(this.value + "\n" + this.suit, x, y);
  }


  compareCards(othercard){

      if(this.points > othercard.points){
        return "Card 1 wins!";
      }else  if(this.points < othercard.points){
        return "Card 2 wins!";
      } else  if(this.points === othercard.points){
        return "It's a TIE!";
      } else{
        return "We got issues.";
      }
  }

}

class Deck{
  constructor(card){
    this.cards=[];
    const suits = ['♠', '♣', '♥', '♦'];
    const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];

      for(const suit of suits){
        for(const value of values){
          this.cards.push(new Card(suit, value));
        }
      }

  }
}


