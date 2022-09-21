import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';
import { isWinningGuess } from './Services/GameCalcs';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
    userGameInfo: {
      id: '',
      guesses: []
    }
  }

 componentDidMount = () => {
   //Pull in the correct listing
   const a = dayjs().format('YYYY-MM-DD')
   console.log(a)

   this.setState({
     currentDate: a
   }, this.updateListing)
   
   
 }

  updateListing = () => {
    console.log('listing updated')
    const { listings, currentDate } = this.state
    const todayListing = listings.filter(listing => listing.display_date == currentDate)
    console.log(todayListing)

    this.setState({
      currentListing: todayListing[0],
      listingId: todayListing[0].id
    }, this.updateUserInfo)
  }
  
  async updateUserInfo() {
    //Check userinfo from local storage
   
    const clientStateFromLocalStorage = LocalStorage.getClientState();

    console.log(clientStateFromLocalStorage)
    console.log(clientStateFromLocalStorage.id)
    
    const newUserInfo = {
      id: '',
      gameOver: false,
      gameResult: '',
      guesses: [],
      currentGuess: ''
    }

    //Adds any gameinfo to state
    

    if (this.state.listingId == clientStateFromLocalStorage.id) {
      this.setState({
      userGameInfo: {
        ...clientStateFromLocalStorage
      }
    })
      
    } else {
      this.setState({
        userGameInfo: {
          ...newUserInfo
        }
      })
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
    const { userGameInfo, gameOver, listingId, guesses } = this.state;
    const soldPrice = this.state.listingData.sold_price

    
    this.setState({
      guesses: [...this.state.guesses, guess],
      userGameInfo: {
        ...userGameInfo,
        id: listingId,
        guesses: [...this.state.userGameInfo.guesses, guess],
        lastGuess: guess
      }
    }, () => {
      const { userGameInfo } = this.state
      const guessCount = this.state.userGameInfo.guesses.length
      const maxGuesses = 5
      const totalGuesses = guessCount + 1

      const checkForWin = isWinningGuess(guess, soldPrice);

      if (guessCount >= maxGuesses || checkForWin) {
        this.setState({
          gameOver: true,
          userGameInfo: {
            ...userGameInfo,
            gameOver: true,
          }
        }, () => LocalStorage.updateClientState(this.state.userGameInfo))

        
      }

      if (checkForWin) {
        this.setState({
          gameResult: 'win',
          userGameInfo: {
            ...userGameInfo,
            gameResult: 'win',
            gameOver: true
          }
        })
      }

       if (guessCount >= maxGuesses && !checkForWin) {
        this.setState({
          gameResult: 'lose',
           userGameInfo: {
            ...userGameInfo,
            gameResult: 'lose',
            gameOver: true
          }
        })
      }

      this.setState({
      currentGuess: guessCount + 1
        
    })

    
      
    const updatedUserState = {
      ...userGameInfo
      
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
          
            <div className="nav">
             <Container>
         
              
                <Row>
                  <Col className="nav-item">
                    <img
                  src='https://www.readthepeak.com/assets/logo-colour-f2d4b090f4edf1677799a0316f4d2db77c900e6ea8fa93c578cb43b7a37bd50a.png'
                     width="70"
                    height="30"
                  />
                  </Col>
                  <Col className="nav-item">
                    <h4 className="nav-title">Housify</h4>
                  </Col>
                    <Col className="nav-item">
                    <h4 className="nav-title">Housify</h4>
                  </Col>
                </Row>
                
              
             
           
            </Container>
              </div>
       
             <Container className="p-3">
          
          
          <Game />
           </Container>
        </div>
      
       
    </ApiContext.Provider>
  )
  }
  
}

export default App;
