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
      <div>
        <h1>Thanks</h1>
        <main>
          <section className='formInfo'>
            <h3>Thank you!</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.returnClicked} id='returnInThankYou'>Return Home</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Thank_You;