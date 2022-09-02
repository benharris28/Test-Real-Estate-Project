import './App.css'
import React from 'react';
import ListingData from './ListingData';

class App extends React.Component {

  state = {
    listingData:ListingData.listings[0]
  }

  const 
  
  render() {

    return (
    <div className="app">
      <header>
        Testing
      </header>
      <div className="game">
        <div className="listing">
          <div className="listing-hero">
            <img className="listing-image"     src="https://listed-dot-fun.s3.us-west-1.amazonaws.com/listings/5730ea2b-14e9-4942-b05d-cb28e5a7cf19.jpg"/>
            <div className="sold-date">
              Sold on
              <span>8/27/2022</span>
            </div>
          </div>
          <div className="listing-attribute-row">
            <div className="listing-attribute"></div>
              <div class="listing__attribute__value">{this.state.listingData.city}</div>
          </div>
        </div>
      </div>
      <main>
        <h2>React ⚛️ + Vite ⚡ + Replit 🌀</h2>
      </main>
    </div>
  )
  }
  
}

export default App;
