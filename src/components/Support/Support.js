import React, { Component } from 'react';
import axios from 'axios';


class Support extends Component {

  continueClicked = () =>{
    // takes you to comments
    console.log('continue was clicked');
    this.props.history.push('/add_comment');
  } // end continueClicked

  render() {
    return (
      <div>
        <h1>Support</h1>
        <main>
          <section className='formInfo'>
            <h3>how supported do you feel?</h3>
          </section>
          <section className='nextPath'>
            <button onClick={this.continueClicked} id='continueInSupport'>Continue</button>
          </section>
        </main>
      </div>
    ); // end return
  } // end render
} // end class

export default Support;