import React, { Component } from 'react'
import './Voting.css'

import Up from './Up'
import Down from './Down'
import Score from './Score'

class Voting extends Component {
  render() {
    return(
      <div className="Vote">
        <Up {...this.props} />
        <Score {...this.props} />        
        <Down {...this.props} />
      </div>
    )
  }
}

export default Voting