import React from 'react';
import ApiContext from '../ApiContext'
import ListingDetail from './ListingDetail'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class Listing extends React.Component {
  static contextType = ApiContext;

  state = {
    listing: this.context.listingData
  }
  //Import listing data and component
  //Use a form to input guesses and format them to currency
  //Display feedback for each guess
  //Count guesses
  //Display remaining guesses
  
  showAnswer = (name) => {
    console.log(name)
    
    let show = false;

    const detailsList = ['location', 'property_type', 'lot_size']
    
    
    
    if (this.context.currentGuess > detailsList.indexOf(name) && this.context.currentGuess) {
       show = true
    }

    return show;
  }

  
  render() {

    const { listing } = this.state
   
    

    

    
    
    
    return (
      <div className="listing">
        <Card>
          <Card.Img variant="top" src={listing.listing_image_url} />
        <div className="listing-hero">
          This is the listing component
          
          <div className="listing-sale-date">
            Sold on {listing.prev_sale_date}
            
          </div>
        </div>

          <Card.ImgOverlay>
        <Card.Title>Sold on {listing.prev_sale_date} </Card.Title>
       
      </Card.ImgOverlay>

        <Card.Body>

      
        
           <Card>
          <Card.Title>Location</Card.Title>

        <ListingDetail
          showAnswer={() => this.showAnswer(name)}
          name="location"
          helpText="Location"
          detailTitle={listing.property_type}
          value={`${listing.city}, ${listing.province}`}
        />
         </Card>
        
        <ListingDetail
          showAnswer={() => this.showAnswer(name)}
          name="property_type"
          helpText="Property Type"
          detailTitle={listing.property_type}
        />

        <ListingDetail 
          showAnswer={() => this.showAnswer(name)}
          name="lot_size"
          helpText="Property Type"
          detailTitle={listing.lot_size}
        />

        

        </Card.Body>
        </Card>
     
      </div>
    )
  }
  
}

export default Listing;