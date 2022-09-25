import React from 'react';
import ApiContext from '../ApiContext'

class Share extends React.Component {
  static contextType = ApiContext;

  //https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share

  state = {
    textToShare: 'Testing this text'
  }

  handleShare = () => {
    navigator.clipboard.writeText(this.state.textToShare)
  }


  render() {



    return (
      <div className="share">

        <button
          onClick={this.handleShare}
          >
          
        </button>





      </div>
    )
  }

}

export default Share;