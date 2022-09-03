import './App.css'
import React from 'react';
import ListingData from './ListingData';
import ApiContext from './ApiContext';
import Game from './Components/Game';

class App extends React.Component {

  state = {
    listingData:ListingData.listings[0]
  }

 
  
  render() {

    const value = {
      ...this.state
    }

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
