import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';

class App extends React.Component {
// Start a new game
  //Update listing to have an ID
  //Pull in listing with todays date
  //Check if client has played game with that ID (from local storgage)
  state = {
    listingData:ListingData.listings[0],
    guesses: [],
    currentGuess: '',
    finished: false,
    userInfo: {},
    gameState: 'new',
    streak: null,
    userGameId: '',
    gameOver: false
  }

 componentDidMount = () => {
   this.updateUserInfo();
 }
  
  updateUserInfo = (gameId, endGame) => {
    //Check userinfo from local storage
    //If user has local storage matching todays game, update it to state
    //If user does not, start a new game with new instance of user state

    
     
  }

  evaluateWinner = (guess) => {
    //This function will determine whether guess is a winner
    
    const THRESHOLD_WIN = 0.01;
    const THRESHOLD_CLOSE = 0.1;
    const salePrice = this.context.listingData.sold_price

    const score = Math.abs((guess - salePrice) / salePrice);

    if (score)
    
  }
  
  updateGuess = (guess) => {
    //Check if game is already over (on reload)
    //Update guesses with latest guess
    //Determine if the guess is a winner
    //If guess not a winner, determine if game should continue
    const { gameOver } = this.state;

    if (gameOver) {
      
    }
    
    this.setState({
      guesses: [...this.state.guesses, guess]
    }, () => {
      const guessCount = this.state.guesses.length
      const maxGuesses = 5
      const totalGuesses = guessCount + 1

      if (totalGuesses >= maxGuesses) {
        this.setState({
          gameState: lose
        })
      }

      this.setState({
      currentGuess: guessCount + 1
    })
  }
    
    )

   
    }

  // Update local storage with guess history so it will persist

  

  
  render() {

    const value = {
      ...this.state,
      updateGuess: this.updateGuess,
    }

    console.log(this.state)

    return (
      <ApiContext.Provider value={value}>
        <div className="app">
          <header>
            Testing
          </header>
          
          <Game />
         
        </div>
    </ApiContext.Provider>
  )
  }
  
}

export default App;
