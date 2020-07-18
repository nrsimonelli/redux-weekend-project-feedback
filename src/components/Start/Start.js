import React, { Component } from 'react';
import axios from 'axios';


class Start extends Component {

  startClicked = () =>{
    // traveling to the next page on click
    console.log('start was clicked');
    this.props.history.push('/feeling')
  } // end startClicked

  render() {
    return (
      <div>
        <div className='left'>
          <h1 className='leftTitle'>Start</h1>
          <h3 className='leftSub'>are you ready?</h3>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Let's Go</h1>
            <p>question 2</p>
            <p>question 3</p>
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.startClicked} id='nextInStart'>Start!</button>
          </div>
        </div>  
          
       
      </div>
    ); // end return
  } // end render
} // end class

export default Start;