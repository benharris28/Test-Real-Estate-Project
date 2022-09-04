import React from 'react';
import ApiContext from '../ApiContext'

class ListingDetail extends React.Component {
  static contextType = ApiContext;

  state = {
    listing: this.context.listingData
  }
  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  
  
  
  render() {

    const { listing } = this.state
    const { showAnswer, name, helpText, detailTitle } = this.props
    
    return (
      <div className="listing-detail">
        {showAnswer && 
          <div className="listing-detail-answer-blur">ABCDEF</div>
        }

        {!showAnswer && 
          <div className="listing-detail-answer">ABCDEF</div>
        }
        
        
        <div className="listing-detail-title">{detailTitle}</div>

        
        
      </div>
    )
  }
  
}

export default ListingDetail;