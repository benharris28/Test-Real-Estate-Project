import React from 'react';
import ApiContext from '../ApiContext'

class Listing extends React.Component {
  static contextType = ApiContext;

  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  
  
  render() {
    return (
      <div>
        This is the listing component
      </div>
    )
  }
  
}

export default Listing;