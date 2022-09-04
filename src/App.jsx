import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';

class App extends React.Component {

  state = {
    listingData:ListingData.listings[0],
    guesses: [],
    currentGuess: '',
    finished: false
  }

  // Updates the guesses array in state with the most recent guess
  updateGuess = (guess) => {
    this.setState({
      guesses: [...this.state.guesses, guess]
    }, () => {
      const guessCount = this.state.guesses.length

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
