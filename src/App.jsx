import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';
import { isWinningGuess } from './Services/GameCalcs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';


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
    gameOver: false,
    gameResult: null
  }

 componentDidMount = () => {
   this.updateUserInfo();
 }
  
  updateUserInfo = (gameId, endGame) => {
    //Check userinfo from local storage
    //If user has local storage matching todays game, update it to state
    //If user does not, start a new game with new instance of user state

    
     
  }

 
  
  updateGuess = (guess) => {
    //Check if game is already over (on reload)
    //Update guesses with latest guess
    //Determine if the guess is a winner
    //If guess not a winner, determine if game should continue
    const { gameOver } = this.state;
    const soldPrice = this.state.listingData.sold_price

    
    this.setState({
      guesses: [...this.state.guesses, guess]
    }, () => {
      const guessCount = this.state.guesses.length
      const maxGuesses = 5
      const totalGuesses = guessCount + 1

      const checkForWin = isWinningGuess(guess, soldPrice);

      if (guessCount >= maxGuesses || checkForWin) {
        this.setState({
          gameOver: true
        })
      }

      if (checkForWin) {
        this.setState({
          gameResult: 'win'
        })
      }

       if (guessCount >= maxGuesses && !checkForWin) {
        this.setState({
          gameResult: 'lose'
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
    const today = new Date();
    
    
    const value = {
      ...this.state,
      updateGuess: this.updateGuess,
    }

    console.log(this.state)

    return (
      <ApiContext.Provider value={value}>
        
           <div className="app">
             <Navbar bg="light">
            <Container>
              <Navbar.Brand href="#home">Peak Real Estate Game</Navbar.Brand>
            </Container>
          </Navbar>
             <Container className="p-3">
          
          
          <Game />
           </Container>
        </div>
      
       
    </ApiContext.Provider>
  )
  }
  
}

export default App;
