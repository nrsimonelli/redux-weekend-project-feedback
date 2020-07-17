import React, { Component } from 'react';
import axios from 'axios';


class Understanding extends Component {

  continueClicked = () =>{
    // takes you to support component
    console.log('continue was clicked');
    this.props.history.push('/support');
  } // end continueClicked

  render() {
    return (
      <div>
        <h1>Understanding</h1>
        <main>
          <section className='formInfo'>
            <h3>How well do you understand today's material?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.continueClicked} id='continueInUnderstanding'>Continue</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Understanding;