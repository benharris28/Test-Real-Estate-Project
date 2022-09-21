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
    const { showAnswer, name, helpText, detailTitle, value } = this.props
    console.log(name)
    const show = showAnswer(name)

    console.log(show)
    
    return (
      <div className="listing-detail">
        {show && 
          <div className="listing-detail-answer">{value}</div>
        }

        {!show && 
          <div className="listing-detail-answer-blur">XXX</div>
        }
        
        
      

        
        
      </div>
    )
  }
  
}

export default ListingDetail;