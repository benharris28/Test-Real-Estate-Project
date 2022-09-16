import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';
import { isWinningGuess } from './Services/GameCalcs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import * as dayjs from 'dayjs'
import * as LocalStorage from './LocalStorage';


class App extends React.Component {
// Start a new game
  //Update listing to have an ID
  //Pull in listing with todays date
  //Check if client has played game with that ID (from local storgage)
  state = {
    listingData:ListingData.listings[0],
    listings: ListingData.listings,
    guesses: [],
    currentGuess: '',
    finished: false,
    userInfo: {},
    gameState: 'new',
    streak: null,
    userGameId: '',
    gameOver: false,
    gameResult: null,
    currentDate: '',
    currentListing: '',
    listingId: '',
    userGameInfo: {}
  }

 componentDidMount = () => {
   //Pull in the correct listing
   const a = dayjs().format('YYYY-MM-DD')
   console.log(a)

   this.setState({
     currentDate: a
   }, this.updateListing)
   
   this.updateUserInfo();
 }

  updateListing = () => {
    console.log('listing updated')
    const { listings, currentDate } = this.state
    const todayListing = listings.filter(listing => listing.display_date == currentDate)
    console.log(todayListing)

    this.setState({
      currentListing: todayListing[0],
      listingId: todayListing[0].id
    })
  }
  
  updateUserInfo = (gameId, endGame) => {
    //Check userinfo from local storage
   
    const clientStateFromLocalStorage = LocalStorage.getClientState();

    //Adds any gameinfo to state
    this.setState({
      userGameInfo: {
      ...clientStateFromLocalStorage
      }
    })

    if (!this.state.listingId === this.state.userGameInfo.id) {
      console.log('fun')
    }
    

     //If user has local storage matching todays game, update it to state
    //If user does not, start a new game with new instance of user state

    //Check if gameID is todays game
    //If gameID is today's game, check if game is over
    //If game is over, set
   
     
  }

 
  
  updateGuess = (guess) => {
    //Check if game is already over (on reload)
    //Update guesses with latest guess
    //Determine if the guess is a winner
    //If guess not a winner, determine if game should continue
    const { gameOver, listingId, guesses } = this.state;
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

    
    const updatedUserState = {
      id: listingId,
      guesses: this.state.guesses
      
    }

    LocalStorage.updateClientState(updatedUserState)
  }
    
    )

   
    }

  // Update local storage with guess history so it will persist

  

  
  render() {
    const today = dayjs();
    
    
    
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
