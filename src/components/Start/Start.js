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
        <h1>Start</h1>
        <main>
          <section className='formInfo'>
            <h3>are you ready?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.startClicked} id='nextInStart'>Start!</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Start;