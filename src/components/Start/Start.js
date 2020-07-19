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
      <div className='theme'>
          <header className='header' id='dark'>
            <h1 className='title'>Feedback</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
        
        <div className='left' id='highlight'>
          <h1 className='leftTitle'>Start</h1>
          <h3 className='leftSub'>"How can a train be lost? It's on rails!"</h3>
          <h4 className='leftSub'>&mdash; Wes Anderson</h4>
        </div>
        <div className='wrap'>
          <div className='inWrap'>
            <h1>Welcome To The Daily Feedback Form</h1>
            <h4><i>Press start to begin</i></h4>
            
          </div>
          <div className='nextPath'>
            <button className='cont' onClick={this.startClicked} id='nextInStart'>Start</button>
          </div>
        </div>  
          
       
      </div>
    ); // end return
  } // end render
} // end class

export default Start;