import React, { Component } from 'react';
import axios from 'axios';


class Thank_You extends Component {

  returnClicked = () =>{
    // takes you to the review page
    console.log('return was clicked');
    this.props.history.push('/');
  } // end reviewClicked

  render() {
    return (
      <div className='theme'>
        <header className='header' id='highlight'>
          <h1 className='title'>Feedback</h1>
          <p id='finale'>~</p>
        </header>
        <div className='left' id='dark'>
          <h1 className='leftTitle'>Fin</h1>
            <h3 className='leftSub'>"All of this happened, more or less"</h3>
            <h4 className='leftSub'>&mdash; Kurt Vonnegut</h4>
          </div>
          <div className='wrap'>
            <div className='inWrap'>
              <h1>Thank You!</h1>
              <br></br>
              <p><i>See you again soon</i></p>
            </div>
            <div className='nextPath'>
              <button className='cont' onClick={this.returnClicked} id='returnInThankYou'>Return Home</button>
            </div>
          </div>
       
      </div>
    ); // end return
  } // end render
} // end class

export default Thank_You;